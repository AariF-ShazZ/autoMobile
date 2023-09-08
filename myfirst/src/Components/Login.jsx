import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/authReducer/actions';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
    useToast,
} from '@chakra-ui/react';
import * as yup from 'yup';

const schema = yup.object({
    email: yup
        .string()
        .required()
        .email('Invalid email format')
        .matches(/^\S+@\S+$/, 'Email format is not valid'),
    password: yup
        .string()
        .required()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            'Password must be at least 8 characters long and include characters, digits, and special characters.'
        ),
}).required();

const Login = () => {
    const errorMessage = useSelector((store) => store.authReducer.isAuthError);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const comingFrom = location.state?.data || '/';
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const toast = useToast();

    const onSubmit = (data) => {
        dispatch(login({ useremail:data.email,userpassword:data.password }))
            .then((res) => {
                navigate(comingFrom, { replace: true })
                // console.log("login success");
            }
            
            )
            .catch((err) => {
                toast({
                    title: 'Login Failed',
                    description: 'There was an error logging in. Please try again.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            });
    };
  return (
    <>
     <Box p={10}  maxWidth={['100%', '80%', '100%']} mx='auto' h='400px' bg='transparent'>
                  <Heading>Sign In</Heading>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl>
                      <FormLabel>Email:</FormLabel>
                      <Input
                        {...register('email')}
                        isInvalid
                        focusBorderColor='lime'
                        placeholder='Enter Email'
                      />
                      <Text color='red.500' fontSize='sm'>
                        {errors.email?.message}
                      </Text>
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Password:</FormLabel>
                      <Input
                        type='password'
                        {...register('password')}
                        isInvalid
                        focusBorderColor='lime'
                        placeholder='Enter Password'
                      />
                      <Text color='red.500' fontSize='sm'>
                        {errors.password?.message}
                      </Text>
                    </FormControl>

                    <Button mt={4} colorScheme='#ff0000' bg='#ff0000' type='submit' color='#fff'>
                      Sign In
                    </Button>

                    {errorMessage && <Text mt={4} color='red.500'>{errorMessage.message}</Text>}
                  </form>
                </Box></>
  )
}

export default Login