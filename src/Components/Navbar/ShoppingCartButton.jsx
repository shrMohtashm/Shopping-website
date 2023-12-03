import { Fragment, React, useState } from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import {
    Button, Badge, Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, selectCartItems, selectNumber, selectProducts } from '../../action';

const truncateTitle = (title) => {
    const words = title.split(' ');
    const truncatedWords = words.slice(0, 1);
    return truncatedWords.join(' ');
};

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
                    {
                        cartItems.map((cartItem) => {
                            const cartProduct = products.find(item => item.id == cartItem.id)
                            if (cartProduct) {

                                return (
                                    <Fragment key={cartProduct.id}>
                                        <DropdownItem divider />
                                        <DropdownItem style={{ width: "200px" }}
                                        >
                                            <div className='d-flex justify-content-between'>
                                                <Button color='none' onClick={() => dispatch(removeFromCart(cartProduct.id))}>
                                                    <FaTrash color='red' />
                                                </Button>

                                                <div>
                                                    <span>
                                                        {truncateTitle(cartProduct.title)}
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
