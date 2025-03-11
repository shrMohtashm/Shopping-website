import React, { useState, useEffect, Suspense, lazy } from "react";
import { CardGroup, Input, Row } from "reactstrap";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "services/productsServices";
import Loading from "components/Common/Loading";
import Toast from "components/Toast";
import {
  selectErrorMessage,
  selectProducts,
  selectStatus,
} from "redux/actions/action";
import ProductSkeleton from "components/products/ProductSkeleton";
const Product = lazy(() => import("components/products/Product"));

export default function ProductList({ categories }) {
  const [searchItem, setSearchItem] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  //error handling states
  const status = useSelector(selectStatus);
  const errorMessage = useSelector(selectErrorMessage);
  const [toast, setToast] = useState({ type: "info", message: "" });

  // pagination states
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 8;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (errorMessage) {
      setToast({ type: "error", message: errorMessage });
    }
  }, [errorMessage, setToast]);

  const products = useSelector(selectProducts);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = filteredProducts.slice(startIndex, endIndex);
  // setTotalPages(Math.ceil(data.length / itemsPerPage))

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  useEffect(() => {
    const filterd = products.filter((product) => {
      return product.title.toString().toLowerCase().includes(searchItem);
    });
    setFilteredProducts(filterd);
    setTotalPages(Math.ceil(filterd.length / itemsPerPage));
  }, [searchItem, products]);

  const handleSearch = (event) => {
    setSearchItem(event.target.value.toLowerCase());
  };

  const filterItem = (selectedCategory) => {
    let updatedList;
    if (selectedCategory === "category") {
      updatedList = products;
    } else {
      updatedList = products.filter(
        (item) => item.category === selectedCategory
      );
    }
    setFilteredProducts(updatedList);
    setTotalPages(Math.ceil(updatedList.length / itemsPerPage));
    setCurrentPage(0);
  };

  const showAllProducts = () => {
    setFilteredProducts(products);
    setTotalPages(Math.ceil(products.length / itemsPerPage));
    setCurrentPage(0);
  };

  return (
    <>
      <h2 className="text-center my-4 fw-bold">Products</h2>
      <div className="text-center py-4">
        <button
          className="btn btn-dark btn-sm m-2 p-2"
          onClick={showAllProducts}
        >
          All Products
        </button>
        {categories.map((category) => {
          return (
            <button
              key={category}
              className="btn btn-dark btn-sm m-2 p-2"
              onClick={() => filterItem(category)}
            >
              {category}
            </button>
          );
        })}
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 text-center">
            <Input
              className="text-center"
              type="text"
              placeholder="Search by product name"
              value={searchItem}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>

      <Suspense fallback={<Loading />}>
        {status === "pending" ? (
          <Row>
            {Array.from({ length: itemsPerPage }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </Row>
        ) : (
          <>
            <CardGroup>
              {subset.map((item) => (
                <Product
                  key={item.id}
                  id={item.id}
                  description={item.description}
                  title={item.title}
                  quantity={item.rating.count}
                  category={item.category}
                  image={item.image}
                  price={item.price}
                />
              ))}
            </CardGroup>
            {totalPages > 1 && (
              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                pageCount={totalPages}
                onPageChange={handlePageChange}
                forcePage={currentPage}
                containerClassName={"pagination"}
                pageLinkClassName={"page-number"}
                previousLinkClassName={"page-number"}
                nextLinkClassName={"page-number"}
                activeLinkClassName={"active"}
              />
            )}
          </>
        )}
      </Suspense>
      <Toast type={toast.type} message={toast.message} />
    </>
  );
}
