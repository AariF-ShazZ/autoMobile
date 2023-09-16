import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import ProductsList from '../ProductsList/ProductsList'

const ProductsRead = () => {
    return (
        <>
            <Box bg={""} p={"3% 2%"}>
                <ProductsList />
            </Box>
        </>
    )
}

export default ProductsRead