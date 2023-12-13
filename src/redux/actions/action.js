export const selectCartItems = (state => state.products.cart)

export const selectProducts = (state => state.products.entities)

export const selectNumber = (state => state.products.number)

export const selectTotalPrice = (state => state.products.totalPrice)

export const selectStatus=(state => state.products.status)

export const selectErrorMessage=(state => state.products.error)


export const removeFromCart=(itemId)=>({ 
        type: 'REMOVE_FROM_CART',
        payload: itemId    
})

export const addToCart=(itemId)=>({
    type: 'ADD_TO_CART',
    payload: itemId
  })

  export const decreaseQuantity=(itemId)=>({
    type:'DECREASE_QUANTITY',
    payload:itemId
  })
  
export const fetchProductsRequest = () => ({
    type: 'FETCH_PRODUCTS_REQUEST',
});

export const fetchProductsSuccess = (products) => ({
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: products,
});

export const fetchProductsFailure = (error) => ({
    type: 'FETCH_PRODUCTS_FAILURE',
    payload: error,
});







