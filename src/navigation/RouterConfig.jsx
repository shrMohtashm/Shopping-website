import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from 'components/NotFound'
import Layout from 'components/Home/Layout'
import Loading from 'components/Loading';

const HomePage = lazy(() => import('pages/Home/HomeView'));
const ShoppingCart = lazy(() => import('pages/ShoppingCart'));
const Checkout = lazy(() => import('pages/Checkout'));

export default function RouterConfig() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Suspense fallback={<Loading />}><HomePage /></Suspense>} />
            </Route>
            <Route path="/shoppingCart" element={<Suspense fallback={<Loading />}><ShoppingCart /></Suspense>} />
            <Route path="/checkout" element={<Suspense fallback={<Loading />}><Checkout /></Suspense>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
