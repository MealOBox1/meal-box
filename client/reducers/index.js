import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import orderReducer from "./orderReducer";
import authReducer from "./authReducer"

export default combineReducers({
  item: itemReducer,
  order: orderReducer,
  auth:authReducer
});
