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

export const UpdateAddress = (id,data) => (dispatch) => {
  console.log(data);
  defaultAxios.put(`/user/UpdateAddress/${id}`, data).then((res) =>
    dispatch({
      type: "Update_Add",
      payload: res.data,
    })
  );
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

export const GetAddress = (data) => (dispatch,getState) => {
  console.log(getState().auth);
  if(getState().auth.user!== null){
    const id= getState().auth.user._id
    defaultAxios.get(`/user/Addresses/${id}`, id).then((res) =>
      dispatch({
        type: Get_Add,
        payload: res.data,
      })
    );
  }

};


