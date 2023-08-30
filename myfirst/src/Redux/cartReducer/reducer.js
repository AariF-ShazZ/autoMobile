import * as types from "./actionTypes"
const initialState = {
    cart:[],
}

export const cartReducer = (state=initialState,{type,payload}) =>{
    // console.log("cart_reducer",payload,type);
     switch(type){
    case types.ADD_TO_CART:{
        
        const isProduct = state.cart.find((ele) => {
            return ele.id === payload.id && ele.size === payload.size
        })
        let newCart
        if(isProduct){
            newCart = state.cart.map((ele) => {
                if( ele.id ==payload.id  && ele.size===payload.size){
                    return {...ele,qty:ele.qty+1}
                }else{
                    return ele
                }
            })
        }else{
            const newPayload = {
                ...payload,
                qty:1
            }
            // console.log("newPayload",newPayload);
            newCart = [...state.cart,newPayload]
        }
        return {
            ...state,cart:newCart
        }
    }

    case types.INCREASE_QUANTITY:{
        let increaseQuantityItem =state.cart.map((ele) =>{
            if(ele.id===payload.id && ele.size===payload.size){
                return {...ele,qty:ele.qty+1}
            }else {
                return ele
            }
        } )
        return {
            ...state,cart:increaseQuantityItem
        }
    }

    case types.DECREASE_QUANTITY:{
        let decreaseQuantityItem =state.cart.map((ele) =>{
            if(ele.id===payload.id && ele.size===payload.size){
                return {...ele,qty:ele.qty-1}
            }else { 
                return ele
            }
        } )
        return {
            ...state,cart:decreaseQuantityItem
        }
    }
    case types.REMOVE_ITEM:{
        let updatedCart =state.cart.filter((ele) => !(ele.id===payload.id && ele.size===payload.size))
        return {
            ...state,cart:updatedCart
        }

    }
    default: return state
}
}