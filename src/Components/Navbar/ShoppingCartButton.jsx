import React ,{ Fragment,  useState } from 'react'
import {Button, Badge, Dropdown,DropdownToggle,DropdownMenu,DropdownItem,} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, selectCartItems, selectNumber, selectProducts } from 'redux/actions/action';
import { truncateTitle } from 'utils/helperFunctions';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";


export default function ShoppingCartButton() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const cartItems = useSelector(selectCartItems)
    const products = useSelector(selectProducts)
    const dispatch = useDispatch()
    const count = useSelector(selectNumber)
    

    return (
        <>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} className='ms-5'>
                <DropdownToggle className='border' color="light" caret>
                    <Badge pill color="success">
                        {count}
                    </Badge>
                    <MdOutlineShoppingCart />
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header className='text-center text-dark'>سبدخرید</DropdownItem>
                    {count >0 &&
                            cartItems.map((cartItem) => {
                            const cartProduct = products.find(item => item.id == cartItem.id)
                            if (cartProduct) {

                                return (
                                    <Fragment key={cartProduct.id}>
                                        <DropdownItem divider />
                                        <DropdownItem style={{ width: "200px" }}
                                        >
                                            <div className='d-flex justify-content-between'>
                                                <span color='none'
                                                 onClick={() => dispatch(removeFromCart(cartProduct.id))}
                                                 data-testid={`button-${cartProduct.id}`}
                                                 >
                                                <FaTrashAlt color='red'/>
                                                   
                                                </span>

                                                <div>
                                                    <span>
                                                        {truncateTitle(cartProduct.title,1)}
                                                    </span>

                                                    <img src={cartProduct.image}
                                                        width={'40px'}
                                                        height={'40px'}
                                                        style={{
                                                            borderRadius: '20px',
                                                            marginRight: "2px"
                                                        }}

                                                    />

                                                </div>
                                            </div>
                                        </DropdownItem>
                                    </Fragment>
                                )
                            }
                        })
                          
                      
                     
                    }
                    {
                        cartItems.length > 0 ?
                            <Link to='/shoppingCart'>
                                <Button block color='dark' size='sm'>ادامه</Button>
                            </Link>
                            :
                            <div className='text-center'> خالی است</div>
                    }
                </DropdownMenu>
            </Dropdown>

        </>
    )
}
