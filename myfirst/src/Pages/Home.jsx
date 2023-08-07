import React, { useEffect} from 'react'
import HomeSlider from "../Components/HomeSlider";
import { Box, Heading } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/actions';
import { MultipleItems } from '../Components/ProductSlider';


const Home = () => {
  const products = useSelector((store) => store.productsReducer.products)
  console.log("products => ", products);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <Box border={""}>
      <HomeSlider />
      <Box bg={""} mt={"5%"} >
        <Heading>Popular Car</Heading>
        <MultipleItems/>
      </Box>
    </Box>
  )
}

export default Home