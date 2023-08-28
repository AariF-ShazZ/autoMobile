import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const PrivatePage = ({children}) => {

   const token = useSelector((store) => store.reducer.token)
   console.log("token",token);
    if(true){
      return <Navigate to={"/login"}/>
    }

  return children
}

export default PrivatePage