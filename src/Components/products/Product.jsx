import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from "react-icons/fa";
import { Col, CardFooter, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import { selectCartItems } from 'redux/actions/action';
import { truncateTitle } from 'utils/helperFunctions';

export default function Product({ id, description, title, quantity, category, image, price }) {

  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  return (
    <Col lg='3' md='6' sm='12' xs='12' dir='ltr' className='p-2'>
    <div className='border border-2  h-100'>
    <Card className='p-3'>
       {
         <CardImg
         alt="Card image cap"
         src={image}
         top
         width="100%"
         style={{ objectFit: 'contain' }}
       />
       }
        <CardBody>
          <CardTitle tag="h5">
            {title}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-danger"
            tag="h6"
          >
            {category}
          </CardSubtitle>
          <CardText style={{ fontSize: '15px' }}>
            { truncateTitle(description,10) }
          </CardText>
        </CardBody>
       
    <CardFooter>
    <div className='d-flex justify-content-between'>
      <span>price: {price }$</span>
      {quantity > 0 ? <div>
        {cartItems.some(item => item.id === id) ?
          <Button color='dark' className='me-2' onClick={() => dispatch({
            type: 'REMOVE_FROM_CART',
            payload: id
          })}>
            <FaTrash color='red' />
          </Button>
          : null}
        <Button color='dark' onClick={() => dispatch({
          type: 'ADD_TO_CART',
          payload: id
        })}>اضافه کردن به سبد خرید</Button>

      </div> 
      : 
      <span>ناموجود</span>}
    </div>
  </CardFooter>
      </Card>
    </div>
    </Col>
  )
}
