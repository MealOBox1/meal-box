import React from "react";
import { Layout, Avatar, Menu, Button, Row, Col, Carousel, Icon } from "antd";
import { TwitterOutlined } from "@ant-design/icons";

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
        }}
      ></img>
      <Row>
        <Col span={9}>
          <div className="logo" style={{ marginLeft: "151px" }}>
            <img style={{ borderRadius: "4px" }} src="./images/logo2.jpeg" />
          </div>
        </Col>
        <Col span={5}>
          <h2>Contact</h2>
          <ul>
            <li>address</li>
            <li>address</li>
            <li>address</li>
          </ul>
        </Col>
        <Col span={5}>
          <h2>Contact</h2>
          <ul>
            <li>address</li>
            <li>address</li>
            <li>address</li>
          </ul>
        </Col>
        <Col span={5}>
          <h2>Contact</h2>
          <ul>
            <li>
              <TwitterOutlined />
            </li>
            <li>address</li>
            <li>address</li>
          </ul>
        </Col>
      </Row>
    </Layout>
  );
}
