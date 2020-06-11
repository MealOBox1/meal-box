import { GET_ITEMS, Post_Plan, Post_Add, defaultAxios, Get_Add } from "./Types";
import Axios from "axios";

export const getItems = (data) => (dispatch) => {
  console.log(data);
  defaultAxios.get(`/venders?veg=${data.veg}&meals=${data.meals}`).then(
    (res) =>
      dispatch({
        type: "GET_ITEMS",
        payload: res.data,
      })
    // {
    //   console.log(res);
    // }
  );
};

export const getFood = (data) => (dispatch) => {
  console.log(data);
  defaultAxios.get(`/venders/${data}`).then(
    (res) =>
      dispatch({
        type: "Get_Food",
        payload: res.data,
      })
    // {
    //   console.log(res);
    // }
  );
};

export const postPlan = (data) => (dispatch) => {
  console.log(data, "ddd");
  dispatch({
    type: Post_Plan,
    payload: data,
  });
};
export const postAddress = (data) => (dispatch) => {
  console.log(data);
  defaultAxios.post(`/user/PostAddress`, data).then((res) =>
    dispatch({
      type: Post_Add,
      payload: res.data,
    })
  );
};

export const GetAddress = (data) => (dispatch) => {
  console.log(data);
  defaultAxios.get(`/user/Addresses`, data).then((res) =>
    dispatch({
      type: Get_Add,
      payload: res.data,
    })
  );
};


