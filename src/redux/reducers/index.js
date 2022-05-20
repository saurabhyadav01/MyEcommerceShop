import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { selectProductReducer } from "./productReducer";



const reducers=combineReducers({
    allProducts:productReducer,
    product:selectProductReducer,
})

export default reducers