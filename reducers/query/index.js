import { combineReducers } from "redux";

import result from "./result";
import saveProduct from "./saveProduct";
import cancelProduct from "./cancelProduct";

export default combineReducers({
    result,
    saveProduct,
    cancelProduct,
});