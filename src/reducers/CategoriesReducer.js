const initialState = {
    categories:[]
}
const CategoriesReducer = (state=initialState,action)=>{
   const {payload,type} = action
   switch(type){
       default:
           return state
   }
}
export default CategoriesReducer
