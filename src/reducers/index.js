import userReducer from "./user.reducer";
import authReducer from "./auth.reducer";
import categoryReducer from "./category.reducer";
import productReducer from "./product.reducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    user:userReducer,
   auth:authReducer,
   category:categoryReducer,
   product:productReducer
})
export default rootReducer;