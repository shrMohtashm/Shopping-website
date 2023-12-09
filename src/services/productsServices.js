import { fetchProductsRequest,fetchProductsSuccess,fetchProductsFailure } from "../redux/actions/action";
import axiosInstance from "./apiConfig";


export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(fetchProductsRequest());
        // setTimeout(async () => {
          try {
            const response = await axiosInstance.get('/products');
            const products = response.data;
            dispatch(fetchProductsSuccess(products));
          } catch (error) {
            dispatch(fetchProductsFailure(error.message));
          }
        // }
    //      , 4000);
    };
};

export async function getCategories() {
    try {
      const response = await axiosInstance.get('/products/categories');
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }

