import * as types from "./actionTypes"
import axios from "axios"

const getProductsRequest = () => {
    return {
        type:types.GET_PRODUCTS_REQUEST
    }
}
const getProductsSuccess = (payload) => {
    return {
        type:types.GET_PRODUCTS_SUCCESS,
        payload
    }
}
const getProductsError = () => {
    return {
        type:types.GET_PRODUCTS_ERROR
    }
}

const singleProductRequest = () => {
    return{
        type:types.SINGLE_PRODUCTS_REQUEST
    }
}

const singleProductSuccess = (paylaod) => {
    // console.log("payload",paylaod);
    return{
        type:types.SINGLE_PRODUCTS_SUCCESS,
        paylaod
    }
}
const singleProductError = () => {
    return{
        type:types.SINGLE_PRODUCTS_ERROR
    }
}


export const getProducts = () => (dispatch) => {
    dispatch(getProductsRequest())
    return axios.get("https://green-hermit-crab-vest.cyclic.app/products")
    .then((res) =>{  
        // console.log("res => ",res.data);
        dispatch(getProductsSuccess(res.data))
    })
    .catch((err) =>  dispatch(getProductsError()))
}

export const getSingleProducts = (id) => (dispatch) => {
    dispatch(singleProductRequest())
    return axios.get(`https://green-hermit-crab-vest.cyclic.app/products/${id}`)
    .then((res) =>{  
        console.log("resksjdfkl => ",res.data);
        dispatch(singleProductSuccess(res.data))
    })
    .catch((err) =>  dispatch(singleProductError()))
}