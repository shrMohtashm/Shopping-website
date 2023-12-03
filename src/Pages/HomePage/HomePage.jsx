import React, { useEffect, useState } from 'react'
import Carousel from '../../Components/Carousel'
import { getCategories } from '.';
import ProductList from '../../Components/ProductList';
import Toast from '../../Components/Toast/Toast';
import Discount from '../../Components/Discount';



export default function HomePage() {
  const [categories, setCategories] = useState([])
  const [toast, setToast] = useState({ type: 'info', message: '' })


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
      <Toast type={toast.type} message={toast.message} />
    </React.Fragment>
  )
}
