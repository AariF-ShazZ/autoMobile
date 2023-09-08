import * as types from "./actionTypes"
import axios from "axios"

const registerRequest  = () => {
    return {
        type:types.USER_REGISTER_REQUEST,
    }
}
const registerSuccess  = (payload) => {
    return {
        type:types.USER_REGISTER_SUCCESS,
        payload
    }
}
const registerError  = () => {
    return {
        type:types.USER_REGISTER_ERROR,
    }
}

const loginRequest  = () => {
    return {
        type:types.USER_LOGIN_REQUEST,
    }
}
const loginSuccess  = (payload) => {
    return {
        type:types.USER_LOGIN_SUCCESS,
        payload
    }
}
const loginError  = () => {
    return {
        type:types.USER_LOGIN_ERROR,
    }
}


const logoutSuccess = () => {
    return {
        type:types.USER_LOGOUT_SUCCESS
    }
}

export const registerAction  = (payload) => (dispatch) => {
    // console.log("Register payload",payload);
    dispatch(registerRequest())
    // return axios.post("https://reqres.in/api/login",payload)
    return axios.post("https://unusual-sandals-dog.cyclic.app/user/register",payload)
    .then((res) => {
        // console.log("Register",res.data);
        dispatch(registerSuccess())
    })
    .catch((err) => dispatch(registerError()))
}

export const login  = (payload) => (dispatch) => {
    console.log("login payload",payload);
    dispatch(loginRequest())
    // return axios.post("https://reqres.in/api/login",payload)
  return  axios.post("https://unusual-sandals-dog.cyclic.app/user/login",payload)
    .then((res) => {
        console.log("login",res.data);
        dispatch(loginSuccess(res.data.token))
    })
    .catch((err) => dispatch(loginError()))
}

export const logout = () => (dispatch) => {
    dispatch(logoutSuccess())
}