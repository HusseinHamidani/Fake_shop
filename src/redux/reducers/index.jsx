import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
const reducers = combineReducers({
    product : productReducer,
    Sproduct :selectedProductReducer
})
export default reducers