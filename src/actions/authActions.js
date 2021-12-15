// this file contains all the auth related actions(object).

/*loginUser() returns the appropriate action after verifying the users
creds that whether user can login to the account or not */

const jwt = require("jsonwebtoken")
const loginUser = (email,password)=>{
    const users = JSON.parse(localStorage.getItem("users"))
    const user = users.find(user=>user.email === email)
    console.log(user)
    if(user && password===user.password){
        // using jwt to create a secure token
        const token = jwt.sign(email,"SECRET")
        return {
            type:"LOGIN_SUCCESS",
            payload:{token}
        }
    }
    else{
       return{
           type:"LOGIN_FAILURE",
           payload:{token:null}
       }
    }
}

export default loginUser