import React, { useEffect } from 'react'
import {Container,Box,Text,Tabs,Tab,TabList,TabPanel,TabPanels, useColorModeValue} from "@chakra-ui/react"
import Login from '../components/authentication/login';
import Signup from '../components/authentication/signup';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    if(user) navigate('/chats')     
  }, [navigate])

  const bgGradient = useColorModeValue(
    'linear(to-br, blue.50, purple.50)',
    'linear(to-br, gray.900, gray.800)'
  );
  const boxBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box
      minH="100vh"
      bgGradient={bgGradient}
      py={8}
      px={4}
    >
      <Container maxW='xl' centerContent>
        <Box
          d="flex"
          justifyContent='center'
          textAlign={"center"}
          p={4}
          bg={boxBg}
          w='100%'
          m='0 0 20px 0'
          borderRadius='xl'
          borderWidth='1px'
          borderColor={borderColor}
          boxShadow="md"
        >
          <Text 
            fontSize='4xl' 
            fontFamily='Work sans' 
            fontWeight="bold"
            bgGradient="linear(to-r, blue.500, purple.500)"
            bgClip="text"
          >
            Talk-E-Tive
          </Text>
        </Box>
        <Box 
          bg={boxBg} 
          w='100%' 
          p={6} 
          borderRadius='xl' 
          borderWidth='1px' 
          borderColor={borderColor}
          boxShadow="lg"
        >
          <Tabs variant='soft-rounded' colorScheme="blue">
            <TabList mb='1.5em'>
              <Tab 
                width={"50%"}
                fontSize="md"
                fontWeight="semibold"
                _selected={{ 
                  color: 'blue.600',
                  bg: 'blue.50'
                }}
              >
                Login
              </Tab>
              <Tab 
                width={"50%"}
                fontSize="md"
                fontWeight="semibold"
                _selected={{ 
                  color: 'blue.600',
                  bg: 'blue.50'
                }}
              >
                Sign Up
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel px={0}>
                <Login/>
              </TabPanel>
              <TabPanel px={0}>
                <Signup/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Box>
  );
}

export default Homepage
