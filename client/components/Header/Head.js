import React from "react";
// import { Layout } from "antd";
import { Layout, Avatar, Menu, Button, Row, Col, Carousel, Icon } from "antd";
const { Header, Slider, Content } = Layout;
import { BellOutlined, SettingOutlined } from "@ant-design/icons";
import styles from "../../styles/Head.module.css";
export default function Head() {
  return (
    <div>
      <Header>
        <div className="logo">
          <a href="./home">
            <img style={{ borderRadius: "4px" }} src="./images/logo2.jpeg" />
          </a>
        </div>
        <Menu
          style={{
            float: "right",
            display: "flex",
            // backgroundColor: "transparent !important",
            // color: "#d8d8d8",
          }}
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item>
            <SettingOutlined />
          </Menu.Item>
          <Menu.Item>
            <BellOutlined />
          </Menu.Item>
          <Menu.Item>Ram</Menu.Item>
          <Menu.Item style={{justifyContent:"center"}}>
            <Avatar
              className={styles.avatar}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </Menu.Item>
        </Menu>
      </Header>{" "}
    </div>
  );
}
