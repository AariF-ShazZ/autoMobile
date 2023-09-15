import * as types from "./actionTypes"
import axios from "axios"
export const addToCartRequest = () => {
    return {
        type:types.ADD_TO_CART_REQUEST
    }
}
export const addToCartSuccess = (payload) => {
    return {
        type:types.ADD_TO_CART_SUCCESS,
        payload
    }
}
export const addToCartError = () => {
    return {
        type:types.ADD_TO_CART_ERROR
    }
}

export const addToCart = (payload) => (dispatch) => {
    console.log("cart post payload",payload);
    dispatch(addToCartRequest())
    return axios.post(`https://unusual-sandals-dog.cyclic.app/cart/create`,payload,  {
        headers: {
        'Authorization': `${localStorage.getItem("token")}`, 
      }})
    .then((res) =>{
        console.log("cart post => ",res);
        // dispatch(addToCartSuccess())
    } ).catch((err) => dispatch(addToCartError()))
}


export const getCartProductsRequest = () => {
    return {
        type:types.GET_CART_PRODUCTS_REQUEST
    }
}
export const getCartProductsSuccess = (payload) => {
    return {
        type:types.GET_CART_PRODUCTS_SUCCESS,
        payload
    }
}
export const getCartProductsError = () => {
    return {
        type:types.GET_CART_PRODUCTS_ERROR
    }
}

export const getCartProducts = () => (dispatch) => {

    dispatch(getCartProductsRequest())
    return axios.get(`https://unusual-sandals-dog.cyclic.app/cart/read`, {
        headers: {
        'Authorization': `${localStorage.getItem("token")}`, 
      }})
    .then((res) =>{
        console.log("cart get products => ",res.data.data);
        dispatch(getCartProductsSuccess(res.data.data))
    } ).catch((err) => dispatch(getCartProductsError()))
}



export const delteteCartProductRequest = () => {
    return {
        type:types.GET_CART_PRODUCTS_REQUEST
    }
}
export const delteteCartProductSuccess = (payload) => {
    return {
        type:types.GET_CART_PRODUCTS_SUCCESS,
        payload
    }
}
export const delteteCartProductError = () => {
    return {
        type:types.GET_CART_PRODUCTS_ERROR
    }
}

export const deleteCartProduct = (id) => (dispatch) => {

    dispatch(getCartProductsRequest())
    return axios.delete(`https://unusual-sandals-dog.cyclic.app/cart/delete/${id}`, {
        headers: {
        'Authorization': `${localStorage.getItem("token")}`, 
      }})
    .then((res) =>{
        console.log("cart delete products => ",res.data.data);
        dispatch(getCartProductsSuccess(res.data.data))
    } ).catch((err) => dispatch(getCartProductsError()))
}


export const increaseCartQuantityRequest = () => {
    return {
        type:types.INCREASE_CART_QUANTITY_REQUEST
    }
}
export const increaseCartQuantitySuccess = (payload) => {
    return {
        type:types.INCREASE_CART_QUANTITY_SUCCESS,
        payload
    }
}
export const increaseCartQuantityError = () => {
    return {
        type:types.INCREASE_CART_QUANTITY_ERROR
    }
}

export const increaseCartQuantity = (payload) => (dispatch) => {

    dispatch(increaseCartQuantityRequest())
    return axios.post(`https://unusual-sandals-dog.cyclic.app/cart/increaseQty/`, payload,{
        headers: {
        'Authorization': `${localStorage.getItem("token")}`, 
      }})
    .then((res) =>{
        console.log("cart increase products => ",res.data.data);
        dispatch(increaseCartQuantitySuccess(res.data.data))
    } ).catch((err) => dispatch(increaseCartQuantityError()))
}

export const decreaseCartQuantityRequest = () => {
    return {
        type:types.INCREASE_CART_QUANTITY_REQUEST
    }
}
export const decreaseCartQuantitySuccess = (payload) => {
    return {
        type:types.INCREASE_CART_QUANTITY_SUCCESS,
        payload
    }
}
export const decreaseCartQuantityError = () => {
    return {
        type:types.INCREASE_CART_QUANTITY_ERROR
    }
}

export const decreaseCartQuantity = (payload) => (dispatch) => {

    dispatch(decreaseCartQuantityRequest())
    return axios.post(`https://unusual-sandals-dog.cyclic.app/cart/decreaseQty/`, payload,{
        headers: {
        'Authorization': `${localStorage.getItem("token")}`, 
      }})
    .then((res) =>{
        console.log("cart decrease products => ",res.data.data);
        dispatch(decreaseCartQuantitySuccess(res.data.data))
    } ).catch((err) => dispatch(decreaseCartQuantityError()))
}


const orderPostRequest = () => {
    return{
        type:types.ORDER_POST_REQUEST
    }
}


const orderPostSuccess = (payload) => {
    return {
        type:types.ORDER_POST_SUCCESS,
        payload
    }
}

const orderPostError = () => {
    return{
        type:types.ORDER_POST_ERROR
    }
}


export const orderPost = (payload) => (dispatch) => {
    dispatch(orderPostRequest())
    return axios.post(`https://unusual-sandals-dog.cyclic.app/order/create`,payload,{
        headers: {
        'Authorization': `${localStorage.getItem("token")}`, 
      }})
    .then((res) =>{  
        // console.log("order res",res);
        dispatch(orderPostSuccess())
    })
    .catch((err) =>  dispatch(orderPostError()))
}


const ordersGetRequest = () => {
    return{
        type:types.ORDERS_GET_REQUEST
    }
}


const ordersGetSuccess = (payload) => {
    return {
        type:types.ORDERS_GET_SUCCESS,
        payload
    }
}

const ordersGetError = () => {
    return{
        type:types.ORDERS_GET_ERROR
    }
}


export const ordersGet = () => (dispatch) => {
    dispatch(ordersGetRequest())
    return axios.get(`https://unusual-sandals-dog.cyclic.app/order/read`,{
        headers: {
        'Authorization': `${localStorage.getItem("token")}`, 
      }})
    .then((res) =>{  
        console.log("order res get",res.data.data);
        dispatch(ordersGetSuccess(res.data.data))
    })
    .catch((err) =>  dispatch(ordersGetError()))
}
