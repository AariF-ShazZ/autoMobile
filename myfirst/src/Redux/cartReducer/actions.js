import * as types from "./actionTypes"

export const addToCart = (payload) => {
    return {
        type:types.ADD_TO_CART,
        payload
    }
}
