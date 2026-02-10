import { 
  Button, 
  FormControl, 
  FormLabel, 
  Input, 
  InputGroup, 
  InputLeftElement,
  InputRightElement, 
  VStack,
  Box,
  Divider,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import {useToast} from "@chakra-ui/react";
import  axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getApiUrl, API_ENDPOINTS } from '../../config/api';

const Login = () => {
  const [show, setShow] = useState(false)
    const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [loading, setLoading] = useState(false)
        
        const toast = useToast();
        const navigate = useNavigate()
        const handleClick = ()=>setShow(!show);

    const submitHandler = async () => { 
        setLoading(true);
        if(!email || !password){
                toast({
                title:"please fill all the fields",
                status:"warning",
                duration:5000,
                isClosable:true,
                position:"bottom",
            });
            setLoading(false);
            return;
        }
        try{
            const config = {
                headers:{
                    'Content-type':"application/json",
                },
            };
            const {data}  = await axios.post(
                getApiUrl(API_ENDPOINTS.USER_LOGIN),
                {email,password},
                config
            );
            // Login successful
               toast({
                title:"Login Successfull",
                status:"success",
                duration:5000,
                isClosable:true,
                position:"bottom",
            });
            localStorage.setItem('userInfo',JSON.stringify(data));
            setLoading(false);
            navigate('/chats')

        }catch(error){
            // Error handled by toast notification
               toast({
                title:"Error Occured",
                description:"Error Occur While Login",
                status:"error",
                duration:5000,
                isClosable:true,
                position:"bottom",
            });
            setLoading(false);
        }

    }
    
    const borderColor = useColorModeValue('gray.200', 'gray.600');
    const inputBg = useColorModeValue('gray.50', 'gray.700');
    const iconColor = useColorModeValue('blue.500', 'blue.300');
    
   return (
    <Box w="100%">
      <VStack spacing={6} color='black'>
        <FormControl id='email' isRequired>
          <FormLabel 
            fontSize="sm" 
            fontWeight="semibold" 
            color="gray.700"
            mb={2}
          >
            Email Address
          </FormLabel>
          <InputGroup>
            <InputLeftElement 
              pointerEvents='none' 
              children={<EmailIcon color={iconColor} />}
              h="100%"
              pl={3}
            />
            <Input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              bg={inputBg}
              borderColor={borderColor}
              _hover={{ borderColor: 'blue.400' }}
              _focus={{
                borderColor: 'blue.500',
                boxShadow: '0 0 0 1px #3182ce'
              }}
              pl={10}
              h="45px"
              fontSize="md"
            />
          </InputGroup>
        </FormControl>

        <FormControl id='password' isRequired>
          <FormLabel 
            fontSize="sm" 
            fontWeight="semibold" 
            color="gray.700"
            mb={2}
          >
            Password
          </FormLabel>
          <InputGroup>
            <InputLeftElement 
              pointerEvents='none' 
              children={<LockIcon color={iconColor} />}
              h="100%"
              pl={3}
            />
            <Input
              type={show ? "text" : 'password'}
              placeholder='Enter your password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              bg={inputBg}
              borderColor={borderColor}
              _hover={{ borderColor: 'blue.400' }}
              _focus={{
                borderColor: 'blue.500',
                boxShadow: '0 0 0 1px #3182ce'
              }}
              pl={10}
              pr={12}
              h="45px"
              fontSize="md"
            />
            <InputRightElement width='4.5rem' h="100%">
              <IconButton
                aria-label={show ? 'Hide password' : 'Show password'}
                icon={show ? <ViewOffIcon /> : <ViewIcon />}
                onClick={handleClick}
                variant="ghost"
                colorScheme="blue"
                size="sm"
                h="80%"
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <VStack spacing={3} w="100%" pt={2}>
          <Button
            colorScheme='blue'
            width="100%"
            onClick={submitHandler}
            isLoading={loading}
            loadingText="Signing in..."
            size="lg"
            h="50px"
            fontSize="md"
            fontWeight="semibold"
            bgGradient="linear(to-r, blue.400, blue.600)"
            _hover={{
              bgGradient: 'linear(to-r, blue.500, blue.700)',
              transform: 'translateY(-1px)',
              boxShadow: 'lg'
            }}
            _active={{
              transform: 'translateY(0)'
            }}
            transition="all 0.2s"
          >
            Sign In
          </Button>

          <Divider borderColor={borderColor} />

          <Button
            variant='outline'
            colorScheme='gray'
            width="100%"
            onClick={()=>{
              setEmail('guest@example.com')
              setPassword('123456')
            }}
            size="md"
            h="45px"
            fontSize="sm"
            borderColor={borderColor}
            _hover={{
              bg: 'gray.50',
              borderColor: 'gray.400'
            }}
          >
            Get Guest User Credentials
          </Button>
        </VStack>
      </VStack>
    </Box>
   );
}

export default Login