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

export const getProducts = (page,params) => (dispatch) => {
    console.log("page",page);
    dispatch(getProductsRequest())
    // return axios.get(`https://ill-cyan-buffalo-kilt.cyclic.app/products?_page=${page}&_limit=10`,params)
    return axios.get(`https://unusual-sandals-dog.cyclic.app/product/read?page=${page}&limit=10`,params)
    .then((res) =>{  
        console.log("res => ",res.data.data);
        dispatch(getProductsSuccess(res.data.data))
    })
    .catch((err) =>  dispatch(getProductsError()))
}

const deleteProductsRequest = () => {
    return {
        type:types.DELETE_PRODUCT_REQUEST
    }
}
const deleteProductsSuccess = (payload) => {
    return {
        type:types.DELETE_PRODUCT_SUCCESS,
        payload
    }
}
const deleteProductsError = () => {
    return {
        type:types.DELETE_PRODUCT_ERROR
    }
}


export const deleteProduct = (id) => (dispatch) => {
    console.log("delete id",id);
    dispatch(deleteProductsRequest())
    return axios.delete(`https://unusual-sandals-dog.cyclic.app/product//delete/${id}`)
    .then((res) =>{  
        console.log("res => ",res.data.remainingData);
        dispatch(deleteProductsSuccess())
    })
    .catch((err) =>  dispatch(deleteProductsError()))
}


const postProductsRequest = () => {
    return {
        type:types.POST_PRODUCT_REQUEST
    }
}
const postProductsSuccess = (payload) => {
    return {
        type:types.POST_PRODUCT_SUCCESS,
        payload
    }
}
const postProductsError = () => {
    return {
        type:types.POST_PRODUCT_ERROR
    }
}


export const postProduct = (payload) => (dispatch) => {
    console.log("post product",payload);
    dispatch(postProductsRequest())
    return axios.post(`https://unusual-sandals-dog.cyclic.app/product/create`,payload)
    .then((res) =>{  
        console.log("postProduct res => ",res);
        dispatch(postProductsSuccess(res.data.data))
    })
    .catch((err) =>  dispatch(postProductsError()))
}

const singleProductRequest = () => {
    return{
        type:types.SINGLE_PRODUCT_REQUEST
    }
}


const singleProductSuccess = (payload) => {
    console.log("single product",payload);
    return {
        type:types.SINGLE_PRODUCT_SUCCESS,
        payload
    }
}

const singleProductError = () => {
    return{
        type:types.SINGLE_PRODUCT_ERROR
    }
}


export const getSingleProducts = (id) => (dispatch) => {
    // console.log("id",id);
    dispatch(singleProductRequest())
    return axios.get(`https://unusual-sandals-dog.cyclic.app/product/read/${id}`)
    .then((res) =>{  
        console.log("single res",res.data.data);
        dispatch(singleProductSuccess(res.data.data))
    })
    .catch((err) =>  dispatch(singleProductError()))
}

const updateProductRequest = () => {
    return{
        type:types.UPDATE_PRODUCT_REQUEST
    }
}


const updateProductSuccess = (payload) => {
    return {
        type:types.UPDATE_PRODUCT_SUCCESS,
        payload
    }
}

const updateProductError = () => {
    return{
        type:types.UPDATE_PRODUCT_ERROR
    }
}


export const updateProducts = (id,payload) => (dispatch) => {
    dispatch(updateProductRequest())
    return axios.patch(`https://unusual-sandals-dog.cyclic.app/product/update/${id}`,payload)
    .then((res) =>{  
        // console.log("update res",res);
        dispatch(updateProductSuccess())
    })
    .catch((err) =>  dispatch(updateProductError()))
}

const getAllProductsRequest = () => {
    return {
        type:types.GET_ALL_PRODUCTS_REQUEST
    }
}
const getAllProductsSuccess = (payload) => {
    return {
        type:types.GET_ALL_PRODUCTS_SUCCESS,
        payload
    }
}
const getAllProductsError = () => {
    return {
        type:types.GET_ALL_PRODUCTS_ERROR
    }
}

export const getAllProducts = (page,params) => (dispatch) => {
    console.log("page",page);
    dispatch(getAllProductsRequest())
    // return axios.get(`https://ill-cyan-buffalo-kilt.cyclic.app/products?_page=${page}&_limit=10`,params)
    return axios.get(`https://unusual-sandals-dog.cyclic.app/product/all`)
    .then((res) =>{  
        console.log("get all products res => ",res.data.productResult);
        dispatch(getAllProductsSuccess(res.data.productResult))
    })
    .catch((err) =>  dispatch(getAllProductsError()))
}
