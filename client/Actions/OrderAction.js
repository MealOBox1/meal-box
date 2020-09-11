import { Order_Food, Order_Add, defaultAxios,Order_GET ,UPDATE_ORDER,Post_Add } from "./Types";
import { useRouter } from "next/router";
import Router from "next/router";
import {tokenConfig} from "./User"

export const Orderfood = (data) => (dispatch) => {
  console.log(data);
  defaultAxios.post(`/user/order`, data).then((res) =>
    dispatch({
      type: Order_Food,
      payload: res.data,
    })
  );
};

export const OrderAddress = (id, data) => (dispatch) => {

  defaultAxios.put(`/user/cart/${id}/address`, data).then((res) =>
  dispatch({
    type: Order_Add,
    payload: res.data,
  })
);
 
};

export const PostAddress = (data) => (dispatch,getState) => {
  console.log(data);
  if(getState().auth.user){
    console.log(data);
    data.UserID=getState().auth.user._id
    defaultAxios.post(`/user/PostAddress`, data).then((res) =>
    dispatch({
      type: Post_Add,
      payload: res.data,
    })
  );
  }

};

export const GetOrder = (id, data) => (dispatch) => {
  console.log(data);
  defaultAxios.get(`/user/GetOrder`, data).then((res) =>
    dispatch({
      type: Order_GET,
      payload: res.data,
    })
  );
};

export const UpdateOrder=(id,data)=>(dispatch)=>{
  console.log(id);
  console.log(data);
  defaultAxios.patch(`/user/UpdateOrder/${id}`,data).then((res)=>{
    dispatch({
      type:UPDATE_ORDER,
      payload:res.data
    })
  })
}


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

export const currentValues=(data)=>(dispatch)=>{
  dispatch({
    type: "Add_Current",
    payload:data,
  });
}

export const Clear =()=>(dispatch)=>{
  dispatch({
    type: "Clear",
  });
}