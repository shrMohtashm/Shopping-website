import { produce } from "immer";
import { combineReducers } from "redux";

const initalState = {
    status: 'idle',
    entities: [],
    cart: [],
    number: 0,
    error: ''
}

export const productsReducer = produce((state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const itemId = action.payload
            const existingItem = state.cart.find(item => item.id === itemId);
            if (existingItem) {
                existingItem.count++
            } else {
                state.cart.push({
                    id: itemId,
                    count: 1
                });
            }
            state.number++;
            break;
        case 'REMOVE_FROM_CART':
            const count = state.cart.find(item => item.id === action.payload).count
            state.number = state.number - count;
            state.cart = state.cart.filter(item => item.id !== action.payload)
            break;

        case 'DECREASE_QUANTITY':
            const cartItem = state.cart.find(item => item.id === action.payload);
            if (cartItem.count === 1) {
                state.cart = state.cart.filter(item => item.id !== action.payload);
            } else {
                cartItem.count--;
            }
            state.number--;
            break;

        case 'REMOVE_ALL_PRODUCTS':
            state.cart = []
            state.number = 0
            break;

        case 'FETCH_PRODUCTS_REQUEST':
            state.status = 'pending';
            break;
        case 'FETCH_PRODUCTS_SUCCESS':
            state.status = 'idle';
            state.entities = action.payload;
            state.error = '';
            break;
        case 'FETCH_PRODUCTS_FAILURE':
            state.status = 'failure';
            state.entities = [];
            state.error = action.payload;
            break;
    }
}, initalState)




const rootReducer = combineReducers({
    products: productsReducer
})

export default rootReducer;


