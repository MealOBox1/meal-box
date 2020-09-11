export const GET_ITEMS = "GET_ITEMS";
export const Post_Plan = "PostPlan";
export const Post_Add = "Post_Add";
export const Get_Add = "Get_Add";
export const Get_Food = "Get_Food";
export const Order_Food = "Order_Food";
export const Order_Add = "Order_Add";
export const Order_GET ="Order_GET";
export const UPDATE_ORDER="UPDATE_ORDER";

// export const GET_ITEMS = "GET_ITEMS";
// export const ADD_ITEMS = "ADD_ITEMS";
// export const DELETE_ITEMS = "DELETE_ITEMS";
export const ITEMS_LOADING = "ITEMS_LOADING";
export const USER_LOADING = "USER_LOADING";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCESS = "LOGIN_SUCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_SUCESS = "LOGOUT_SUCESS";
export const REGISTER_SUCESS = "REGISTER_SUCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const GET_ERRORS = "GET_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";


import axios from "axios";

export const defaultAxios = axios.create({
  baseURL: "http://localhost:5000",
  /* other custom settings */
});
