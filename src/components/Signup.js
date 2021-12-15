import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {Link as routerLink} from "react-router-dom"

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [fName,setfname] = useState('')
    const [lName,setlname] = useState('')
    const [email,setemail] = useState('')
    const [password,setpwd] = useState('')

    const handleSignup = ()=>{
        // setting up localstorage to store accounrs of users
        const users = JSON.parse(localStorage.getItem("users"))??[]
        const user = {
            fName,
            lName,
            email,
            password
        }
        localStorage.setItem("users",JSON.stringify([...users,user]))
    }
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to shop all of our cool Products ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" onChange={(e)=>{setfname(e.target.value)}} />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName">
                                    <FormLabel>Last Name</FormLabel>
                                    <Input type="text" onChange={(e)=>{setlname(e.target.value)}}/>
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" onChange={(e)=>{setemail(e.target.value)}}/>
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} onChange={(e)=>{setpwd(e.target.value)}}/>
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'red.400'}
                                color={'whitesmoke'}
                                _hover={{
                                    bg:"green.400"
                                }}
                                onClick={handleSignup}>
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link as={routerLink} to="/login" color={'blue.700'}>Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}