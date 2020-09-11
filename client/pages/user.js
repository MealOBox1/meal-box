import React from "react";
import Head from "../components/Header/Head";
import { Layout, Row } from "antd";
import UserPanel from "../components/UserPanel";
 import {Raw} from "../styles/userStyle.js";
import Footer from "../components/footer";

export default function User(props) {
  return (
    <>
      <Layout>
        <Raw style={{ zIndex: -1, position: "relative" }}>
          <img
            src="./images/thali.png"
            // className={styles.headerBg}
            style={{ width: "697px" }}
          />
        </Raw>
        <Head />
        <UserPanel />
        {/* <Footer /> */}
      </Layout>
    </>
  );
}
