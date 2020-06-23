import React from "react";
import { Layout, Avatar, Menu, Button, Row, Col, Carousel, Icon } from "antd";
import { FacebookOutlined, TwitterOutlined } from "@ant-design/icons";
import style from "../styles/footer.module.css";

export default function footer() {
  return (
    <Layout className="footer">
      <img
        src="./images/footer.jpg"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: " cover",
          filter: "brightness(50%)",
        }}
      ></img>
      {/* <div className="logo">
        <a href="./home">
          <img style={{ borderRadius: "4px" }} src="./images/logo2.jpeg" />
        </a>
      </div> */}
      <Row>
        <Col span={9}>
          <div className="logo" style={{ marginLeft: "151px" }}>
            <img style={{ borderRadius: "8px" }} src="./images/logo2.jpeg" />
          </div>
        </Col>
        <Col span={5}>
          <h2 className={style.h2}>Contact</h2>
          <ul className={style.list}>
            <li>Lorem ipsum #239,trcity plaza</li>
            <li>peermuchalla. zirakpur,mohali</li>
            <li>Telephone: +91 99999-88888</li>
            <li>E-mail: mail@mealbox.com</li>
          </ul>
        </Col>
        <Col span={5}>
          <h2 className={style.h2}>Menu</h2>
          <ul className={style.list}>
            <li>About us</li>
            <li>Our Food</li>
            <li>Plans</li>
            <li>Contact us</li>
          </ul>
        </Col>
        <Col span={5}>
          <h2 className={style.h2}>Follow Us</h2>
          <ul className={style.list2}>
            <li>
              <FacebookOutlined />
            </li>
            <li>
              <TwitterOutlined />
            </li>
          </ul>
        </Col>
        <hr
          style={{
            zIndex: "1",
            width: "100%",
            margin: "0px",
            opacity: "0.5",
          }}
        />
        <p
          style={{
            color: "white",
            zIndex: "1",
            fontSize: "15px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {" "}
          &copy; All Right Reserved
        </p>
      </Row>
    </Layout>
  );
}
