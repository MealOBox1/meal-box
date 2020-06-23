import { Order_Food, Order_Add, defaultAxios } from "./Types";
import { useRouter } from "next/router";
import Router from "next/router";

export const Orderfood = (data) => (dispatch) => {
  console.log(data);
  dispatch({
    type: Order_Food,
    payload: data,
  });
};

export const OrderAddress = (id, data) => (dispatch) => {
  console.log(data);
  defaultAxios.patch(`/user/cart/${id}/address`, data).then((res) =>
    dispatch({
      type: Order_Add,
      payload: data,
    })
  );
};
export const GetCart = (data) => (dispatch) => {
  // const router = useRouter();
  console.log(data);
  defaultAxios.get(`/user/cart/${data}`).then((res) => {
    dispatch({
      type: "Get_Cart",
      payload: res.data,
    });
  });
};

export const Createcart = (data) => (dispatch) => {
  console.log(data);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  defaultAxios.post(`/user/cart`, data, config).then((res) => {
    // console.log(Router);
    Router.push("/[shipping]", `/${res.data._id}`);
    dispatch({
      type: "Add_cart",
      payload: res.data,
    });
  });
};
