import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { getSingleProducts } from '../Redux/productReducer/actions'
const Details = () => {
  const product =  useSelector((store) =>  store.productsReducer)
  console.log("single =>",product);
  const {id} =useParams()
  console.log("id",id);
 
  const dispatch = useDispatch()
  useEffect(() => {
    if(id){
      dispatch(getSingleProducts(id))
    }
  },[dispatch,id])
  return (
    <div>Details</div>
  )
}

export default Details