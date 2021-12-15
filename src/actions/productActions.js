/* this file consinsts of the actions related to products
   like addition,deletion and edit */ 
const deleteProduct = (products,productId)=>{
    const updatedProducts = products.filter(product=>product.id!=productId)
    return {
        type:"DELETE_PRODUCT",
        payload:updatedProducts
    }
}
export const addProduct = (products,product)=>{
   const updatedProducts = [...products,product]
   return {
       type:"ADD_PRODUCT",
       payload:updatedProducts
   }
}

export default deleteProduct