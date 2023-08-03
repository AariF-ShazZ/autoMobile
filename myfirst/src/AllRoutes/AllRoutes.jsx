import React from 'react'
import {
  Route,
  Routes,
} from "react-router-dom";
import Home from '../Pages/Home';
import Details from '../Pages/Details';
import Cart from '../Pages/Cart';
import Success from '../Pages/Success';
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
    </>
  )
}
