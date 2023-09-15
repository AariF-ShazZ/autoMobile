import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useState } from 'react'
import ProductsRead from '../../components/ProductsRead/ProductsRead'
import ProductPost from '../../components/ProductProst/ProductProst'
import ProductUpdate from '../../components/ProductUpdate/ProductUpdate'

const Products = () => {

    const [changeComp, setChangeComp] = useState("read")
    return (
        <>
            <Box border={"2px solid red"}
                p={"2%"}
                top={0}
                left={0}
                w={"auto"}
                h={"100vh"}
            >
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList>
                        <Tab>Read Products</Tab>
                        <Tab>Post Products</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <ProductsRead />
                        </TabPanel>
                        <TabPanel>
                            <ProductPost />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

        </>
    )
}

export default Products