import React, { useEffect, useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  Stack,
  Box,
  NumberInput,
  NumberInputField,
  useDisclosure,
  useToast,
  Flex
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { getProducts,postProduct, updateProducts } from '../../Redux/productReducer/actions';



const initialProductState = {
  name: '',
  color: '',
  gender: '',
  original_price: '',
  final_price: '',
  images: [],
  sizes: [],
  reviews: 0,
  rating: 0,
};

function ProductForm(props) {
  // console.log("update props", props)
  // const [product, setProduct] = useState(initialProductState);
  const [name, setName] = useState(props.data?.name || '');
  const [color, setColor] = useState(props.data?.color || '');
  const [gender, setGender] = useState(props.data?.gender || '');
  const [original_price, setOriginalPrice] = useState(props.data?.original_price || 0);
  const [final_price, setFinalPrice] = useState(props.data?.final_price || 0);
  const [images, setImages] = useState(props.data?.images || []);
  const [updatedSizes, setUpdatedSizes] = useState('');
  const [reviews, setReviews] = useState(props.data?.reviews || 0);
  const [rating, setRating] = useState(props.data?.rating || 0);
  const dispatch = useDispatch();

  const toast = useToast()
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log(name,value);
  //   if(name === "sizes"){
  //     setSize([...size,value].map(Number))
  //   }
  //   else {
  //     setProduct({
  //       ...product,
  //       [name]:  value,
  //     });
  //   }
  // };
  // console.log("product",product)


  useEffect(() => {
    setUpdatedSizes(props.data?.sizes || '');
  }, [props.data?.sizes]);

  const handlePost = () => {
    const imagesArray = images.split(",").map(image => image.trim()); // Split and trim URLs
    const payload = {
      name,
      color,
      gender,
      original_price,
      final_price,
      images: imagesArray, // Use the modified imagesArray
      sizes: updatedSizes.split(",").map(Number),
      reviews,
      rating,
    };

    dispatch(postProduct(payload))
      .then(() => {
        dispatch(getProducts());
        toast({
          title: 'Product Created.',
          description: `Product created successfully.`,
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: 'Error',
          description: `Error creating product`,
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      });
  };

  const handleUpdate = () => {
    if (typeof updatedSizes === 'string') {
      const payload = {
        name,
        color,
        gender,
        original_price,
        final_price,
        images,
        sizes: updatedSizes.split(",").map(Number),
        reviews,
        rating,
      };

      dispatch(updateProducts(props.data?._id, payload))
        .then(() => {
          dispatch(getProducts());
          toast({
            title: 'Product Updated.',
            description: `Updated the Product whose id is ${props.data?._id}`,
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        })
        .catch((err) => {
          console.error("Failed to update product: ", err);
          toast({
            title: 'Error',
            description: `Internal Server Error`,
            status: 'error',
            duration: 2000,
            isClosable: true,
          });
        });
    } else {
      console.error("Updated sizes should be a string.");
    }
  };

const handleSubmit = (e) => {
  e.preventDefault();
  if(props.type === "update"){
    handleUpdate()
  }else {
    handlePost()
  }
}
 

  return (
    <form onSubmit={handleSubmit} bg={"gray.100"}>
      <Stack spacing={4} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} p={"2%"} bg={"gray"}>
        <Flex>
        <FormControl mr="5%">
          <FormLabel  fontWeight={'normal'}>Name</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder='Enter Product Name'
            value={name}
            onChange={(e) =>  setName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel  fontWeight={'normal'}>Color</FormLabel>
          <Input
            type="text"
            name="color"
            placeholder='Enter Color'
            value={color}
            onChange={(e)=> setColor(e.target.value)}
          />
        </FormControl>
        </Flex>
        <Flex >
        <FormControl mr={"5%"}>
          <FormLabel  fontWeight={'normal'}>Gender</FormLabel>
          <Select
            name="gender"
            value={gender}
            onChange={(e) =>  setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="MEN">MEN</option>
            <option value="WOMEN">WOMEN</option>
            <option value="KIDS">KIDS</option>
       
          </Select>
        </FormControl>
        <FormControl mr={"5%"}>
        <FormLabel  fontWeight={'normal'}>Original Price</FormLabel>
        <Input
          type="number"
          name="original_price"
          placeholder='Enter Original Price'
          value={original_price}
          onChange={(e) => setOriginalPrice(Number(e.target.value))}
        />
      </FormControl>
      <FormControl>
        <FormLabel  fontWeight={'normal'}>Final Price</FormLabel>
        <Input
          type="number"
          name="final_price"
          placeholder='Enter Final Price'
          value={final_price}
          onChange={(e) => setFinalPrice(Number(e.target.value))}
        />
      </FormControl >
      </Flex>
        <FormControl>
          <FormLabel  fontWeight={'normal'}>Images (Comma-separated URLs)</FormLabel>
          <Input
            type="text"
            name="images"
            placeholder='Enter Image URLs'
            value={images}
            onChange={(e) =>  setImages(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel  fontWeight={'normal'}>Sizes (Comma-separated)</FormLabel>
          <Input
             type="text"
             name="sizes"
             placeholder='Enter Product Sizes'
             value={updatedSizes}
             onChange={(e) => setUpdatedSizes(e.target.value)}
          />
        </FormControl>
        <Flex>
        <FormControl mr={"5%"}>
          <FormLabel  fontWeight={'normal'}>Reviews</FormLabel>
          <Input
            type="number"
            name="reviews"
            placeholder='Enter Reviews'
            value={reviews}
            onChange={(e) =>  setReviews(Number(e.target.value))}
          />
        </FormControl>
        <FormControl>
          <FormLabel  fontWeight={'normal'}>Rating</FormLabel>
          <Input
            type="number"
            name="rating"
            placeholder='Enter Rating'
            value={rating}
            onChange={(e) =>  setRating(Number(e.target.value))}
          />
        </FormControl>
        </Flex>
      

        
        {
          props.type==="update" ? <Button type="submit" colorScheme="teal"> Update Product  </Button>: <Button type="submit" colorScheme="teal"> Post Product  </Button>
        }  
      </Stack>
    </form>
  );
}

export default ProductForm;





// const Form1 = () => {
//     const [show, setShow] = useState(false)
//     const handleClick = () => setShow(!show)
//     return (
//       <>
//         <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
//           User Registration
//         </Heading>
//         <Flex>
//           <FormControl mr="5%">
//             <FormLabel htmlFor="first-name" fontWeight={'normal'}>
//               First name
//             </FormLabel>
//             <Input placeholder="First name" />
//             <Input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//             />
//           </FormControl>
  
//           <FormControl>
//             <FormLabel htmlFor="last-name" fontWeight={'normal'}>
//               Last name
//             </FormLabel>
//             <Input id="last-name" placeholder="First name" />
//           </FormControl>
//         </Flex>
//         <FormControl mt="2%">
//           <FormLabel htmlFor="email" fontWeight={'normal'}>
//             Email address
//           </FormLabel>
//           <Input id="email" type="email" />
//           <FormHelperText>We&apos;ll never share your email.</FormHelperText>
//         </FormControl>
  
//         <FormControl>
//           <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
//             Password
//           </FormLabel>
//           <InputGroup size="md">
//             <Input
//               pr="4.5rem"
//               type={show ? 'text' : 'password'}
//               placeholder="Enter password"
//             />
//             <InputRightElement width="4.5rem">
//               <Button h="1.75rem" size="sm" onClick={handleClick}>
//                 {show ? 'Hide' : 'Show'}
//               </Button>
//             </InputRightElement>
//           </InputGroup>
//         </FormControl>
//       </>
//     )
//   }