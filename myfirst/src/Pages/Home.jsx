import React, { useEffect } from 'react';
import HomeSlider from "../Components/HomeSlider";
import { Box, Heading, useBreakpointValue } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../Redux/productReducer/actions';
import { MultipleItems } from '../Components/ProductSlider';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

   return (
    <Box>
      <HomeSlider />
      <Box bg={""} mt={{
    base: "14%",
    sm: "5%",
    md: "6%",
    lg: "7%",
  }}>
        <Heading color={"red"} textAlign={"left"} p={"1%"}>
          Popular Shoes
        </Heading>
        <MultipleItems />
      </Box>
      <Box mt={"5%"}>
        <button class="button-71" role="button">
          <Link to={"/products"}>Show More Cars</Link>
        </button>
      </Box>
    </Box>
  );
};

export default Home;
