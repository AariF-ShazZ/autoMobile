import React, { useState } from 'react';

import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text
} from '@chakra-ui/react';
import * as yup from 'yup';
import backgroundImage from '../Images/loginBackground_3.webp';
import Login from '../Components/Login';
import Register from '../Components/Register';

const Authentication = () => {
    

    return (
        <div>
            <Box
        p={'5%'}
        alignItems={'center'}
        justifyContent={'center'}
        backgroundImage={`url(${backgroundImage})`}
        backgroundSize='cover'
        backgroundPosition='center'
        minHeight='100vh'
      >
        <Box
          display={{ base: { w: '100%' }, sm: { w: '100%' }, md: 'flex', lg: 'flex' }}
          alignItems='center'
          justifyContent='center'
        >
          <Tabs isLazy boxShadow='rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;' p={'2% 1%'} borderRadius='10%' >
            <TabList>
              <Tab>Sign In</Tab>
              <Tab>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
               <Login/>
              </TabPanel>
              {/* initially not mounted */}
              <TabPanel>
              <Register/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
        </div>
    );
};

export default Authentication;
