import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Box,Heading} from "@chakra-ui/layout"
import { Input } from "@chakra-ui/input"
import { Center } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { addProduct } from "../../actions/productActions"

const AddProduct = ()=>{
    const [productName,setProductName] = useState('')
    const [category,setCategory] = useState('')
    const [actualPrice,setActualPrice] = useState('')
    const [listingPrice,setListingPrice] = useState('')
    const [color,setColor] = useState('')
    const [stock,setStock] = useState('')
    const [imageUrl,setImage] = useState('')
    const [description,setDescription] = useState('')

    const {products} = useSelector(state=>state.products)
    const dispatch = useDispatch()

    const handleAddProduct = ()=>{
        const productDetails = {
           productName,
           category,
           actualPrice,
           listingPrice,
           color,
           stock,
           imageUrl,
           description
        }
        dispatch(addProduct(products,productDetails))
    }
return (
    <Box>
      <Heading p={8} textAlign={'center'} fontSize={'30px'}>Add Product</Heading>
      <FormControl>
      <FormLabel m={3} textAlign={'center'} fontSize={'20px'}>Product Name</FormLabel>
           <Center>
             <Input width={400} onChange={(e)=>{setProductName(e.target.value)}}></Input>
          </Center>
      <FormLabel m={3} textAlign={'center'} fontSize={'20px'}>Category</FormLabel>
           <Center>
             <Select width={400} onChange={(e)=>{setCategory(e.target.value)}} placeholder="select product category" textAlign={'center'}>
                <option>Watch Band</option>
                <option>iphone</option>
            </Select>
          </Center>
       <FormLabel m={3} textAlign={'center'} fontSize={'20px'}>Actual Price</FormLabel>
           <Center>
             <Input width={400} onChange={(e)=>{setActualPrice(e.target.value)}}></Input>
          </Center>
          <FormLabel m={3} textAlign={'center'} fontSize={'20px'}>Listing Price</FormLabel>
           <Center>
             <Input width={400} onChange={(e)=>{setListingPrice(e.target.value)}}></Input>
          </Center>
          <FormLabel m={3} textAlign={'center'} fontSize={'20px'}>Color</FormLabel>
           <Center>
             <Input width={400} onChange={(e)=>{setColor(e.target.value)}}></Input>
          </Center>
          <FormLabel m={3} textAlign={'center'} fontSize={'20px'}>Stock</FormLabel>
           <Center>
             <Input width={400} onChange={(e)=>{setStock(e.target.value)}}></Input>
          </Center>
          <FormLabel m={3} textAlign={'center'} fontSize={'20px'}>Image URL</FormLabel>
           <Center>
             <Input width={400} onChange={(e)=>{setImage(e.target.value)}}></Input>
          </Center>
          <FormLabel m={3} textAlign={'center'} fontSize={'20px'}>Description</FormLabel>
           <Center>
             <Input width={400} onChange={(e)=>{setDescription(e.target.value)}}></Input>
          </Center>
          <Center>
             <Input type="submit" value="Add Product" onClick={handleAddProduct} width={150} m={8} bg={'blue.600'} color={'white'}></Input>
          </Center>
      </FormControl>
    </Box>
)
}
export default AddProduct