import React from 'react'
import {Col,CardFooter,Card, CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap'
import { CartState } from '../Context/ShoppingCart-Context'
export default function Product({id,description,title,quantity,category,image,price}) {

  const truncateTitle = (title) => {
    const words = title.split(' ');
    const truncatedWords = words.slice(0,10);
    return truncatedWords.join(' ');
  };
  
  const {state , dispatch}=CartState()
    return (
    <Col lg='3' md='6' sm='12' xs='12' dir='ltr'>
  <Card className='p-3'>
    <CardImg
      alt="Card image cap"
      src={image}
      top
      width="100%"
      style={{objectFit:'contain'}}
    />
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
      <CardText style={{fontSize:'15px'}}>
       {truncateTitle(description)}
      </CardText>
   
     
    </CardBody>
    <CardFooter>
   <div className='d-flex justify-content-between'>
   <span>price: {price}</span>
    {quantity > 0 ? <div>
      {state.cart.some(item=>item.id === id) ? 
      <Button color='dark' onClick={()=>{
        dispatch({
          type:'REMOVE_FROM_CART',
          payload:{
            id
          }
        })
      }}>پاک کردن از سبد خرید</Button>
    :
    <Button color='dark' onClick={()=>{
      dispatch({
        type:'ADD_TO_CART',
        payload:{
          id
        }
      })
    }}>اضافه کردن به سبد خرید</Button>
    }
    </div> : <span>ناموجود</span>}
   </div>
        
      
  </CardFooter>
  </Card>
  </Col>
  )
}
