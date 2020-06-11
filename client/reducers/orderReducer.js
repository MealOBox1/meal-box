import { Order_Food, Order_Add } from "../Actions/Types";

const initialState = {
  order: {
    // deliveryAddress: {},
    ordered: false,
    cart: false,
  },
  cart: {},
};

export default function (state = initialState, action) {
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
    case Order_Food:
      // console.log(action.payload._id);
      //localStorage.setItem("item", action.payload.item.items._id);
      return {
        ...state,
        order: { ...state.order, ...action.payload },
      };
    case Order_Add:
      return {
        ...state,
        deliveryAddress: action.payload,
      };
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
    default:
      return state;
  }
}
