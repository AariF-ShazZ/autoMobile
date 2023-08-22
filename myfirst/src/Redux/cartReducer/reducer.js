import * as types from "./actionTypes"
const initialState = {
    cart:[],
}

export const cartReducer = (state=initialState,{type,payload}) =>{
     switch(type){
    case types.ADD_TO_CART:{
        console.log("cart reducer",payload);
        return {
            ...state,cart:[...state.cart,payload]
        }
    }

    default: return state
}
}