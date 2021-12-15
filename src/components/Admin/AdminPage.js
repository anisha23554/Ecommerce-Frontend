import { Box, Center, Heading} from "@chakra-ui/layout";
import { Table,Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
    Th,
    Tr,
    TableCaption,
    Thead,
    Tbody,
    Td
} from "@chakra-ui/table"
import reactDom from "react-dom";
import deleteProduct from "../../actions/productActions";
import { useDispatch } from "react-redux";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import AddProduct from "./AddProduct";

const AdminPage = () => {
    const {products} = useSelector(state=>state.products)
    const dispatch = useDispatch()
    const handleDelete = (productId)=>{
       const action = deleteProduct(products,productId)
       dispatch(action)
    }
    return ( 
      <Box>
          <Table>
             <Thead>
                 <Heading fontSize={'25px'} p={4}><u>ADMIN</u></Heading>
                <Tr bg={'blue.700'}>
                  <Th textAlign={'center'} color={'white'} textAlign={'center'} fontSize={'19px'}>Product Id</Th>
                  <Th textAlign={'center'} color={'white'} textAlign={'center'} fontSize={'19px'}>Product Name</Th>
                  <Th textAlign={'center'} color={'white'} textAlign={'center'} fontSize={'19px'}>Category</Th>
                  <Th textAlign={'center'} color={'white'} textAlign={'center'} fontSize={'19px'}>Actual Price</Th>
                  <Th textAlign={'center'} color={'white'} textAlign={'center'} fontSize={'19px'}>Listing Price</Th>
                  <Th textAlign={'center'} color={'white'} textAlign={'center'} fontSize={'19px'}>Color</Th>
                  <Th textAlign={'center'} color={'white'} textAlign={'center'} fontSize={'19px'}>Stock</Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
             </Thead>
             <Tbody>
                 {/* fetch products from the redux store */}
                 {
                    products.map(product=>
                    <Tr>
                      <Td textAlign={'center'} fontSize={'18px'}>{product.id}</Td>
                      <Td textAlign={'center'} fontSize={'18px'}>{product.productName}</Td>
                      <Td textAlign={'center'} fontSize={'18px'}>{product.category}</Td>
                      <Td textAlign={'center'} fontSize={'18px'}>{product.actualPrice}</Td>
                      <Td textAlign={'center'} fontSize={'18px'}>{product.listingPrice}</Td>
                      <Td textAlign={'center'} fontSize={'18px'}>{product.color}</Td>
                      <Td textAlign={'center'} fontSize={'18px'} color={product.stock<10?'red':'green'}>{product.stock}</Td>
                      <Td><Button bg={'red.500'} color={'white'} onClick={()=>{handleDelete(product.id)}}>Delete</Button></Td>
                      <Td><Button bg={'blue.600'} color={'white'}>Edit</Button></Td>
                    </Tr>
                   )
                 }
             </Tbody>
          </Table>
          <AddProduct />
      </Box>
     );
}
 
export default AdminPage;