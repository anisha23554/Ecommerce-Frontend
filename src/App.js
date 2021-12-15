import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Products from "./components/Product/Products"
import Product from "./components/Product/Product"
import MyOrders from "./components/MyOrders"
import Order from "./components/Order"
import AdminPage from "./components/Admin/AdminPage"
import Navbar from "./layouts/Navbar"
import { Routes,Route } from "react-router"
import PrivateRoute from "./routing/PrivateRoute"
const App = () => {
  return ( 
    <div>
       <Navbar />
       <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<PrivateRoute component={<Login/>}/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/shop" element={<Products/>}></Route>
            <Route path="/admin" element={<AdminPage/>}></Route>
            <Route path="/product/:name" element={<Product />}></Route>
       </Routes>
    </div>
   );
}
 
export default App;