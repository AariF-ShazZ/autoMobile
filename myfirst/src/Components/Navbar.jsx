import React, { useRef, useState } from "react"

import {
    Box,
    Flex,
    Avatar,
    HStack,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Input,
    InputGroup,
    InputLeftElement,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    ModalFooter,
    Heading,
    InputRightElement,
    Textarea,
    Text,
    Icon,
    Image
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, SearchIcon, AddIcon } from '@chakra-ui/icons'
import { AllRoutes } from "../AllRoutes/AllRoutes"
import { HiShoppingCart } from "react-icons/hi"
import { BsFillHeartFill } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux"
import { RxCross2 } from "react-icons/rx";
import { decreaseQuantity, increaseQuantity, removeItem } from "../Redux/cartReducer/actions"
import { searchProducts } from "../Redux/productReducer/actions"
import SearchBox from "./SearchBox"



export default function Simple() {
    const cart = useSelector((store) => store.cartReducer.cart)
    //   console.log("cart",cart);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isTrue, setIsTrue] = useState(false)
    const btnRef = React.useRef()
    const [query, setQuery] = useState("")

    const handleSubmit = () => {
        // consoles.log("lajdkflsdj",query);
        dispatch(searchProducts(query))
            .then((res) => navigate("/products"))
            .catch((err) => console.log("err", err))
    }
    const iconStyle = {
        fontSize: '25px',
        marginRight: '30px',
    };
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleDecrease = (id, size, qty) => {
        if (qty > 1) {
            dispatch(decreaseQuantity({ id, size, qty }))
        } else {
            dispatch(removeItem({ id, size }))
        }
        // console.log(id,size)
    }

    const handleIncrease = (id, size, qty) => {
        dispatch(increaseQuantity({ id, size }))
        // console.log(id,size)
    }
    const handleRemove = (id, size) => {
        // console.log("id,size",id,size);
        dispatch(removeItem({ id, size }))
    }

    let total_final_price = 0
    let total_original_price = 0

    const convertToNumber = (str) => {

        if (Number(str)) {
            //   console.log("str =>",Number(str))
            return Number(str)
        }
        let arr = str.includes(",") ? str.split(",") : []
        let final_str = arr.reduce((acc, value) => acc + value, "")

        let result = Number(final_str)
        return result
    }
    cart.forEach((prod) => {
        console.log(convertToNumber(prod.original_price) * prod.qty)
        total_original_price += convertToNumber(prod.original_price) * prod.qty
        total_final_price += convertToNumber(prod.final_price) * prod.qty

    })


    return (
        <>
            <Box bg={useColorModeValue('#ffffff', '#fff')} position={"sticky"} zIndex={"10"} top={"0"} px={4} pt={"10px"} pb={"16px"}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box display={{ lg: "none" }}>
                        {
                            isTrue ? <InitialFocus /> : <SearchIcon onClick={() => setIsTrue(!isTrue)} color='gray.300' />
                        }
                    </Box>
                    <HStack spacing={14} alignItems={'center'} w={"auto"}>
                        <Box> <Heading textAlign={"left"} color={"#ff0000 "}><Link to={"/"}>ShoesHub</Link></Heading></Box>
                        <HStack
                            as={'nav'} // The <HStack> component is being treated as a <nav> element.
                            spacing={4} // Spacing between child elements.
                            display={{
                                base: 'none', // On small screens, the <HStack> is displayed as a block.
                                md: { display: "flex", width: "200px" }, // On medium screens, it's displayed as a flex container with a width of 200px.
                                lg: "flex" // On large screens, it's displayed as a flex container.
                            }}
                            align="center" // Aligns content vertically.
                            justify="center" // Centers content horizontally.
                        >
                            <SearchBox
                                handleSubmit={handleSubmit} // handleSubmit function passed as a prop.
                                query={query} // query value passed as a prop.
                                setQuery={setQuery} // setQuery function passed as a prop.
                            />
                        </HStack>

                    </HStack>
                    <Flex w="14%" alignItems={'center'} justifyContent={"space-between"} >
                        <Flex w={"70%"} alignItems={'center'} justifyContent={"space-between"} display={['none', 'none', 'flex']}>
                            <Box border={"2px solid #dfdfdf "} p={"10%"} borderRadius={"50%"}>
                                <BsFillHeartFill cursor={"pointer"} color="#5e6c84" fontSize={"20px"} />
                            </Box>
                            <Box border={"2px solid #dfdfdf"} p={"10%"} borderRadius={"50%"} onClick={onOpen}>
                                <HiShoppingCart cursor={"pointer"} color="#5e6c84" fontSize={"23px"} />
                            </Box>
                            <Drawer
                                isOpen={isOpen}
                                placement='right'
                                onClose={onClose}
                                finalFocusRef={btnRef}
                                size="sm"
                            >
                                <DrawerOverlay />
                                <DrawerContent bg={"#fff"}>
                                    <DrawerCloseButton />
                                    <DrawerHeader color={"gray"}>YOUR CART ({cart.length})</DrawerHeader>

                                    <DrawerBody >
                                        {
                                            cart.length > 0 && cart.map((item) => {
                                                return <Flex key={item.id} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} m="1" mb="7" p="2" bg={"gray.100"}>
                                                    <Image boxSize={"75px"} src={item.images[0]} alt="shoe" />
                                                    <Box >
                                                        <Flex justifyContent={"space-between"} align="center">
                                                            <Text fontSize={"13px"}>{`${item.name} | ${item.color} | ${item.gender}`}</Text>
                                                            <Icon boxSize={5} ml="5" as={RxCross2} bg={"red"} onClick={() => handleRemove(item.id, item.size)} />
                                                        </Flex>
                                                        <Text as="sup">{item.size}</Text>
                                                        <Flex justifyContent={"space-between"} align="center">
                                                            <Flex>
                                                                <Button onClick={() => handleDecrease(item.id, item.size, item.qty)}>-</Button>
                                                                <Button>{item.qty}</Button>
                                                                <Button onClick={() => handleIncrease(item.id, item.size, item.qty)}>+</Button>
                                                            </Flex>
                                                            <Flex p="4px" justifyContent={"space-around"} align="center">
                                                                <Text>Rs.{item.final_price}</Text>
                                                                <Text as="s" mr={4}>Rs.{item.original_price}</Text>
                                                            </Flex>
                                                        </Flex>
                                                    </Box>
                                                </Flex>
                                            })
                                        }
                                    </DrawerBody>
                                    <Flex display={"flex"} justifyContent={"space-between"} alignItems="center" m={2}>
                                        <Text color={"gray"}>SUBTOTAL</Text>
                                        <Flex p={2} display={"flex"} justifyContent={"space-between"} alignItems="center" >
                                            <Text p={2} as="s" color={"gray"}>Rs {total_original_price}</Text>
                                            <Text p={2} color={"gray"}>Rs {total_final_price}</Text>
                                        </Flex>
                                    </Flex>
                                    <DrawerFooter>
                                        <Button colorScheme='#ff0000' bg="#ff0000" color={"#fff"}>Proceed To Checkout</Button>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        </Flex>

                        <Menu>
                            <Link to={"/login"}>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>

                                    <Avatar
                                        size={'sm'}
                                        src={
                                            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                        }
                                    />


                                </MenuButton>
                            </Link>
                            <MenuList>
                                <MenuItem>Link 1</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider />
                                <MenuItem>Link 3</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </Box>

            <Box p={4}> <AllRoutes /></Box>
        </>
    )
}

function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    return (
        <>
            <Button onClick={onOpen}>Close</Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>First name</FormLabel>
                            <Input ref={initialRef} placeholder='First name' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Last name</FormLabel>
                            <Input placeholder='Last name' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
