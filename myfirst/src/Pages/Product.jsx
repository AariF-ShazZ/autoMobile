import React, { useEffect, useState } from 'react'
import { getProducts } from '../Redux/productReducer/actions'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Components/Card';
import { Box, Button, Flex, Grid, GridItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import FilterCom from '../Components/FilterCom';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Pagination } from "@mui/material"

const Product = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const products = useSelector((store) => store.productsReducer.products)
  console.log("products => ", products);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  const location = useLocation()
  const dispatch = useDispatch()
  //   let pageSize = 10
  //   const [currentPage, setCurrentPage] = useState({
  //     count:0,
  //     from:0,
  //     to:pageSize
  // })
  const [page, setPage] = useState(1)

  useEffect(() => {
    if (location || products.length === 0) {
      const sortBy = searchParams.get("sort")
      const getProductParams = {
        params: {
          gender: searchParams.getAll("category"),
          sort: sortBy && sortBy
        }
      }
      dispatch(getProducts(page, getProductParams))
    }
  }, [products.length, dispatch, location.search, page])


  //   useEffect(() => {
  //     service.getData({from:currentPage.from,to:currentPage.to}).then(res => {
  //         // console.log(res);
  //         setCurrentPage({...currentPage,count:res.count})
  //         setProducts(res.data)
  //     })
  // },[books,currentPage.from,currentPage.to])

  // const service = {
  //     getData:({from,to}) => {
  //         const data = books.slice(from,to)
  //         return new Promise((res,rej) => {
  //             res({
  //                 count:books.length,
  //                 data:data
  //             })
  //         })
  //     }
  // }

  // const  hanldeChange = (e, page) => {
  //  const from = (page - 1)  * pageSize
  //  const to = (page - 1)  * pageSize+pageSize

  //  setCurrentPage({...currentPage, from:from, to:to})
  // }
  return (
    <>
      <Flex bg={""} display={{ base: { direction: "column" }, md: { direction: "column" }, lg: "flex" }}>
        <Box p={'4'} w={"20%"} bg='' display={{ base: 'none', md: "none", lg: "inline" }}>
          <FilterCom />
        </Box>
        <Box bg="" p={'2%'} h={"400px"} w={"80%"} display={{ base: 'inline', md: "inline", lg: "none" }} alignItems={"center"}>
          <Button onClick={onOpen} color={"#fff"} bg={"#ff0000"} m={"2% 0 2% 60% "}>
            Filter Here
          </Button>
          <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg={"#fff"}>
              <ModalHeader color={"gray"}>Filter Modal</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {/* <Lorem count={2} /> */}
                <FilterCom />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='#ff0000' bg={"#ff0000"} color={"#fff"} mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
        <Box p='4' pl={"2%"} ml={"1%"} bg={""}>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={5} bg={""} >
            {products.length > 0 && products.map((x, i) => {
              return (
                <GridItem >
                  <Card data={x} />
                </GridItem>
              );
            })}
          </Grid>
        </Box>
      </Flex>
      <Flex  alignItems={"center"} justifyContent={"center"}>
        <Box display={"flex"} w={"15%"} alignItems={"center"} justifyContent={"space-between"} sx={{ margin: "30px 0px" }}>
          {/* <Pagination count={Math.ceil(currentPage.count / pageSize)} color="secondary" onChange={hanldeChange} /> */}
          <Button onClick={() => setPage((prev) => prev - 1)} colorScheme='#f00' bg={"#f00"} color={"#fff"}>Prev</Button>
          <Button  color={"#f00"}>{page}</Button>
          <Button onClick={() => setPage((next) => next + 1)} colorScheme='#f00' bg={"#f00"} color={"#fff"}>Next</Button>
        </Box>
      </Flex>


    </>
  )
}

export default Product