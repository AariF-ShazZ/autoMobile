import * as types from "./actionTypes"
import axios from "axios"
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

export const login  = (payload) => (dispatch) => {
    dispatch(loginRequest())
    return axios.post("https://reqres.in/api/login",payload)
    .then((res) => {
        console.log("login",res.data.token);
        dispatch(loginSuccess(res.data.token))
    })
    .catch((err) => dispatch(loginError()))
}