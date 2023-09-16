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
    console.log("login payload",payload);
    dispatch(loginRequest())
  return  axios.post("https://unusual-sandals-dog.cyclic.app/user/login",payload)
    .then((res) => {
        console.log("login",res.data.data);
        // Convert the user data object to a JSON string
        const userDataString = JSON.stringify(res.data.data);

        localStorage.setItem("userType", userDataString);
        
        // Check if the user is not an admin before storing the token
        if (res.data.data.usertype !== "admin") {
            localStorage.setItem("token", res.data.token);
            localStorage.removeItem("userType")
        }

        dispatch(loginSuccess())
    })
    .catch((err) => dispatch(loginError()))
}


const getUsersRequest  = () => {
    return {
        type:types.GET_USER_REQUEST,
    }
}
const getUsersSuccess  = (payload) => {
    return {
        type:types.GET_USER_SUCCESS,
        payload
    }
}
const getUsersError  = () => {
    return {
        type:types.GET_USER_ERROR,
    }
}

export const getUsersData  = () => (dispatch) => {
    dispatch(getUsersRequest())
    // return axios.post("https://reqres.in/api/login",payload)
  return  axios.get("https://unusual-sandals-dog.cyclic.app/user/get")
    .then((res) => {
        console.log("login",res.data.users);
        dispatch(getUsersSuccess(res.data.users))
    })
    .catch((err) => dispatch(getUsersError()))
}
const deleteUsersRequest  = () => {
    return {
        type:types.DELETE_USER_REQUEST,
    }
}
const deleteUsersSuccess  = (payload) => {
    return {
        type:types.DELETE_USER_SUCCESS,
        payload
    }
}
const deleteUsersError  = () => {
    return {
        type:types.DELETE_USER_SUCCESS,
    }
}

export const deleteUsersData  = (id) => (dispatch) => {
    dispatch(deleteUsersRequest())
    // return axios.post("https://reqres.in/api/login",payload)
  return  axios.delete(`https://unusual-sandals-dog.cyclic.app/user/delete/${id}`)
    .then((res) => {
        console.log("login",res.data.users);
        // dispatch(deleteUsersSuccess(res))
    })
    .catch((err) => dispatch(deleteUsersError()))
}


const logoutSuccess = () => {
    return {
        type:types.USER_LOGOUT_SUCCESS
    }
}




export const logout = () => (dispatch) => {
    localStorage.removeItem("token")
    localStorage.setItem("pageValue","user")
    localStorage.removeItem("userType")
    dispatch(logoutSuccess())
}