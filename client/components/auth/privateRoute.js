import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router"


// import authContext from "../../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const AuthContext = useSelector(state => state.auth);
  const { isAuthenticated, isloading } = AuthContext;
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !isloading ? (
        //   <Redirect to="/login" />
        Router.push("/login")
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};



export default PrivateRoute;
