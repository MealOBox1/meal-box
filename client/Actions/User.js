import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCESS,
    LOGIN_FAIL,
    LOGOUT_SUCESS,
    REGISTER_SUCESS,
    REGISTER_FAIL,
    defaultAxios 
  } from "./Types";
  import Axios from "axios";
  import Router from "next/router"
  import { returnErrors } from "./errorAction.js";
  
  //check token and load user
  export const loadUser = () => (dispatch, getState) => {
    //user loading
    console.log("hlo")
    dispatch({ type: USER_LOADING });
  
    defaultAxios.get("/user/auth", tokenConfig(getState))
      .then(res =>
        dispatch({
          type: USER_LOADED,
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: AUTH_ERROR
        });
      });
  };
  
  //REgister user
  export const register = (body) => dispatch => {
    //Header
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    //const body = JSON.stringify({ name, email, password });
    console.log(body);
    defaultAxios.post("/user/register", body)
      .then(res =>
        dispatch({
          type: REGISTER_SUCESS,
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(
          returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
        );
        dispatch({
          type: REGISTER_FAIL
        });
      });
  };
  
  //login user
  export const login = ({ email, password }) => dispatch => {
    //Header
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    const body = JSON.stringify({ email, password });
    console.log(body);
  
    defaultAxios.post("/user/login", body, config)
      .then(res =>
        dispatch({
          type: LOGIN_SUCESS,
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(
          returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
        );
        dispatch({
          type: LOGIN_FAIL
        });
      });
  };
  
  // Logout User
  export const logout = () => {
    return {
      type: LOGOUT_SUCESS
    };
  };
  
  export const tokenConfig = getState => {
    //Get token from local storage
    const token = getState().auth.token;
  
    //Header
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };
  
    if (token) {
      config.headers["x-auth-token"] = token;
    }
  
    return config;
  };
  