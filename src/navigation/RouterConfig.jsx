import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../Components/NotFound'
import Layout from '../Components/Home/Layout'
import Loading from '../Components/Loading';

const HomePage = lazy(() => import('../Pages/Home/HomeView'));
const ShoppingCart = lazy(() => import('../Pages/ShoppingCart'));
const Checkout = lazy(() => import('../Pages/Checkout'));

export default function RouterConfig() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Suspense fallback={<Loading />}><HomePage /></Suspense>} />
            </Route>
            <Route path="/shoppingCart" element={<Suspense fallback={<div>Loading...</div>}><ShoppingCart /></Suspense>} />
            <Route path="/checkout" element={<Suspense fallback={<Loading />}><Checkout /></Suspense>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
