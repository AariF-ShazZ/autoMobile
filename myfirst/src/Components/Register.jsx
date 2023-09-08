import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from '../Redux/authReducer/actions';
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
const Register = () => {
    const errorMessage = useSelector((store) => store.authReducer.isAuthError);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const toast = useToast();

    const onSubmit = (data) => {
        console.log(data)
        dispatch(registerAction({username:data.name,useremail:data.email,userpassword:data.password }))
            .then((res) =>  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
            }))
            .catch((err) => {
                toast({
                    title: 'Register Failed',
                    description: 'There was an error Register. Please try again.',
                    status: 'error',
                    duration:2000,
                    isClosable: true,
                });
            });
    };
  return (
    <>
          <Box p={10} maxWidth='400px' mx='auto' w={['100%', '80%']} h='400px' bg='transparent'>
                  <Heading>Sign Up</Heading>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl>
                      <FormLabel>Name:</FormLabel>
                      <Input
                        {...register('name')}
                        isInvalid
                        focusBorderColor='lime'
                        placeholder='Enter Name'
                      />
                      <Text color='red.500' fontSize='sm'>
                        {errors.name?.message}
                      </Text>
                    </FormControl>

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
                      Sign Up
                    </Button>

                    {errorMessage && <Text mt={4} color='red.500'>{errorMessage.message}</Text>}
                  </form>
                </Box>
    </>
  )
}

export default Register