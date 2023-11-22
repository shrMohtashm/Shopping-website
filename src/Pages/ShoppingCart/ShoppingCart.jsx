import React, { Fragment, useEffect, useState } from 'react'
import { CartState } from '../../Context/ShoppingCart-Context'
import { FaTrash } from "react-icons/fa";
import {Button } from 'reactstrap'
import { Link } from 'react-router-dom';

const truncateTitle = (title) => {
  const words = title.split(' ');
  const truncatedWords = words.slice(0,4);
  return truncatedWords.join(' ');
};

export default function ShoppingCart() {
  const { state, dispatch } = CartState()
  const [total,setTotal]=useState(0)
  const [data,setData]=useState([])

  useEffect(()=>{
    const cart = JSON.parse(localStorage.getItem('cart'))
    setData(cart)

  },[])

  useEffect(()=>{
    totalPrice()
  },[data,state.products])


  const removeItem=(product)=>{
    const updateArray=data.filter(item => item.id !== product.id)
    setData(updateArray)
    localStorage.setItem('cart',JSON.stringify(updateArray))
  }

  const increaseQuantity=(product)=>{
    const index=data.findIndex(item => item.id == product.id)
    if(index !== -1){
      data[index]={
        ...data[index],
        count : data[index].count + 1
      };
      setData([...data])
      localStorage.setItem('cart',JSON.stringify(data))
    }

  }

  const totalPrice=()=>{
    if (!state.products || !data) {
      return;
    }
      var prices=[]
    
      data.map((item)=>{
        const product=state.products.find((x=>x.id ==item.id))
        if(product){
          prices.push( 
            {price: state.products.filter((product)=> product.id == item.id)[0].price || 0,
              count: item.count
           }
           )
        }
      })
      let sum = prices.reduce(function (acc, item) { return acc + (item.price * item.count) }, 0);
      const total=sum.toFixed(2)
     setTotal(total)
   
  }



  const decreseQuantity=(product)=>{
    const index=data.findIndex(item => item.id == product.id)
    if(index !== -1){
      if(data[index].count == 1){
        removeItem(product)
      }
      else{
        data[index]={
          ...data[index],
          count : data[index].count - 1
        };
        setData([...data])
        localStorage.setItem('cart',JSON.stringify(data))
      }
    
    }
  }

  return (
    <>
      <div className='row bg-dark' style={{height:'100vh'}}>
        <div className='col-md-1'></div>
        <div className='col-md-10' >
          <div className='row mt-5'>
            <div className='col-md-12'>
              <h2 className='text-light text-center fw-bold'> سبد خرید</h2>
            </div>
            <div className='col-md-12 p-5 '>
            <div className='text-start bg-light px-2 py-3 border mb-1'>
          totalPrice: 
          {total}
          $
          </div>
              {

                data.map((item) => { 
                
                  const product = state.products.find((product) => product.id === item.id)
                  const index=data.findIndex(x => x.id == item.id)
                  if(product){
                  return (
                    <Fragment key={product.id}>
                     <div className='d-flex justify-content-between bg-light px-2 py-3 border mb-1'>
                    <div className='col-md-4'>

                    <Button onClick={()=>removeItem(product)} outline ={true}>
                  <FaTrash color='red'/></Button>
                  <Button className='text-success  fw-bold' color='none' onClick={()=> increaseQuantity(product)}>
                    +
                  </Button>
                  <span>
                    {data[index].count}
                  </span>
                  <Button className='text-danger fw-bold' color='none' outline ={true} onClick={()=> decreseQuantity(product)}>
                    -
                  </Button>
                  <Button className='text-dark' color='none' outline ={true}>
                   
                    {
                     product.price
                    }
                    $
                  </Button>
                    </div>

                <div className='col-md-8 text-start'>
                <span>
                    {truncateTitle(product.title)}
                  </span>
                
                  <img src={product.image}
                    width={'40px'}
                    height={'40px'}
                    style={{
                     
                    }}
                  />
                  

                </div>

              </div>
                    </Fragment>
                  )

                }
       
                })
              }

<div className='text-start bg-light px-2 py-3 border mb-1'>
          <Link to='/checkout' className='text-decoration-none '>
          <Button block color='dark'>تکمیل  فرایند خرید</Button>
          {
            localStorage.setItem('TotalPrice', JSON.stringify(total))
          }
          </Link>
          </div>
            </div>
          </div>
        </div>
      </div>
      

    </>
  )
}
