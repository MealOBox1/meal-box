import { Order_Food, Order_Add ,Order_GET,UPDATE_ORDER} from "../Actions/Types";

const initialState = {
  // order: {
  //   // deliveryAddress: {},
  //   ordered: false,
  //   cart: false,
  // },
  cart: {},
  Current:null,
  model:false
};

export default function (state = initialState, action) {
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
    case Order_GET:
      return {
        ...state,
        order:action.payload
      }
    case Order_Food:
      // console.log(action.payload._id);
      //localStorage.setItem("item", action.payload.item.items._id);
      return {
        ...state,
        order:action.payload 
      };
    case Order_Add:
      return {
        ...state,
        order:{...state.order , orderid:action.payload._id},
      };
    case UPDATE_ORDER:
      return{
        ...state,
        order:state.order.order.map((item) =>
        item._id === payload._id ? payload : item
      )}  
    case "Add_cart":
      return {
        ...state,
        cart: action.payload,
      };
    case "Get_Cart":
      return {
        ...state,
        cart: action.payload,
      };
      case "Add_Current":
        return {
          ...state,
          Current: action.payload,
          model:true
        };
      case "Clear":
        return {
          ...state,
          Current:null,
          model:false
        }
    default:
      return state;
  }
}
