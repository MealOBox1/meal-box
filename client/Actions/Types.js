export const GET_ITEMS = "GET_ITEMS";
export const Post_Plan = "PostPlan";
export const Post_Add = "Post_Add";
export const Get_Add = "Get_Add";
export const Get_Food = "Get_Food";
export const Order_Food = "Order_Food";
export const Order_Add = "Order_Add";

import axios from "axios";

export const defaultAxios = axios.create({
  baseURL: "http://localhost:5000",
  /* other custom settings */
});
