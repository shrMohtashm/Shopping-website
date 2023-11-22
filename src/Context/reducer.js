export function reducer(state,action){
    switch (action.type) {
        case "SET_MY_PRODUCTS":
      return { ...state, products: action.payload };

      case'ADD_TO_CART':
      return {
        ...state,
        cart:[...state.cart ,
            {...action.payload , count: 1}
        ]
      };
        
      case'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      }

      case 'REMOVE_ALL_PRODUCTS':
        return{
          ...state,
          cart :[]
        }
    
        default:
            return state;
    }

}