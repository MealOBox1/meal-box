import React, { useEffect, useState } from "react";
import UserLayout from "./userlayout";
import Head from "../components/Header/Head";
import { Row, Menu, Card, Button, Col } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { GetAddress } from "../Actions/ItemsAction";
import { OrderAddress, GetCart } from "../Actions/OrderAction";
import { plans } from "../Controllers/plans";
import Router from "next/router";

function shipping(props) {
  const router = useRouter();
  console.log(router.query);

  const [price, setprice] = useState(0);
  const [tax, settax] = useState(0);
  const [Total, setTotal] = useState(0);

  useEffect(() => {
    console.log("hiiiiiiiiii");
    props.GetCart(router.query.shipping);
    props.GetAddress();
  }, []);

  useEffect(() => {
    setprice(props.cart.price);
    console.log(price);
    settax((price * 20) / 100);
    setTotal(price + tax);
  });
  // if (price > 0) {
  //   settax((price * 20) / 100);
  //   setTotal(price + tax);
  // }

  const handleAddress = () => {
    props.OrderAddress(router.query.shipping, props.address[1]._id);
    Router.push("/payment");
  };
  console.log(props.cart);
  console.log(props.address[1]);

  return (
    <div>
      {/* <UserLayout>

      </UserLayout> */}
      <Head />
      <Row>
        <h1>Encrypted checkout</h1>
      </Row>
      <Row>
        <Col span={12}>
          <Menu
            mode="horizontal"
            // style={{ boxShadow: "1px 4px 6px #888888", borderRadius: " 30px" }}
            //defaultSelectedKeys={["2"]}
          >
            <Menu.Item
              key="1"
              style={{ height: "58px" }}
              //onClick={handlemeal}
            >
              <h3>
                {" "}
                <a>1. shipping info</a>
              </h3>
            </Menu.Item>
            <Menu.Item
              key="2"
              style={{ height: "58px" }}
              //onClick={handlemeal}
            >
              <a>2. payment info</a>
            </Menu.Item>
          </Menu>
        </Col>
        <Col style={{ borderBottom: "1px solid green", height: "42px" }}>
          <h3>Shopping Cart</h3>
        </Col>
      </Row>
      <Row>
        <Col span={10}>
          <Card
            style={{
              borderLeft: "3px solid #74cf4e",
              // marginLeft: "550px",
              marginTop: "20px",
              width: "56%",
              marginLeft: "10px",
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
                onClick={handleAddress}
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
                  marginLeft: "129px",
                }}
              >
                Edit
              </Button>
            </div>
          </Card>
        </Col>
        <Col style={{ marginLeft: "106px" }}>
          {/* <Card
            //onClick={showModal}
            hoverable
            // className="Styles.antCardBody"
            bodyStyle={{
              padding: "0",
              fontSize: "9px",
            }}
            style={{ width: 142, marginLeft: "20px" }}
            // coverStyle={{
            //   height: "85px",
            // }}
            cover={<img alt="example" src="./images/plate.jpg" />}
            //  key={el._id}
          >
            
            <p>Special 1 plate</p>
          </Card> */}
          <div>
            <img
              src="./images/plate.jpg"
              style={{
                objectFit: "cover",
                height: "48px",
                width: "234px",
              }}
            />
          </div>
          <div style={{ marginBottom: "7px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "233px",
                fontSize: "15px",
                height: "20px",
              }}
            >
              {props.cart.foodid ? <p>{props.cart.foodid.menu}</p> : null}

              <p>{props.cart.days} Days</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "233px",
                fontSize: "10px",
              }}
            >
              <p style={{ marginBottom: 0 }}>Special 1 plate , 4 roti</p>
              <p style={{ marginBottom: 0 }}>${props.cart.price} </p>
            </div>
          </div>
          <div>
            <Button
              type="primary"
              htmlType="submit"
              // shape="round"
              style={{
                backgroundColor: "#74cf4e",
                border: 0,
                // marginLeft: "134px",
                width: "233px",
              }}
            >
              Apply Promo code
            </Button>
            <hr></hr>
          </div>
          <div>
            <ul style={{ listStyle: "none", fontSize: "12px", padding: 0 }}>
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Subtotal</h4>
                <p>$ {props.cart.price}</p>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Taxes & Fares</h4>
                <p>${tax}</p>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Promo Code</h4>
                <p>$ 80</p>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Delivery</h4>
                <p>$ 80</p>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "14px",
                  fontSize: "27px",
                }}
              >
                <h4>Total</h4>
                <p>$ {Total}</p>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.order.cart,
  // food: state.order.cart.foodid,
  address: state.item.Address,
});

export default connect(mapStateToProps, { GetAddress, OrderAddress, GetCart })(
  shipping
);
