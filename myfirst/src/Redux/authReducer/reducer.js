import * as types from "./actionTypes"
const initialState = {
    token:"",
    user:[],
    isAuth:false,
    isLoading:false,
    isError:false,
    errorMessage:{}
}

export const authReducer = (state=initialState,{type,payload}) =>{
     switch(type){
    case types.USER_REGISTER_REQUEST:{
        return {
            ...state,isLoading:true
        }
    }
    case types.USER_REGISTER_SUCCESS:{
        return {
            ...state,isLoading:false
        }
    }
    case types.USER_REGISTER_ERROR:{
        return {
            ...state,isLoading:false,isError:true,errorMessage:payload
        }
    }

    case types.USER_LOGIN_REQUEST:{
        return {
            ...state,isLoading:true
        }
    }
    case types.USER_LOGIN_SUCCESS:{
        return {
            ...state,isLoading:false,user:payload.data,token:payload,isAuth:true
        }
    }
    case types.USER_LOGIN_ERROR:{
        return {
            ...state,isLoading:false,isError:true,errorMessage:payload
        }
    }
    case types.USER_LOGOUT_SUCCESS:{
        return {
            ...state,token:""
        }
    }

    default: return state
}
}