import React, { useEffect } from "react";
import UserLayout from "./userlayout";
import Userinfo from "../components/UserInfo";
import { connect } from "react-redux";
import { GetAddress } from "../Actions/ItemsAction";
import { Card, Button } from "antd";

function usersummary(props) {
  useEffect(() => {
    props.GetAddress();
  }, []);

  return (
    <div>
      <UserLayout>
        <Card
          style={{
            borderLeft: "3px solid #74cf4e",
            marginLeft: "550px",
            marginTop: "20px",
            width: "28%",
            marginLeft: "550px",
            marginTop: "20px",
          }}
        >
          <div>
            <h2>Home</h2>
            <h2>land mark</h2>
            <h3>pincode</h3>
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              style={{ backgroundColor: "#74cf4e", border: 0 }}
            >
              Delivery here
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              style={{
                backgroundColor: "#74cf4e",
                border: 0,
                marginLeft: "193px",
              }}
            >
              Edit
            </Button>
          </div>
        </Card>
        
        {/* <Userinfo /> */}
      </UserLayout>
    </div>
  );
}

export default connect(null, { GetAddress })(usersummary);
