import React, { useContext, createContext, useEffect, useReducer } from "react";
import {reducer} from './reducer'
export const Cart = createContext()

export async function getProducts() {
    const products = await fetch('https://fakestoreapi.com/products');
    return await products.json();
}

export const Context = ({ children }) => {
    const [state,dispatch]=useReducer(reducer,{
        products : [],
        cart :[]
    })

    useEffect(() => {
        const fetchProducts=async() =>{
            const response=await getProducts();
            const data = response.map((product) => ({
                category: product.category,
                   id: product.id,
                   title: product.title,
                   description: product.description,
                   price: product.price,
                   image: product.image,
                   rate: product.rating.rate,
                   count: product.rating.count,
               }))
               dispatch({ type: "SET_MY_PRODUCTS", payload: data }); 
        }
        fetchProducts()   

    }, [])
  
    
    return <Cart.Provider value={{ state ,  dispatch }}>
        {children}
    </Cart.Provider>
}
 export const CartState =()=>{
    return useContext(Cart)

 } 


