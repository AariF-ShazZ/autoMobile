import React, { useEffect } from 'react'
import { getProducts } from '../Redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Components/Card';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import FilterCom from '../Components/FilterCom';

const Product = () => {
  const products = useSelector((store) => store.productsReducer.products)
  console.log("products => ", products);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      <Flex bg={""}>
        <Box p='4'  bg='' display={{base:'none',md:"inline",lg:"inline"}}>
          <FilterCom />
        </Box>
        <Box p='4' pl={"4%"} bg={""}>
          <Grid templateColumns={{base:'repeat(1, 1fr)', md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)'}} gap={5} bg={""} >
            {products.map((x, i) => {
              return (
                <GridItem >
                  <Card data={x} />
                </GridItem>
              );
            })}
          </Grid>
        </Box>
      </Flex>

    </>
  )
}

export default Product