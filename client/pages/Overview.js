import React from "react";
import { Row } from "antd";
import UserLayout from "./userlayout";
import { Card, Input, Button } from "antd";
const { Search } = Input;
import { SearchOutlined } from "@ant-design/icons";
import Orders from "../components/OrderTable";

export default function Overview() {
  return (
    <div>
      <UserLayout>
        <Row style={{ flexDirection: "column", alignItems: "center" }}>
          <h2>Overview</h2>
          <Row style={{ width: "608px", justifyContent: "space-between" }}>
            {" "}
            <div className="site-card-border-less-wrapper">
              <Card style={{ borderLeft: "3px solid #74cf4e", height: "84px" }}>
                <h3>Total Transaction</h3>
                <p>15</p>
              </Card>
            </div>
            <div className="site-card-border-less-wrapper">
              <Card style={{ borderLeft: "3px solid #74cf4e", height: "84px" }}>
                <h3>Total Transaction</h3>
                <p>15</p>
              </Card>
            </div>
            <div className="site-card-border-less-wrapper">
              <Card style={{ borderLeft: "3px solid #74cf4e", height: "84px" }}>
                <h3>Total Transaction</h3>
                <p>15</p>
              </Card>
            </div>
          </Row>
          <Row style={{ marginTop: "75px" }}>
            <div className="site-card-border-less-wrapper">
              <Card style={{ borderLeft: "3px solid #74cf4e" }}>
                <h3>All deliveries</h3>
                <Row style={{ flexDirection: "row", width: "600px" }}>
                  <Input
                    shape="round"
                    style={{ width: "250px", borderRadius: "21px" }}
                    placeholder="input search text"
                    //   enterButton="Search"
                    size="large"
                    //  onSearch={(value) => console.log(value)}
                  />
                  <Button
                    shape="round"
                    style={{
                      marginLeft: "46px",
                      backgroundColor: "#74cf4e",
                      color: "white",
                      borderColor: "#74cf4e",
                      border: 0,
                    }}
                    icon={<SearchOutlined />}
                  >
                    Search
                  </Button>
                </Row>
                <Row style={{ marginTop: "12px" }}>
                  <p>
                    <b style={{ marginRight: "7px" }}>Vender:</b>Naman
                  </p>
                </Row>
                <Orders />
              </Card>
            </div>
          </Row>
        </Row>
      </UserLayout>
    </div>
  );
}
