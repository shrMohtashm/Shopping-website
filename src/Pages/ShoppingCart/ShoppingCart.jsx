import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from "react-icons/fa";
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom';
import { addToCart, decreaseQuantity, removeFromCart, selectCartItems, selectProducts } from '../../redux/actions/action';
import { truncateTitle } from '../../utils/helperFunctions';
export default function ShoppingCart() {

  const cartItems = useSelector(selectCartItems)
  const products = useSelector(selectProducts)
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    totalPrice()
  },[cartItems])

  // useEffect(()=>{
  //   throw new Error("Something went wronge Error")
  // },[])
  
  const totalPrice = () => {
    var prices = []
    cartItems.map((item) => {
      const product = products.find((x => x.id == item.id))
      if (product) {
        prices.push(
          {
            price: products.filter((product) => product.id == item.id)[0].price || 0,
            count: item.count
          }
        )
      }
    })
    let sum = prices.reduce(function (acc, item) { return acc + (item.price * item.count) }, 0);
    const total = sum.toFixed(2)
    setTotal(total)
  }



  return (
    <>
      <div className='row bg-dark' style={{ height: '100vh' }}>
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

                cartItems.map((item) => {
                  const product = products.find((product) => product.id === item.id)
                  const index = cartItems.findIndex(x => x.id == item.id)
                  if (product) {
                    return (
                      <Fragment key={product.id}>
                        <div className='d-flex justify-content-between bg-light px-2 py-3 border mb-1'>
                          <div className='col-md-4'>

                            <Button color='none' onClick={() => dispatch(removeFromCart(item.id))}>
                              <FaTrash color='red' />
                            </Button>

                            <Button className='text-success  fw-bold' color='none' onClick={() => dispatch(addToCart(item.id))} >
                              +
                            </Button>
                            <span>
                              {cartItems[index].count}
                            </span>
                
                            <Button className='text-danger fw-bold' color='none' outline={true} onClick={()=>dispatch(decreaseQuantity(item.id))}>
                              -
                            </Button>
                            <Button className='text-dark' color='none' outline={true}>

                              {
                                product.price
                              }
                              $
                            </Button>
                          </div>

                          <div className='col-md-8 text-start'>
                            <span>
                              {truncateTitle(product.title,4)}
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
