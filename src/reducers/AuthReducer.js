const initialState = {
    token:null
}
const AuthReducer = (state=initialState,action)=>{
   const {payload,type} = action;
   switch(type){
       case "LOGIN_SUCCESS":
           return payload  //payload contains the jwt token
       case "LOGIN_FAILURE":
           return payload
       case "LOGOUT":
           return payload
       default:
           return state
   }
}
export default AuthReducer