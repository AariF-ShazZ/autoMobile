import * as types from "./actionTypes"
const initialState = {
    products:[],
    isLoading:false,
    isError:false,
    singleProduct:{}
}

export const productsReducer = (state=initialState,{type,payload}) =>{
   
    console.log("productsReducer => ",type,payload);
    switch(type){
    case types.GET_PRODUCTS_REQUEST:{
        return {
            ...state,isLoading:true
        }
    }
    case types.GET_PRODUCTS_SUCCESS:{
        return {
            ...state,isLoading:false,products:payload
        }
    }
    case types.GET_PRODUCTS_ERROR:{
        return {
            ...state,isLoading:false,isError:true
        }
    }

    case types.SINGLE_PRODUCT_REQUEST:{
        return {
            ...state,isLoading:false
        }
    }
    case types.SINGLE_PRODUCT_SUCCESS:{
        console.log("single reducer",payload);
        return {
            ...state,
            singleProduct: payload
        }
    }
    case types.SINGLE_PRODUCT_ERROR:{
        return {
            ...state,isLoading:false,isError:true
        }
    }
    // case types.SEARCH_QUERY_REQUEST:{
    //     return {
    //         ...state,isLoading:true
    //     }
    // }
    // case types.SEARCH_QUERY_SUCCESS:{
    //     // console.log("search reducer",type,payload);
    //     return {
    //         ...state,products:payload
    //     }
    // }
    // case types.SEARCH_QUERY_ERROR:{
    //     return {
    //         ...state,isError:true
    //     }
    // }

    default: return state
}
}