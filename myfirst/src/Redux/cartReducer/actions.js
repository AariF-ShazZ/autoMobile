import * as types from "./actionTypes"

export const addToCart = (payload) => {
    return {
        type:types.ADD_TO_CART,
        payload
    }
}
export const increaseQuantity = (payload) => {
    console.log("paylaod",payload.id,payload.size);
    return {
        type:types.INCREASE_QUANTITY,
        payload
    }
}
export const decreaseQuantity = (payload) => {
    console.log("paylaod",payload.id,payload.size);
    return {
        type:types.DECREASE_QUANTITY,
        payload
    }
}
export const removeItem = (payload) => {
    // console.log("paylaod",payload.id,payload.size);
    return {
        type:types.REMOVE_ITEM,
        payload
    }
}
