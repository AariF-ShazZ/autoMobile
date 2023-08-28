import React, { useEffect} from 'react'
import HomeSlider from "../Components/HomeSlider";
import { Box, Heading } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../Redux/productReducer/actions';
import { MultipleItems } from '../Components/ProductSlider';
import { Link } from 'react-router-dom';


const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <Box >
      <HomeSlider />
      <Box bg={""} mt={"5%"} >
        <Heading>Popular Car</Heading>
        <MultipleItems/>
      </Box>
      <Box mt={"5%"} >
      <button class="button-71" role="button"><Link to={"/products"}>Show More Cars</Link></button>
      </Box>
    </Box>
  )
}

export default Home