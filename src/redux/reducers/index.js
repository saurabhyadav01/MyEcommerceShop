import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { registerReducer } from "./ragisterReducer";
import { productReducer } from "./productReducer";
import { selectProductReducer } from "./productReducer";
import { cartProductReducer } from "./cartItemsReduces";



const reducers=combineReducers({
    allProducts:productReducer,
    product:selectProductReducer,
    loginData:loginReducer,
    registerData:registerReducer,
    cartProductData:cartProductReducer
})

export default reducers