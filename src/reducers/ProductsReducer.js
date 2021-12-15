const initialState = {
    products:[
        { 
          id:1,
          productName:'Cool Watch Band',
          description:'Very comfortable and a cool watchband, wear it and u will love it..wear cool, look cool 😎',
          actualPrice:"$40",
          listingPrice:"$30",
          category:"Watch Band",
          compatibleWith:'Apple-watch-35mm,40mm,41mm',
          color:'Blue',
          imageUrl:'https://th.bing.com/th/id/OIP.fz6nDGtI3uDHpN__qkfbDQHaHa?pid=ImgDet&rs',
          stock:50
        },
        {
            id:2,
            productName:'iphone10',
            description:'The iPhone X has two cameras on the rear. One is a 12-megapixel wide-angle camera with f/1.8 aperture, with support for face detection, high dynamic range and optical image stabilization. It is capable of capturing 4K video at 24, 30 or 60 frames per second, or 1080p video at 30, 60, 120 or 240 frames per second.',
            actualPrice:"$100",
            listingPrice:"$80",
            category:"iphone",
            compatibleWith:'Apple-watch-35mm,40mm,41mm',
            color:'red',
            imageUrl:'https://th.bing.com/th/id/OIP.KgrAXuPicF9079tFFOi0gAHaHa?pid=ImgDet&rs=1',
            stock:30
        },
        {   
            id:3,
            productName:'iphone12',
            description:'CPU: Hexa-core (2 "high performance" Firestorm @ 3.1 GHz + 4 "energy-saving" Icestorm) Generation: 14th Manufacturer: Pegatron(on contract) sole supplier of 12 mini, Foxconn(on contract) Memory: 4 GB LPDDR4',
            actualPrice:"$120",
            listingPrice:"$95",
            category:"iphone",
            compatibleWith:'Apple-watch-35mm,40mm,41mm',
            color:'orange',
            imageUrl:'https://1abonnement.fr/wp-content/uploads/2020/10/iphone-12-mini.png',
            stock:8
        },
        {
            id:4,
            productName:'OnePlus Smart Band',
            description:'Removable main tracker design allows for effortless transition between dynamic dual-color strap combos. Battery life : Up to 14 days, Battery capacity: 100 mAh On-demand daytime spot checks and continuous sleep monitoring of blood oxygen saturation (Sp02) quickly and accurately highlight potential health issues. Access key mobile features directly from your wrist â includes music, camera shutter controls, call - message notifications and many more.',
            actualPrice:"$100",
            listingPrice:"$90",
            category:"Watch Band",
            compatibleWith:'Apple-watch-35mm,40mm,41mm',
            color:'Black',
            imageUrl:'https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_260,w_260/v1612161247/Croma%20Assets/Wearable/Wearable%20Devices/Images/231755_4_nv0gsp.png',
            stock:25
        },
        {   
            id:5,
            productName:'Daniel Wellington watch band',
            description:"Daniel Wellington is a Swedish brand founded in 2011 by Filip Tysander. DW uses a few rare designs and social media marketing to sell watches to younger consumers. Since its inception, Daniel Wellington has sold over 6 million watches,the company has gained this success through its digital strategy in social networks like Instagram. Headquartered in central Stockholm in Sweden, the company's products are sold in over 25 countries.",
            actualPrice:"$90",
            listingPrice:"$70",
            category:"Watch Band",
            compatibleWith:'Apple-watch-35mm,40mm,41mm',
            color:'rose-gold',
            imageUrl:'https://www.fields.ie/media/catalog/product/0/0/00-65546.jpg?quality=100&fit=bounds&height=1500&width=1920&canvas=1920:1500',
            stock:5
        }
    ]
}
const ProductsReducer = (state=initialState,action)=>{
   const {payload,type} = action
   switch(type){
       case "DELETE_PRODUCT":
           return {products:payload}
       case "ADD_PRODUCT":
           return {products:payload}
       default:
           return state
   }
}
export default ProductsReducer
