import React, { useRef, useState } from "react"

import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
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
    DrawerFooter,
    Select,
    DrawerHeader,
    DrawerCloseButton,
    DrawerOverlay,
    DrawerBody,
    InputLeftAddon,
    InputRightAddon,
    DrawerContent,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, SearchIcon, AddIcon } from '@chakra-ui/icons'
import { AllRoutes } from "../AllRoutes/AllRoutes"
import { HiShoppingCart } from "react-icons/hi"
import { BsFillHeartFill } from "react-icons/bs"
import { Link } from "react-router-dom"

interface Props {
    children: React.ReactNode
}

const Links = ['Dashboard', 'Projects', 'Team']

const NavLink = (props: Props) => {
    const { children } = props

    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={'#'}>
            {children}
        </Box>
    )
}

export default function Simple() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isTrue, setIsTrue] = useState(false)
    const iconStyle = {
        fontSize: '25px',
        marginRight: '30px',
    };
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
                        <Box> <Heading textAlign={"left"} color={"red"}><Link to={"/"}>AutoMo</Link></Heading></Box>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} alignContent={"center"} justifyContent={"center"}>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none' display={"flex"} alignContent={"center"} justifyContent={"center"}>
                                    <SearchIcon color='gray.300' mt={"10px"} fontSize={"20px"} />
                                </InputLeftElement>
                                <Input
                                    type='text'
                                    isInvalid
                                    errorBorderColor="crimson"
                                    placeholder="Search something here"
                                    _placeholder={{
                                        color: "gray.500", // You can use any Chakra UI color token
                                      }}
                                    size={"lg"} w={"600px"}
                                    // display={{base:"none",}}
                                />
                            </InputGroup>
                        </HStack>
                    </HStack>
                    <Flex w="14%" alignItems={'center'} justifyContent={"space-between"} >
                        <Flex w={"70%"} bg={""} alignItems={'center'} justifyContent={"space-between"} display={['none', 'none', 'flex']}>
                            <Box bg={"red"} p={"10%"} borderRadius={"50%"}>
                                <BsFillHeartFill color="black" fontSize={"20px"} />
                            </Box>
                            <Box bg={"red"} p={"10%"} borderRadius={"50%"}>
                              <Link to={"/cart"}>
                                <HiShoppingCart color="black" fontSize={"23px"}/>
                              </Link>
                        
                            </Box>
                        </Flex>

                        <Menu>
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
