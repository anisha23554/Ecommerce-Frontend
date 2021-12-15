import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Button,
} from '@chakra-ui/react';
// installation cmd for react-icons: npm i react-icons

import {
    IoAnalyticsSharp,
    IoColorFilterOutline,
    IoLogoBitcoin,
    IoScanOutline,
    IoSearchSharp,
    IoShieldCheckmarkOutline,
} from 'react-icons/io5';

import { ReactElement, useEffect } from 'react';
import Values from './Values';
import Details from './ProductDetails';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const Feature = ({ text }) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}>
                {/* {icon} */}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};
export default function Product() {
    const {name} = useParams()
    // state(products) ->{ products:{{product1},{product2},{product3}....}}
    const {products} = useSelector(state=>state.products)
    const [selectedProduct,setselectedProduct] = useState(null)
    
    const fetchProduct = (productName)=>{
        const product = products.find(product=>product.productName===productName)
        setselectedProduct(product)
    }
    useEffect(()=>{
       fetchProduct(name)
    },[])
    console.log(selectedProduct)
    return (
        <Container maxW={'7xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={selectedProduct && selectedProduct.imageUrl}
                        objectFit={'cover'}
                    />
                </Flex>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'blue.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        {selectedProduct && selectedProduct.category}
                    </Text>
                    <Heading>{selectedProduct && selectedProduct.productName}</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        {selectedProduct && selectedProduct.description}
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        <Feature
                            icon={

                                <Icon as={IoScanOutline} color={'yellow.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'For : Apple watch (38mm,40mm,41mm)'}
                        />

                        <Feature
                            icon={
                                <Icon as={IoColorFilterOutline} color={'purple.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            text={`Color : ${selectedProduct && selectedProduct.color}`}
                        />
                        <Feature
                            icon={<Icon as={IoShieldCheckmarkOutline} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'12 Months Warranty'}
                        />
                    </Stack>
                    <Flex justifyContent={'space-between'} spacing={10} pt={2}>
                        <Button
                            flexGrow={'4'}
                            loadingText="Submitting"
                            size="lg"
                            bg={'gray.900'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.400',
                            }}>
                            Buy Now
                        </Button>
                        <Heading color={'gray.900'} textAlign={'center'} borderRadius={'10px'} flexGrow={'2'} background={'gray.100'}>{selectedProduct && selectedProduct.listingPrice}</Heading>
                    </Flex>
                </Stack>

            </SimpleGrid>
            <Values />
            <Details />
        </Container >
    );
}