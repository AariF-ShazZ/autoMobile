'use client'

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Flex,
  Spacer,
} from '@chakra-ui/react'
import { BsFuelPumpFill } from 'react-icons/bs'
import { HiUsers } from 'react-icons/hi'
import {AiOutlineHeart} from "react-icons/ai"

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

export default function Card(props) {
  return (
    <Center py={3} mt={"-5%"}>
      <Box
        role={'group'}
        p={6}
        maxW={'400px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${props.data.imageUrl})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            // rounded={'lg'}
            height={250}
            width={280}
            // objectFit={'cover'}
            src={props.data.imageUrl}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {props.data.category}
          </Text>
          <Flex  w={"300px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Box w='50px' h='10' >
            <Text color={'gray.500'} display={"flex"} alignItems={"center"} justifyContent={"space-between"} fontSize={'lg'} textTransform={'uppercase'}>
            <BsFuelPumpFill/>
              {props.data.fuel}
            </Text>
            </Box>
            <Spacer />
            <Box  w='100px' h='10'>
            <Text color={'gray.500'} fontSize={'lg'} textTransform={'uppercase'} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <HiUsers/>
              {props.data.seats}
            </Text>
            </Box>
            <Spacer />
            <Box  w='50px' h='10'display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}>
            <AiOutlineHeart className="heart-icon" fontSize="30px" />
            </Box>
          </Flex>
        
          <Heading fontSize={'2xl'} fontFamily={'body'}  ml={"-57%"} fontWeight={500}>
            {props.data.name}
          </Heading>
          <Stack w={"300px"} direction={'row'} align={'center'} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Text fontWeight={800} fontSize={'xl'}>
              Rs. {props.data.price}/day
            </Text>
            {/* <Text textDecoration={'line-through'} color={'gray.600'}>
              
            </Text> */}
            <Box>
              <Button class="button-71 addToCart" role="button" >Rent Now</Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}