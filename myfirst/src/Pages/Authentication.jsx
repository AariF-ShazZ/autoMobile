import React, { useState } from 'react'
import * as Components from './authComponent';
import { Box } from '@chakra-ui/react';
import { useDispatch } from "react-redux"
import { login } from '../Redux/authReducer/actions';
import { useLocation, useNavigate } from 'react-router-dom';
const Authentication = () => {
    const [signIn, toggle] = useState(true);
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const location  = useLocation()
    // console.log("location in the login page =>",location);
    const comingFrom = location.state?.data || "/"
    console.log("comingFrom =>",comingFrom);
    const hanldeLoginSubmit =(e) => {
        e.preventDefault()
        // console.log("alkdflkjd",email,password);
        dispatch(login({email,password}))
        .then((res) =>  navigate(comingFrom,{replace:true}))
    }
  return (
    <div>
        <Box p={"5%"} display={"flex"} alignItems={"center"}
        justifyContent={"center"}>
        <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form >
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input type='text' placeholder='Name' />
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Button type="submit">Sign Up</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form onSubmit={hanldeLoginSubmit}>
                       <Components.Title>Sign in</Components.Title>
                       <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                       <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <Components.Button type='submit'>Sigin In</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sigin Up
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
        </Box>
       
    </div>
  )
}

export default Authentication