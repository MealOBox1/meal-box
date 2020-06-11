import { Order_Food, Order_Add, defaultAxios } from "./Types";

export const Orderfood = (data) => (dispatch) => {
  console.log(data);
  dispatch({
    type: Order_Food,
    payload: data,
  });
};

export const OrderAddress = (data) => (dispatch) => {
  console.log(data);
  dispatch({
    type: Order_Add,
    payload: data,
  });
};
export const getCart = (data) => (dispatch) => {
  defaultAxios.get(`/venders/${data}`).then((res) =>
    dispatch({
      type: "Get_Cart",
      payload: data,
    })
  );
};

export const Createcart = (data) => (dispatch) => {
  dispatch({
    type: "Add_cart",
    payload: data,
  });
};
