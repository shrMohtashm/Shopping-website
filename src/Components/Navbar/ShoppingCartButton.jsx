import { Fragment, React, useState } from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import {
    Button, Badge, Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { CartState } from '../../Context/ShoppingCart-Context';
import { Link } from 'react-router-dom';

const truncateTitle = (title) => {
    const words = title.split(' ');
    const truncatedWords = words.slice(0, 1);
    return truncatedWords.join(' ');
};

export default function ShoppingCartButton() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const { state, dispatch } = CartState()


    return (
        <>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} className='ms-5'>
                <DropdownToggle className='border' color="light" caret>
                    <Badge pill color="success">
                        {state.cart.length}
                    </Badge>
                    <MdOutlineShoppingCart />
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header className='text-center text-dark'>سبدخرید</DropdownItem>

                    {
                        state.cart.map((cartItem) => {
                            const cartProduct = state.products.find(item => item.id == cartItem.id)
                            if (cartProduct) {

                                return (
                                    <Fragment key={cartProduct.id}>
                                        <DropdownItem divider />
                                        <DropdownItem style={{ width: "200px" }}
                                        >
                                            <div className='d-flex justify-content-between'>
                                                <div>
                                                    <img src={cartProduct.image}
                                                        width={'40px'}
                                                        height={'40px'}
                                                        style={{
                                                            borderRadius: '20px',
                                                            marginRight: "2px"
                                                        }}
                                                    />
                                                    <span>
                                                        {truncateTitle(cartProduct.title)}
                                                    </span>

                                                </div>
                                                <span 
                                                onClick={() => dispatch({
                                                    type: 'REMOVE_FROM_CART',
                                                    payload: {
                                                        id: cartProduct.id
                                                    }
                                                })}>
                                                    <FaTrash color='red' />
                                                    </span>
                                            </div>
                                        </DropdownItem>
                                    </Fragment>

                                )
                            }

                        })
                    }


                    {
                        state.cart.length > 0 ?
                            <Link to='/shoppingCart' >
                                {localStorage.setItem('cart', JSON.stringify(state.cart))}
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
