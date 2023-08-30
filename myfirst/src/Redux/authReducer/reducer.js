import * as types from "./actionTypes"

const initialState = {
    isAuth:false,
    token:"",
    isAuthLoading:false,
    isAuthError:false,
}
export const authReducer = (state=initialState,{type,payload}) => {
    switch(type){
        case types.USER_LOGIN_REQUEST:{
            return {
                ...state,isAuthLoading:true
            }
        }
        case types.USER_LOGIN_SUCCESS:{
            return {
                ...state,
                token:payload,
                isAuthLoading:false,
                isAuth:true
            }
        }
        case types.USER_LOGIN_ERROR:{
            return {
                ...state,
                isError:true,
                isAuthLoading:false
            }
        }

        default: return state
    }
}