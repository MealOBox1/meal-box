import React from "react";
import Head from "../components/Header/Head";
import { Layout, Row } from "antd";
import UserPanel from "../components/UserPanel";
import styles from "../styles/user.module.css";
import Footer from "../components/footer";

export default function User() {
  return (
    <>
      <Layout>
        <Row style={{ zIndex: -1, position: "relative" }}>
          <img
            src="./images/thali.png"
            className={styles.headerBg}
            style={{ width: "697px" }}
          />
        </Row>
        <Head />
        <UserPanel />
        {/* <Footer /> */}
      </Layout>
    </>
  );
}
