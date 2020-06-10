import React, { useEffect, useState } from "react";
import { Card, Row } from "antd";
import UserLayout from "./userlayout";
import { Button, Radio } from "antd";
import { DownloadOutlined, CheckCircleOutlined } from "@ant-design/icons";
import styles from "../styles/Subscription.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { postPlan } from "../Actions/ItemsAction";
import Router from "next/router";
const { Meta } = Card;

function Subscription(props) {
  const [plan, setplan] = useState("");

  const choosePlan = (event) => {
    // console.log(typeof event.currentTarget.value);
    props.postPlan(event.currentTarget.value);
    setplan(props.planType);
  };

  useEffect(() => {
    // Update the document title using the browser API
    if (plan !== "") {
      Router.push("/usersummary");
    }
  });

  return (
    <div>
      <UserLayout>
        <Row>
          <h3 style={{ marginLeft: "567px", marginTop: "35px" }}>
            Subscription Plan
          </h3>
          {/* <Userinfo /> */}
        </Row>
        <Row style={{ justifyContent: "space-evenly", height: "700px" }}>
          <Card hoverable style={{ width: 302, height: "550px" }}>
            <p
              style={{
                textAlign: "center",
                color: "green",
                fontSize: "20px",
                margin: " 0",
              }}
            >
              {" "}
              Silver{" "}
            </p>
            <img
              alt="example"
              src="./images/Silver-Icon.jpg"
              style={{ maxWidth: "42%", margin: "auto" }}
            />
            {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
            <p style={{ textAlign: "center" }}>
              <sup style={{ top: "-2.5em" }}>$</sup>
              <b style={{ fontSize: "40px" }}>40</b>/month
            </p>
            <Row>
              {/* <i class="fa fa-check-circle" aria-hidden="true"></i> */}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#74cf4e" }}
              />
              <p>
                {" "}
                <b style={{ fontSize: "large", color: "black" }}>
                  Randomized meal plan{" "}
                </b>
                : there
                <br /> Variation of the plan and the sum
                <br /> will be accurate etc.{" "}
              </p>
            </Row>
            <Row>
              {/* <i class="fa fa-check-circle" aria-hidden="true"></i> */}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#74cf4e" }}
              />
              <p>
                {" "}
                <b style={{ fontSize: "large", color: "black" }}>
                  Randomized meal plan{" "}
                </b>
                : there
                <br /> Variation of the plan and the sum
                <br /> will be accurate etc.{" "}
              </p>
            </Row>
            <Row>
              {/* <i class="fa fa-check-circle" aria-hidden="true"></i> */}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#74cf4e" }}
              />
              <p>
                {" "}
                <b style={{ fontSize: "large", color: "black" }}>
                  Randomized meal plan{" "}
                </b>
                : there
                <br /> Variation of the plan and the sum
                <br /> will be accurate etc.{" "}
              </p>
            </Row>

            <Button
              //   type="primary"
              shape="round"
              icon={<DownloadOutlined />}
              size="large"
              style={{
                marginLeft: "46px",
                backgroundColor: "#74cf4e",
                color: "white",
              }}
              value="Silver"
              id="silver"
              onClick={choosePlan}
            >
              Subscribe
            </Button>
          </Card>
          <Card hoverable style={{ width: 302, height: "550px" }}>
            <p
              style={{
                textAlign: "center",
                color: "green",
                fontSize: "20px",
                margin: " 0",
              }}
            >
              {" "}
              Silver{" "}
            </p>
            <img
              alt="example"
              src="./images/Silver-Icon.jpg"
              style={{ maxWidth: "42%", margin: "auto" }}
            />
            {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
            <p style={{ textAlign: "center" }}>
              <sup style={{ top: "-2.5em" }}>$</sup>
              <b style={{ fontSize: "40px" }}>40</b>/month
            </p>
            <Row>
              {/* <i class="fa fa-check-circle" aria-hidden="true"></i> */}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#74cf4e" }}
              />
              <p>
                {" "}
                <b style={{ fontSize: "large", color: "black" }}>
                  Randomized meal plan{" "}
                </b>
                : there
                <br /> Variation of the plan and the sum
                <br /> will be accurate etc.{" "}
              </p>
            </Row>
            <Row>
              {/* <i class="fa fa-check-circle" aria-hidden="true"></i> */}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#74cf4e" }}
              />
              <p>
                {" "}
                <b style={{ fontSize: "large", color: "black" }}>
                  Randomized meal plan{" "}
                </b>
                : there
                <br /> Variation of the plan and the sum
                <br /> will be accurate etc.{" "}
              </p>
            </Row>
            <Row>
              {/* <i class="fa fa-check-circle" aria-hidden="true"></i> */}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#74cf4e" }}
              />
              <p>
                {" "}
                <b style={{ fontSize: "large", color: "black" }}>
                  Randomized meal plan{" "}
                </b>
                : there
                <br /> Variation of the plan and the sum
                <br /> will be accurate etc.{" "}
              </p>
            </Row>

            <Button
              //   type="primary"
              shape="round"
              icon={<DownloadOutlined />}
              size="large"
              style={{
                marginLeft: "46px",
                backgroundColor: "#74cf4e",
                color: "white",
              }}
              id="Gold"
              value="Gold"
              onClick={choosePlan}
            >
              Subscribe
            </Button>
          </Card>
          <Card hoverable style={{ width: 302, height: "550px" }}>
            <p
              style={{
                textAlign: "center",
                color: "green",
                fontSize: "20px",
                margin: " 0",
              }}
            >
              {" "}
              Silver{" "}
            </p>
            <img
              alt="example"
              src="./images/Silver-Icon.jpg"
              style={{ maxWidth: "42%", margin: "auto" }}
            />
            {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
            <p style={{ textAlign: "center" }}>
              <sup style={{ top: "-2.5em" }}>$</sup>
              <b style={{ fontSize: "40px" }}>40</b>/month
            </p>
            <Row>
              {/* <i class="fa fa-check-circle" aria-hidden="true"></i> */}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#74cf4e" }}
              />
              <p>
                {" "}
                <b style={{ fontSize: "large", color: "black" }}>
                  Randomized meal plan{" "}
                </b>
                : there
                <br /> Variation of the plan and the sum
                <br /> will be accurate etc.{" "}
              </p>
            </Row>
            <Row>
              {/* <i class="fa fa-check-circle" aria-hidden="true"></i> */}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#74cf4e" }}
              />
              <p>
                {" "}
                <b style={{ fontSize: "large", color: "black" }}>
                  Randomized meal plan{" "}
                </b>
                : there
                <br /> Variation of the plan and the sum
                <br /> will be accurate etc.{" "}
              </p>
            </Row>
            <Row>
              {/* <i class="fa fa-check-circle" aria-hidden="true"></i> */}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#74cf4e" }}
              />
              <p>
                {" "}
                <b style={{ fontSize: "large", color: "black" }}>
                  Randomized meal plan{" "}
                </b>
                : there
                <br /> Variation of the plan and the sum
                <br /> will be accurate etc.{" "}
              </p>
            </Row>

            <Button
              //   type="primary"
              shape="round"
              icon={<DownloadOutlined />}
              size="large"
              style={{
                marginLeft: "46px",
                backgroundColor: "#74cf4e",
                color: "white",
              }}
              id="Diamond"
              value="Diamond"
              onClick={choosePlan}
            >
              Subscribe
            </Button>
          </Card>
        </Row>
      </UserLayout>
    </div>
  );
}

const mapStateToProps = (state) => ({
  planType: state.PlanType,
});

export default connect(mapStateToProps, { postPlan })(Subscription);
