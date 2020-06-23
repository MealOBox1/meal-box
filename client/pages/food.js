import React, { useEffect, useState } from "react";
import { Avatar, Row, Col, Menu, Radio, Badge, Switch, Modal } from "antd";
import Router from "next/router";
import UserLayout from "./userlayout";
import { Card, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Styles from "../styles/food.module.css";
import { connect, useSelector } from "react-redux";
import Link from "next/link";
import { getItems } from "../Actions/ItemsAction";
import { Orderfood, Createcart } from "../Actions/OrderAction";
const { Meta } = Card;

function Food(props) {
  const [state, setState] = useState({ meals: "lunch", veg: "true" });
  const [modalProps, setmodalProps] = useState({
    loading: false,
    visible: false,
  });
  const [value, setvalue] = useState(1);
  const [foodId, setfoodId] = useState({
    id: "",
    subscriptionDays: 1,
  });

  const [cart, setcart] = useState({
    foodid: "",
    days: 3,
  });

  // const [List, setList] = useState(initialState)

  // useEffect(() => {
  //   const List = useSelector((state) => state);
  //   console.log(List);
  // });

  const showModal = () => {
    setmodalProps((prevState) => ({
      ...prevState,
      visible: true,
    }));
    setfoodId((prevState) => ({
      ...prevState,
      id: props.menu[0]._id,
    }));
    setcart((prevState) => ({
      ...prevState,
      foodid: props.menu[0]._id,
    }));
  };
  const List = useSelector((state) => state.order.cart);

  const handleOk = () => {
    setmodalProps((prevState) => ({ ...prevState, loading: true }));
    console.log(value);
    props.Createcart(cart);
    setTimeout(() => {
      setmodalProps((prevState) => ({
        ...prevState,
        loading: false,
        visible: false,
      }));
      console.log(foodId);
      // props.Orderfood(foodId);

      console.log(props.cart);
      console.log(List);
      // Router.push("/[shipping]", `/${List._id}`);
    }, 4000);
  };

  const handleCancel = () => {
    setmodalProps((prevState) => ({ ...prevState, visible: false }));
  };

  const handleChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      veg: event,
    }));
    console.log(state);
  };

  const handlemeal = (event) => {
    console.log(event.item.props.children[1].props.children);
    setState((prevState) => ({
      ...prevState,
      meals: event.item.props.children[1].props.children,
    }));
    // getItems(state);
  };

  useEffect(() => {
    console.log(state);
    props.getItems(state);
  }, [state]);

  const onchange = (e) => {
    console.log(e.target.value);

    setvalue(e.target.value);
    setfoodId((prevState) => ({
      ...prevState,
      subscriptionDays: value,
    }));
    setcart({
      ...cart,
      days: value,
    });
    console.log(value);
  };

  const selectedFood = (event) => {
    console.log(event.target);
  };

  return (
    <div>
      <UserLayout>
        <Row style={{ marginTop: "75px", justifyContent: "center" }}>
          <div className="site-card-border-less-wrapper">
            <Card style={{ borderLeft: "3px solid #74cf4e" }}>
              <h3>All Meals</h3>

              <Row
                style={{
                  flexDirection: "row",
                  width: "600px",
                  alignItems: "center",
                }}
              >
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
                <Switch
                  onClick={handleChange}
                  style={{
                    marginLeft: " 80px",
                    backgroundColor: "#74cf4e",
                    // width: " 77px",
                  }}
                  checkedChildren="veg"
                  unCheckedChildren="Non-veg"
                  defaultChecked
                />
              </Row>
              <Row>
                <Menu
                  mode="horizontal"
                  theme="Light"
                  // style={{ boxShadow: "1px 4px 6px #888888", borderRadius: " 30px" }}
                  defaultSelectedKeys={["2"]}
                >
                  <Menu.Item
                    key="1"
                    style={{ height: "58px" }}
                    onClick={handlemeal}
                  >
                    <p> Breakfast</p>
                  </Menu.Item>
                  <Menu.Item
                    key="2"
                    style={{ height: "58px" }}
                    onClick={handlemeal}
                  >
                    <p>lunch</p>
                  </Menu.Item>
                  <Menu.Item
                    key="3"
                    style={{ height: "58px" }}
                    onClick={handlemeal}
                  >
                    <p>dinner</p>
                  </Menu.Item>
                  <Menu.Item
                    key="4"
                    style={{ height: "58px" }}
                    onClick={handlemeal}
                  >
                    <p>Snacks</p>
                  </Menu.Item>
                </Menu>
              </Row>
              <Row
                style={{
                  //  justifyContent: "space-between",
                  width: "600px",
                  flexFlow: "row wrap",
                  marginTop: "10px",
                }}
              >
                {props.menu.map((el) => (
                  // <Link href="/posts/[fid]" as={`/posts/${el._id}`}>
                  <Card
                    onClick={showModal}
                    hoverable
                    className="Styles.antCardBody"
                    bodyStyle={{
                      padding: "0",
                      fontSize: "9px",
                    }}
                    style={{ width: 117, marginLeft: "20px" }}
                    cover={<img alt="example" src="./images/plate.jpg" />}
                    key={el._id}
                  >
                    <p>{el.menu}</p>
                    <p>Special 1 plate</p>
                  </Card>
                  // </Link>
                ))}
                {/* <Card
                  hoverable
                  className="Styles.antCardBody"
                  bodyStyle={{ padding: "0", fontSize: "9px" }}
                  style={{ width: 117 }}
                  cover={<img alt="example" src="./images/plate.jpg" />}
                >
                  <p>Roti,Daal,Rice</p>
                  <p>Special 1 plate</p>
                </Card>

                <Badge status="success">
                  <Card
                    hoverable
                    className="Styles.antCardBody"
                    bodyStyle={{ padding: "0", fontSize: "9px" }}
                    style={{ width: 117 }}
                    cover={<img alt="example" src="./images/plate.jpg" />}
                  >
                    {" "}
                    <p>Roti,Daal,Rice</p>
                    <p>Special 1 plate</p>
                  </Card>
                </Badge>
                <Card
                  hoverable
                  className="Styles.antCardBody"
                  bodyStyle={{ padding: "0", fontSize: "9px" }}
                  style={{ width: 117 }}
                  cover={<img alt="example" src="./images/plate.jpg" />}
                >
                  <p>Roti,Daal,Rice</p>
                  <p>Special 1 plate</p>
                </Card>
                <Card
                  hoverable
                  className="Styles.antCardBody"
                  bodyStyle={{ padding: "0", fontSize: "9px" }}
                  style={{ width: 117 }}
                  cover={<img alt="example" src="./images/plate.jpg" />}
                >
                  <p>Roti,Daal,Rice</p>
                  <p>Special 1 plate</p>
                </Card>
                <Card
                  hoverable
                  className="Styles.antCardBody"
                  bodyStyle={{ padding: "0", fontSize: "9px" }}
                  style={{ width: 117 }}
                  cover={<img alt="example" src="./images/plate.jpg" />}
                >
                  <p>Roti,Daal,Rice</p>
                  <p>Special 1 plate</p>
                </Card>
                <Card
                  hoverable
                  className="Styles.antCardBody"
                  bodyStyle={{ padding: "0", fontSize: "9px" }}
                  style={{ width: 117 }}
                  cover={<img alt="example" src="./images/plate.jpg" />}
                >
                  <p>Roti,Daal,Rice</p>
                  <p>Special 1 plate</p>
                </Card> */}
              </Row>
              {/* <Row style={{ marginTop: "12px" }}>
                <p>
                  <b style={{ marginRight: "7px" }}>Vender:</b>Naman
                </p>
              </Row> */}
              {/* <Orders /> */}
            </Card>
          </div>
        </Row>
        <Modal
          visible={modalProps.visible}
          // title="Title"
          style={{ padding: 0 }}
          bodyStyle={{ padding: 0 }}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
            <Button
              //   type="primary"
              shape="round"
              //icon={<DownloadOutlined />}
              size="large"
              style={{
                // marginLeft: "246px",
                marginTop: "39px",
                backgroundColor: "#74cf4e",
                color: "white",
              }}
              value="Silver"
              id="silver"
              //onClick={choosePlan}
              key="submit"
              type="primary"
              loading={modalProps.loading}
              onClick={handleOk}
            >
              Confirm
            </Button>,
          ]}
        >
          <div style={{ width: " 521px", height: "121px" }}>
            <img
              alt="example"
              src="./images/plate.jpg"
              style={{ height: "inherit", width: "520px", objectFit: "cover" }}
            />
          </div>
          <Row style={{ borderBottom: "1px solid #dfdddd" }}>
            <Col
              span={12}
              style={{
                borderRight: "1px solid #dfdddd",
                padding: "11px",
              }}
            >
              <h3>Roti,Daal & Rice</h3>
              <p>Special 1 Plate , 4 Roti</p>
            </Col>
            <Col
              span={12}
              style={{ padding: "11px", display: "flex", flexDirection: "row" }}
            >
              <div>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <h3>Jone Doe</h3>
                <p>Krishn food</p>
              </div>
            </Col>
          </Row>
          <Row style={{ flexDirection: " column", marginTop: "15px" }}>
            {/*   <div className="site-card-border-less-wrapper">
              <Card
                style={{ borderLeft: "3px solid #74cf4e", width: " 652px" }}
              > */}
            <h3 style={{ marginLeft: "15px" }}>Choose Subscription Plan</h3>
            <div style={{ marginLeft: "15px" }}>
              <Radio.Group onChange={onchange} value={value}>
                <Radio className={Styles.radioStyle} value={3}>
                  3 Days Subscription Plan
                </Radio>
                {value == 3 ? (
                  <Row>
                    <p>hi</p>
                  </Row>
                ) : null}
                <Radio className={Styles.radioStyle} value={6}>
                  6 Days Subscription Plan
                </Radio>
                <Radio className={Styles.radioStyle} value={14}>
                  14 Days Subscription Plan
                </Radio>
                <Radio className={Styles.radioStyle} value={28}>
                  28 Days Subscription Plan
                </Radio>
                {/* <Radio style={radioStyle} value={4}>
                    More...
                    {value === 4 ? (
                      <Input style={{ width: 100, marginLeft: 10 }} />
                    ) : null}
                  </Radio> */}
              </Radio.Group>
            </div>
            {/* <Button
              //   type="primary"
              shape="round"
              //icon={<DownloadOutlined />}
              size="large"
              style={{
                marginLeft: "246px",
                marginTop: "39px",
                backgroundColor: "#74cf4e",
                color: "white",
              }}
              value="Silver"
              id="silver"
              //onClick={choosePlan}
               key="submit"
              type="primary"
              loading={modalProps.loading}
              onClick={handleOk}
            >
              Confirm
            </Button> */}
            {/* </Card>
            </div> */}
          </Row>
          {/* <p>Some contents...</p>
          <p>Some contents...</p> */}
        </Modal>
      </UserLayout>
    </div>
  );
}

const mapStateToProps = (state) => ({
  menu: state.item.items,
  cart: state,
});
export default connect(mapStateToProps, { getItems, Orderfood, Createcart })(
  Food
);
