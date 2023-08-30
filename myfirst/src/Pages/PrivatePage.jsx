import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivatePage = ({children}) => {

   const isAuth = useSelector((store) => store.authReducer.isAuth)
   const location  =useLocation()
  //  console.log("location in private page =>",location);
    if(!isAuth){
      return <Navigate to={"/login"} replace state={{data:location.pathname}}/>
    }

  return children
}

export default PrivatePage