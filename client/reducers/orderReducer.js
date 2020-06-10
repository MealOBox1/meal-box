import { Order_Food } from "../Actions/Types";

const initialState = {
  order: {
    deliveryAddress: {},
    ordered: false,
    cart: false,
  },
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
    default:
      return state;
  }
}
