import React, { Component } from "react";
import "../styles/global.css";
 import "../styles/home.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { Provider } from "react-redux";
import withRedux, { createWrapper } from "next-redux-wrapper";
import store from "../store";
import App from "next/app";
import {loadUser} from "../Actions/User"
import PrivateRoute from "../components/auth/privateRoute"
library.add(faEnvelope, faKey);

// import "../css/antd.less";
// import "../styles/home.less";

class MyApp extends App {

static async getInitialProps({ Component, ctx }) {
//  store.dispatch(loadUser())

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    //Anything returned here can be accessed by the client
    return { pageProps: pageProps };
  }

  componentDidMount(){
    store.dispatch(loadUser())
  }

  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;
const Wrapper = createWrapper(makeStore);

//withRedux wrapper that passes the store to the App Component
export default Wrapper.withRedux(MyApp);
