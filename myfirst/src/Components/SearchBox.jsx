import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup,InputLeftElement } from '@chakra-ui/react'
import React from 'react'

const SearchBox = ({handleSubmit,query,setQuery}) => {
    return (
        <>
            <InputGroup bg={"gray.100"} display={"flex"} alignItems={"center"}  borderRadius={"26px"} >
                 <InputLeftElement pointerEvents='none' display={"flex"} alignContent={"center"} justifyContent={"center"}>
                                    <SearchIcon color='gray.300' mt={"10px"} fontSize={"20px"} />
                 </InputLeftElement>
                <Input
                    type='text'
                    color={"blackAlpha.600"}
                    placeholder="Search something here"
                    _placeholder={{
                        color: "gray.500", 
                    }}
                    // _focus={{ border: "0px  solid " }}
                    size={"lg"}
                    w={"450px"}
                    borderRadius={"26px"}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                // display={{base:"none",}}
                />
               
                <button className="button-71" role="button" onClick={() => handleSubmit()}> Search</button>
            </InputGroup></>
    )
}

export default SearchBox