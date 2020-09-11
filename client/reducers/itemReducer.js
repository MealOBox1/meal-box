import {
  Get_Add,
  GET_ITEMS,
  Post_Plan,
  Post_Add,
  Get_Food,
} from "../Actions/Types";

const initialState = {
  items: [],
  auth: false,
  PlanType: "",
  Address: [],

};

export default function (state = initialState, action) {
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
    case "GET_ITEMS":
      // console.log(action.payload._id);
      //localStorage.setItem("item", action.payload.item.items._id);
      return {
        ...state,
        items: action.payload,
      };
    case Get_Food:
      // console.log(action.payload._id);
      //localStorage.setItem("item", action.payload.item.items._id);
      return {
        ...state,
        items: action.payload,
      };
    case Post_Plan:
      return {
        ...state,
        PlanType: action.payload,
      };
    case Post_Add:
      return {
        ...state,
        Address: [...state.Address, action.payload ],
      };
    case Get_Add:
      return {
        ...state,
        Address: action.payload ,
      };
      case "Update_Add":
      return {
        ...state,
        Address:state.Address.map((el)=>
        el._id===payload._id ? payload:el
        ) ,
      };
    default:
      return state;
  }
}
