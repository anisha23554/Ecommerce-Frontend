/*   implementing PrivateRoute as HOC To avoid reusing 
     the same logic repeatedly */
// import {Use}

import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoute = ({component}) => {
    const auth = useSelector(state=>state.auth)
    const {token} = auth
    return token === null ? component : <Navigate to="/"/>
}
 
export default PrivateRoute;