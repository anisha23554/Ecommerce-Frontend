const initialState = {
    isloading:false
}
const LoaderReducer = (state=initialState,action)=>{
   const {payload,type} = action;
   switch(type){
       default:
           return state
   }
}
export default LoaderReducer