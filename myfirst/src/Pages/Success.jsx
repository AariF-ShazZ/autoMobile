import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react"
import success from "../Images/imagesSuccess.png";
import { useNavigate } from 'react-router-dom';
const Success = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
 let delay = Math.random()
 console.log(delay)
  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading)
    }, 2000)
  }, [])
  if (!loading) {
    return (
      <>
        <Flex w={"100%"} height={"80vh"} align={"center"} justify={"center"}>
          <div className="loading-wave">
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
          </div>
        </Flex>
      </>
    )
  }
  return (
    <>
      <Flex w={"100%"} h={"auto"} bg={""} align={"center"} justify={"center"}>
        <Flex w={"70%"} h={"auto"} bg={"#fff"} align={"center"} justify={"center"} borderRadius={"10px"} boxShadow={" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"} mt={"3%"} mb={"3%"}>
          <Flex w={"80%"} h={"auto"} bg={"#fff"} px={"1%"} py={"4%"} direction={"column"} align={"center"}>
            <Image src={success} alt='Error In The Image' w={["100px", "100px", "200px", "200px"]} />
            <Heading mt={"3%"} fontSize={["20px", "20px", "25px", "30px"]} >Thank you for ordering!</Heading>
            <Text color={"gray.500"} px={"3%"} margin={"1%"} fontSize={["12px", "12px", "17px", "17px"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam excepturi reprehenderit cum illum est rem deleniti consectetur. Nobis, corporis culpa?</Text>
            <Box m={"5% 0"}  >
              <Button class="button-71" w={["100px", "100px", "200px", "200px"]} fontSize={["8px", "8px", "10px", "18px"]} role="button" onClick={() => navigate("/")} >
                CONTINUE SHOPPING
              </Button>
            </Box>
          </Flex>

        </Flex>

      </Flex>
    </>
  )
}

export default Success