import React, {  useEffect, useState } from 'react'
import Carousel from './components/Carousel'
import { getCategories } from '../../services/productsServices'
import ProductList from '../../components/products/ProductList'
import Discount from './components/Discount'




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
