import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from '../Pages/Home/HomeView'
import ShoppingCart from '../Pages/ShoppingCart/ShoppingCart'
import Checkout from '../Pages/Checkout/Checkout'
import NotFound from '../components/NotFound'
import Layout from '../Pages/Home/components/Layout'

export default function RouterConfig() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
            </Route>
            <Route path="/shoppingCart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
