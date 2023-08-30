import React from 'react'
import {
  Route,
  Routes,
} from "react-router-dom";
import Home from '../Pages/Home';
import Details from '../Pages/Details';
import Cart from '../Pages/Cart';
import Success from '../Pages/Success';
import Product from '../Pages/Product';
import Authentication from '../Pages/Authentication';
import PrivatePage from '../Pages/PrivatePage';
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={
        <PrivatePage>
          <Details />
        </PrivatePage>
        }/>
        <Route path='/products' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Authentication />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </>
  )
}
