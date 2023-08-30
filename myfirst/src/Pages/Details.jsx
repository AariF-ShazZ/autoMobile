import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProducts } from '../Redux/productReducer/actions';
import { Box, Button, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { BsFillHeartFill } from "react-icons/bs"
import { addToCart } from '../Redux/cartReducer/actions';
const Details = () => {
  const singleData = useSelector((store) => store.productsReducer.singleProduct);
  // console.log(singleData);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getSingleProducts(id));
    }
  }, [dispatch, id]);

  const images = singleData.images || [];
  const sizes = singleData.sizes || [];
  const gender = singleData.gender || '';
  const name = singleData.name || '';
  const finalPrice = singleData.final_price || 0;
  // const rating = new Array(singleData.rating).fill(0) || []
  const [selectImage, setSelectImage] = useState("");
  const [size, setSize] = useState(null)
  useEffect(() => {
    setSelectImage(images[0])
  }, [images])

  const handleAddToCart = () => {
    const payload = {
      ...singleData, size
    }
    // console.log("cart payload =>", payload)
    dispatch(addToCart(payload))
  }

  return (
    <>
      <Box w="100%" bg="" p="4% 2%">
        <Flex w="70%" m="auto" bg="#fff" p="6% 3%" boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;" borderRadius={"10px"}>
          <Box w="100%" bg="">
            <Flex alignItems="center" justifyContent="space-between" p="1%">
              <VStack w="18%" mr="3%">
                {images.length > 0 && images.map((ele, i) => <Image key={i} src={ele} onClick={() => setSelectImage(ele)} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} w={"400px"} borderRadius={"10px"} cursor={"pointer"}/>)}
              </VStack>
              <Image src={selectImage} w="100%" boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px;" borderRadius={"10px"} />
            </Flex>
            <Flex bg={""} w={"80%"} p={"2% 1%"} m={"auto"} alignItems={"center"} justifyContent={"space-evenly"}>
              {sizes.length > 0 && sizes.map((ele, i) => (
                <Button
                  key={i}
                  onClick={() => setSize(ele)}
                  bg={"#ff0000"}
                  colorScheme='#ff0000'
                  boxShadow="0px 7px 4px rgba(255, 0, 0, 0.3)" // Red shadow
                  color="#fff" // White text color
                >
                  {ele}
                </Button>
              ))}
            </Flex>
          </Box>
          <Box bg={""} w={"100%"} textAlign={"left"} ml={"2%"} pl={"3%"}>
            <Text color={"gray"}>{gender}</Text>
            <Heading color={"gray.500"}>{name}</Heading>
            <Flex w={"55%"} bg={""} m={"2% 0"} alignItems={"center"} justifyContent={"space-evenly"}>
              <Heading fontSize={"25px"} color={"red"}>Rs. {finalPrice}</Heading>
              <Heading fontSize="20px" as="strike" color={"#db3f3f"}>
                Rs. {finalPrice}
              </Heading>
            </Flex>
            <Text color={"gray"}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita modi mollitia, itaque fugiat quisquam facere, animi atque nesciunt debitis tempora error fugit similique </Text>
            <Flex bg={""} alignItems={"center"} mt={"3%"}>
              <Button
                colorScheme='#ff0000'
                color={"#fff"}
                bg="#ff0000"
                boxShadow="0px 8px 4px rgba(255, 0, 0, 0.3)" 
                m={4}
                p={5}
                isDisabled={!size}
                onClick={() => handleAddToCart()}
              >
                {size ? "ADD TO CART" : "PLEASE SELECT A SIZE"}
              </Button>
              <Button colorScheme='#ff0000' bg="#ff0000" boxShadow="0px 8px 4px rgba(255, 0, 0, 0.3)" ><BsFillHeartFill color='#fff' /></Button>
            </Flex>

          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Details;
