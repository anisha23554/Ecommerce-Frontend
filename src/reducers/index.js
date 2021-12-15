import { combineReducers } from "redux";
import auth from "./AuthReducer"
import loader from "./LoaderReducer"
import products from "./ProductsReducer"
import categories from "./CategoriesReducer"

// combining multiple reducers into a single object
export default combineReducers({
  auth,
  loader,
  products,
  categories 
})