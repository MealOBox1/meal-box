import React from "react";
import { Avatar, Row, Menu } from "antd";
import styles from "../styles/UserPanel.module.css";
import Userinfo from "../components/UserInfo";
import Link from "next/link";

export default function UserPanel() {
  return (
    <>
      <Row className={styles.panel}>
        <Avatar
          style={{ border: "1px solid #44cd48" }}
          size={80}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </Row>
      <Row style={{ justifyContent: "center" }}>
        {" "}
        <h1 style={{ margin: "0" }}>Ram</h1>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        {" "}
        <h4>Ram</h4>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Menu
          mode="horizontal"
          style={{ boxShadow: "1px 4px 6px #888888", borderRadius: " 30px" }}
        >
          <Menu.Item>
            <Link href="./food">Restaurants</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="./Overview"> Overview</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="./usersummary">Account info</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="./Subscription">Subscription</Link>
          </Menu.Item>
          {/* <Menu.Item>
            <a>Phkggayment</a>
          </Menu.Item> */}
        </Menu>
      </Row>
    </>
  );
}
