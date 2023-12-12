import React, {  useEffect, useState } from 'react'
import Carousel from '../../Components/Home/Carousel'
import { getCategories } from '../../services/productsServices'
import ProductList from '../../Components/products/ProductList'
import Discount from '../../Components/Home/Discount'




export default function HomePage() {
  const [categories, setCategories] = useState([])


  useEffect(() => {
    getCategories()
      .then(categories => {
        setCategories(categories)
      })
  }, [])

  return (
    <React.Fragment>
    <Carousel />
      <Discount />
     <ProductList categories={categories} />
    </React.Fragment>
  )
}
