import { Order_Food } from "./Types";

export const Orderfood = (data) => (dispatch) => {
  console.log(data);
  dispatch({
    type: Order_Food,
    payload: data,
  });
};
