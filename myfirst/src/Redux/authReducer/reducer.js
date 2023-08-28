import * as types from "./actionTypes"

const initialState = {
    token:"",
    isLoading:false,
    isError:false,
}
export const reducer = (state=initialState,{type,payload}) => {
    switch(type){
        case types.USER_LOGIN_REQUEST:{
            return {
                ...state,isLoading:true
            }
        }
        case types.USER_LOGIN_SUCCESS:{
            return {
                ...state,token:payload
            }
        }
        case types.USER_LOGIN_ERROR:{
            return {
                ...state,isError:true
            }
        }

        default: return state
    }
}