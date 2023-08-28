import React, { useEffect, useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Checkbox,
  CheckboxGroup,
  VStack,
  Heading,
  Flex
} from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import { RadioGroup } from '@mui/material'
const FilterCom = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.getAll("category")
  const [category, setCategory] = useState(initialCategory || [])
  const initialSort = searchParams.getAll("sort")
  // console.log("initialSort =>", initialSort[0]);
  const [sort, setSort] = useState(initialSort[0] || "")

  const handleFilterCheckbox = (e) => {
    // console.log(e.target.value);
    const newCategories = [...category]
    if (newCategories.includes(e.target.value)) {
      newCategories.splice(newCategories.indexOf(e.target.value), 1)
    } else {
      newCategories.push(e.target.value)
    }
    setCategory(newCategories)
  }

  const handleSort = (e) => {
    setSort(e.target.value)
  }
  // console.log("category",category);
  useEffect(() => {
    let params = {}
    params.category = category
    sort && (params.sort=sort)
    setSearchParams(params)
  }, [category, setSearchParams,sort])
  
  console.log("sort",sort);
  return (
    <>
      <Box w={"100%"} h={"400px"} bg={"gray"}>
        <Box>
          <Heading as='legend' fontSize={"25px"}>
            Types
          </Heading>
          <CheckboxGroup defaultValue='Itachi'>
            <VStack spacing='24px'>
              <div>
                <input
                  type="checkbox"
                  value={"MEN"}
                  checked={category.includes("MEN")}
                  onChange={handleFilterCheckbox} />
                <label htmlFor="">MEN</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={"WOMEN"}
                  checked={category.includes("WOMEN")}
                  onChange={handleFilterCheckbox} />
                <label htmlFor="">WOMEN</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={"KIDS"}
                  checked={category.includes("KIDS")}
                  onChange={handleFilterCheckbox} />
                <label htmlFor="">KIDS</label>
              </div>
            </VStack>
          </CheckboxGroup>
        </Box>
        <Box>
          <Heading as='legend' fontSize={"25px"}>
            Sort By Price
          </Heading>
          <RadioGroup defaultValue='Itachi'>
            <VStack spacing='24px'>
              <Flex onChange={handleSort} direction={"column"}>
                <Flex>
                <input
                  type="radio"
                  value={"asc"}
                  name='sortBy'
                  defaultChecked={sort==="asc"}
                   />
                <label htmlFor="">Low To High</label>
                </Flex>
               <Flex>
               <input
                  type="radio"
                  value={"desc"}
                  name='sortBy'
                  defaultChecked={sort==="desc"}
                  />
                <label htmlFor="">High To Low</label>
               </Flex>
              </Flex>
            </VStack>
          </RadioGroup>
        </Box>
      </Box>
    </>
  )
}

export default FilterCom