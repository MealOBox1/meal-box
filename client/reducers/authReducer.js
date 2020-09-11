import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCESS,
    LOGIN_FAIL,
    LOGOUT_SUCESS,
    REGISTER_SUCESS,
    REGISTER_FAIL
  } from "../Actions/Types";
  import Router from "next/router"
  import Cookie from "js-cookie"
// import localStorage from "redux-persist/es/storage";


  const initialState = {
   token: Cookie.get('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
  };
  
  export default function(state = initialState, action) {
    console.log(action)
    switch (action.type) {
      case USER_LOADING:
        return {
          ...state,
          isLoading: true
        };
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          user: action.payload
        };
  
      case LOGIN_SUCESS:
      case REGISTER_SUCESS:
        //localStorage.setItem("token", action.payload.token);
        Cookie.set("token",action.payload.token)
        console.log(action.payload);
        Router.push("/home");
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          isLoading: false
        };
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT_SUCESS:
      case REGISTER_FAIL:
        //localStorage.removeItem("token");
        console.log(typeof window,"window")
       Router.push("/login");
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: false,
          isLoading: false
        };
  
      default:
        return state;
    }
  }
  