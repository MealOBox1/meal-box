// import React from "react";
// import { Layout, Avatar, Menu, Button, Row, Col, Carousel, Icon } from "antd";
// import {
//   FacebookOutlined,
//   TwitterOutlined,
//   InstagramOutlined,
// } from "@ant-design/icons";
// const { Header, Slider, Content } = Layout;
// import Title from "antd/lib/typography/Title";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
// import CarouselComponent from "../components/CarouselComponent";
// import GoogleMap from "../components/googleMap";
// import ContactUs from "../components/ContactUs";
// import Footer from "../components/footer";
// import store from "../store";
// // import "../styles/home.less";

// export default function home(props) {
//   console.log(props);
//   return (
//     <>
//       <Layout className="layout">
//         <Header>
//           <div className="logo">
//             <img style={{ borderRadius: "4px" }} src="./images/logo2.jpeg" />
//           </div>
//           <Menu
//             style={{
//               float: "right",
//               backgroundColor: "transparent !important",
//               color: "#d8d8d8",
//             }}
//             mode="horizontal"
//             defaultSelectedKeys={["1"]}
//           >
//             <Menu.Item key="1" className="customclass">
//               Home
//             </Menu.Item>
//             <Menu.Item key="2" className="customclass">
//               OUR FOOD
//             </Menu.Item>
//             <Menu.Item key="3" className="customclass">
//               PLANS
//             </Menu.Item>
//             <Menu.Item>
//               <Button
//                 style={{
//                   borderRadius: "12px",
//                   backgroundColor: "#74cf4e",
//                   color: "white",
//                 }}
//                 // type="sucess"
//                 // icon={<DownloadOutlined />}
//               >
//                 Signup / login
//               </Button>
//             </Menu.Item>
//           </Menu>
//         </Header>
//         <Row className="headerBg" gutter={[16, 24]}>
//           <Col className="gutter-row" span={13} style={{ marginTop: "112px" }}>
//             <Row style={{ marginLeft: "162px" }}>
//               {" "}
//               <Col className="gutter-row" span={10}>
//                 <img src="./images/leaf.png" style={{ width: "11%" }} />
//               </Col>
//               <Col className="gutter-row" span={14}>
//                 <img
//                   src="./images/chilli.png"
//                   style={{ marginLeft: "227px", width: "7%" }}
//                 />
//               </Col>
//             </Row>

//             <div>
//               <h1
//                 style={{
//                   fontSize: "60px",
//                   textAlign: "center",
//                   marginBottom: 0,
//                 }}
//               >
//                 Have No time
//                 <br /> to prepare <span style={{ color: "#74cf4e" }}>
//                   food
//                 </span>{" "}
//                 ?
//               </h1>
//             </div>
//             <Col style={{ padding: "0", marginLeft: "146px" }}>
//               Choose one of our plans, enter delivery time <br /> and enjoy
//               delicious food without leaving your place!
//             </Col>
//             <Row style={{ marginLeft: "139px", marginTop: "20px" }}>
//               {" "}
//               <Col span={10}>
//                 <Button
//                   type="primary"
//                   shape="round"
//                   style={{ backgroundColor: "#74cf4e", border: 0 }}
//                 >
//                   <a href="./Subscription"> Subscribe Food</a>
//                 </Button>
//               </Col>
//               <Col span={14}>
//                 <img
//                   src="./images/leaf.png"
//                   style={{ marginLeft: "291px", width: "8%" }}
//                 />
//               </Col>
//             </Row>
//             <Col>
//               <img src="./images/tomato.png" style={{ width: "6%" }} />
//             </Col>
//             <Row style={{ marginLeft: "140px" }}>
//               <Col style={{ marginLeft: "7px" }}>
//                 <TwitterOutlined />
//               </Col>
//               <Col style={{ marginLeft: "7px" }}>
//                 <InstagramOutlined />
//               </Col>
//               <Col style={{ marginLeft: "7px" }}>
//                 <FacebookOutlined />
//               </Col>
//             </Row>
//           </Col>
//           <Col className="gutter-row" span={11}>
//             {" "}
//             <img
//               style={{ filter: "brightness(74%)" }}
//               src="./images/headerBg.png"
//             />
//           </Col>
//         </Row>
//       </Layout>
//       <Layout style={{ height: "314px" }}>
//         <Row
//           gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
//           style={{ marginRight: "0px", marginLeft: 0 }}
//         >
//           <Col
//             span={12}
//             style={{ textAlign: "-webkit-right", marginLeft: "65px" }}
//             className="gutter-row"
//           >
//             <h1 style={{ borderBottom: "2px solid #74cf4e", width: "163px" }}>
//               What we Do
//             </h1>
//           </Col>
//         </Row>
//         <Row
//           style={{ marginLeft: "151px", marginRight: 0, marginTop: "37px" }}
//           gutter={{ xs: 24, sm: 24, md: 24, lg: 32 }}
//         >
//           <Col span={8} className="gutter-row">
//             <Layout
//               style={{
//                 position: "absolute",
//                 zIndex: 1,
//                 backgroundColor: "transparent",
//                 marginTop: "25px",
//               }}
//             >
//               <Col className="gutter-row">
//                 <img
//                   src="./images/food.png"
//                   style={{ width: "30%", marginLeft: "35px" }}
//                 />
//               </Col>
//               <Col className="gutter-row">
//                 <h4>Healthy Food</h4>
//               </Col>
//               <Col
//                 className="gutter-row"
//                 style={{ paddingLeft: 0, width: "174px" }}
//               >
//                 <p style={{ fontSize: "12px" }}>
//                   Food is tested on the basis of hygiene and taste both.
//                   Packaging and freshness of food is maintained
//                 </p>
//               </Col>
//             </Layout>
//             <Layout>
//               <div className="triangle"></div>
//             </Layout>
//           </Col>
//           <Col span={8} className="gutter-row">
//             <Layout
//               style={{
//                 position: "absolute",
//                 zIndex: 1,
//                 backgroundColor: "transparent",
//                 marginTop: "25px",
//               }}
//             >
//               <Col className="gutter-row">
//                 <img
//                   src="./images/food.png"
//                   style={{ width: "30%", marginLeft: "35px" }}
//                 />
//               </Col>
//               <Col className="gutter-row">
//                 <h4>Healthy Food</h4>
//               </Col>
//               <Col
//                 className="gutter-row"
//                 style={{ paddingLeft: 0, width: "174px" }}
//               >
//                 <p style={{ fontSize: "12px" }}>
//                   Food is tested on the basis of hygiene and taste both.
//                   Packaging and freshness of food is maintained
//                 </p>
//               </Col>
//             </Layout>
//             <Layout>
//               <div className="triangle"></div>
//             </Layout>
//           </Col>
//           <Col span={8} className="gutter-row">
//             <Layout
//               style={{
//                 position: "absolute",
//                 zIndex: 1,
//                 backgroundColor: "transparent",
//                 marginTop: "25px",
//               }}
//             >
//               <Col className="gutter-row">
//                 <img
//                   src="./images/food.png"
//                   style={{ width: "30%", marginLeft: "35px" }}
//                 />
//               </Col>
//               <Col className="gutter-row">
//                 <h4>Healthy Food</h4>
//               </Col>
//               <Col
//                 className="gutter-row"
//                 style={{ paddingLeft: 0, width: "174px" }}
//               >
//                 <p style={{ fontSize: "12px" }}>
//                   Food is tested on the basis of hygiene and taste both.
//                   Packaging and freshness of food is maintained
//                 </p>
//               </Col>
//             </Layout>
//             <Layout>
//               <div className="triangle"></div>
//             </Layout>
//           </Col>
//         </Row>
//       </Layout>
//       <Layout>
//         <Row style={{ marginTop: "200px" }}>
//           <Col span={12}>
//             <img
//               src="./images/plate.jpg"
//               style={{
//                 width: "676px",
//                 borderBottomRightRadius: " 126px",
//                 borderTopRightRadius: "126px",
//               }}
//             />
//           </Col>
//           <Col span={12}>
//             <Row>
//               <Col
//                 style={{
//                   position: "relative",
//                   zIndex: 1,
//                   backgroundColor: "transparent",
//                   marginLeft: "106px",
//                   marginTop: "80px",
//                 }}
//               >
//                 <Layout>
//                   <Col>
//                     <h1
//                       className="plans"
//                       style={{
//                         fontSize: "38px",
//                         // borderBottom: "2px solid #74cf4e",
//                         // borderBottomWidth: " 2px",
//                       }}
//                     >
//                       How easy is it
//                     </h1>
//                     {/* <hr /> */}
//                   </Col>
//                   <Col>
//                     <Row>
//                       <Col>
//                         <FontAwesomeIcon
//                           icon={faPlusCircle}
//                           style={{
//                             color: "#74cf4e",
//                             /* width: 151%; */
//                             width: "26px",
//                             height: "30px",
//                           }}
//                         />
//                       </Col>
//                       <Col style={{ marginLeft: "18px" }}>
//                         <h3 style={{ marginBottom: 0 }}>Choose meal</h3>
//                         <p style={{ fontSize: "12px" }}>
//                           Select from a variety of range with just one click
//                         </p>
//                       </Col>
//                     </Row>
//                     <Row>
//                       <Col>
//                         <FontAwesomeIcon
//                           icon={faPlusCircle}
//                           style={{
//                             color: "#74cf4e",
//                             /* width: 151%; */
//                             width: "26px",
//                             height: "30px",
//                           }}
//                         />
//                       </Col>
//                       <Col style={{ marginLeft: "18px" }}>
//                         <h3 style={{ marginBottom: 0 }}>Subscribe a Plan</h3>
//                         <p style={{ fontSize: "12px" }}>
//                           Choose your best timing when you want your
//                           <br /> food to arrive you
//                         </p>
//                       </Col>
//                     </Row>
//                     <Row>
//                       <Col>
//                         <FontAwesomeIcon
//                           icon={faPlusCircle}
//                           style={{
//                             color: "#74cf4e",
//                             /* width: 151%; */
//                             width: "26px",
//                             height: "30px",
//                           }}
//                         />
//                       </Col>
//                       <Col style={{ marginLeft: "18px" }}>
//                         <h3 style={{ marginBottom: 0 }}>Get your MealBox</h3>
//                         <p style={{ fontSize: "12px" }}>
//                           Enter your order details and track yiur order easily
//                           <br />
//                           with our effective tracking system
//                         </p>
//                       </Col>
//                     </Row>
//                     <Row style={{ marginTop: "15px" }}>
//                       <Button
//                         type="primary"
//                         shape="round"
//                         style={{ backgroundColor: "#74cf4e", border: 0 }}
//                       >
//                         Order Food
//                       </Button>
//                     </Row>
//                   </Col>
//                 </Layout>
//               </Col>
//               <Col
//                 style={{
//                   position: "absolute",
//                   zIndex: 2,
//                   opacity: 0.2,
//                   width: " 689px",
//                   height: "707px",
//                 }}
//               >
//                 <img className="plansBg" src="./images/thali.png" />
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//       </Layout>
//       <Layout style={{ backgroundColor: "transparent" }}>
//         <Row style={{ marginTop: "111px", marginLeft: "40%" }}>
//           <h1 className="plans">Homechefs & Kitchens</h1>
//         </Row>

//         <Row style={{ marginTop: "60px" }}>
//           <Col
//             span={5}
//             style={{
//               zIndex: -1,

//               width: " 800px",
//               height: "50px",
//               position: "relative",
//               marginTop: "250px",
//             }}
//           >
//             <img
//               style={{
//                 width: "619px",
//                 height: "755px",
//                 position: "absolute",
//                 left: "-34px",
//               }}
//               // className="leafBg"
//               src="./images/leafBg.png"
//             />
//           </Col>

//           <Col
//             span={5}
//             style={{
//               position: "relative",
//               zIndex: 1,
//               backgroundColor: "transparent",
//             }}
//           >
//             <div className="chef1" id="ch1"></div>
//             <div className="chef1" id="ch2"></div>
//             <div className="chef1" id="ch3"></div>
//           </Col>

//           <Col
//             span={14}
//             style={{ zIndex: 1, marginLeft: "-171px", marginTop: "93px" }}
//           >
//             {" "}
//             <CarouselComponent />
//           </Col>
//         </Row>
//       </Layout>
//       <Layout>
//         <Row id="flexiblePackage">
//           <h1 className="plans">In the most flexible package</h1>
//         </Row>
//         <Row
//           style={{ marginLeft: "122px", marginRight: 0, marginTop: "100px" }}
//           gutter={{ xs: 24, sm: 24, md: 24, lg: 32 }}
//         >
//           <Col span={6} className="gutter-row">
//             <Layout
//               style={{
//                 position: "absolute",
//                 zIndex: 1,
//                 backgroundColor: "transparent",
//                 marginTop: "25px",
//               }}
//             >
//               <Col className="gutter-row">
//                 <img
//                   src="./images/hotel.png"
//                   style={{ width: "51%", marginLeft: "-10px" }}
//                 />
//               </Col>
//               <Col className="gutter-row">
//                 <h4 style={{ marginLeft: "-39px", marginTop: "20px" }}>
//                   Healthy Food
//                 </h4>
//               </Col>
//             </Layout>
//             <Layout>
//               <div className="triangle2"></div>
//             </Layout>
//           </Col>
//           <Col span={6} className="gutter-row">
//             <Layout
//               style={{
//                 position: "absolute",
//                 zIndex: 1,
//                 backgroundColor: "transparent",
//                 marginTop: "25px",
//               }}
//             >
//               <Col className="gutter-row">
//                 <img
//                   src="./images/spa.png"
//                   style={{ width: "51%", marginLeft: "-18px" }}
//                 />
//               </Col>
//               <Col className="gutter-row">
//                 <h4 style={{ marginLeft: "-39px", marginTop: "20px" }}>
//                   Healthy Food
//                 </h4>
//               </Col>
//             </Layout>
//             <Layout>
//               <div className="triangle2"></div>
//             </Layout>
//           </Col>
//           <Col span={6} className="gutter-row">
//             <Layout
//               style={{
//                 position: "absolute",
//                 zIndex: 1,
//                 backgroundColor: "transparent",
//                 marginTop: "25px",
//               }}
//             >
//               <Col className="gutter-row">
//                 <img
//                   src="./images/food.png"
//                   style={{ width: "51%", marginLeft: "-18px" }}
//                 />
//               </Col>
//               <Col className="gutter-row">
//                 <h4 style={{ marginLeft: "-39px", marginTop: "20px" }}>
//                   Healthy Food
//                 </h4>
//               </Col>
//             </Layout>
//             <Layout>
//               <div className="triangle2"></div>
//             </Layout>
//           </Col>
//           <Col span={6} className="gutter-row">
//             <Layout
//               style={{
//                 position: "absolute",
//                 zIndex: 1,
//                 backgroundColor: "transparent",
//                 marginTop: "25px",
//               }}
//             >
//               <Col className="gutter-row">
//                 <img
//                   src="./images/food.png"
//                   style={{ width: "51%", marginLeft: "-18px" }}
//                 />
//               </Col>
//               <Col className="gutter-row">
//                 <h4 style={{ marginLeft: "-39px", marginTop: "20px" }}>
//                   Healthy Food
//                 </h4>
//               </Col>
//             </Layout>
//             <Layout>
//               <div className="triangle2"></div>
//             </Layout>
//             <img
//               src="./images/leafBg2.png"
//               style={{
//                 zIndex: -1,
//                 /* left: -41px; */
//                 marginLeft: "141px",
//                 height: "400px",
//                 marginTop: "-114px",
//               }}
//             />
//           </Col>
//           {/* <Col span={3}>

//           </Col> */}
//         </Row>
//       </Layout>
//       <Layout style={{ position: "relative", height: "813px" }}>
//         <Row>
//           <Row style={{ width: "-webkit-fill-available" }}>
//             <h1 className="plans" style={{ marginLeft: "93px" }}>
//               Contact us
//             </h1>
//           </Row>
//           <Row className="formBg">
//             <ContactUs />
//           </Row>
//         </Row>
//         <Row
//           style={{
//             position: "relative",
//             height: "500px",
//             zIndex: -1,
//             top: "-278px",
//           }}
//         >
//           <GoogleMap style={{ position: "absolute" }} />
//         </Row>
//       </Layout>
//       <Footer />
//     </>
//   );
// }

import React from "react";
import { Layout, Avatar, Menu, Button, Row, Col, Carousel, Icon } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
const { Header, Slider, Content } = Layout;
import Title from "antd/lib/typography/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import CarouselComponent from "../components/CarouselComponent";
import GoogleMap from "../components/googleMap";
import ContactUs from "../components/ContactUs";
import Footer from "../components/footer";
import Bgform from "../public/static/Form.png"
import "../styles/home.css";
import  styled from "styled-components"

export default function home() {
const Raw=styled(Row)`
background-image: url(${Bgform}); 
width: 456px;
height: 425px;
border-radius: 35px 35px 35px 35px;
background-size: 470px;
background-repeat: no-repeat;
background-position: center;
margin-left: 45px;


`

  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo">
            <img style={{ borderRadius: "4px" }} src="./images/logo2.jpeg" />
          </div>
          <Menu
            style={{
              float: "right",
              backgroundColor: "transparent !important",
              color: "#d8d8d8",
            }}
            mode="horizontal"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1" className="customclass">
              Home
            </Menu.Item>
            <Menu.Item key="2" className="customclass">
              OUR FOOD
            </Menu.Item>
            <Menu.Item key="3" className="customclass">
              PLANS
            </Menu.Item>
            <Menu.Item>
              <Button
                style={{
                  borderRadius: "12px",
                  backgroundColor: "#74cf4e",
                  color: "white",
                }}
                // type="sucess"
                // icon={<DownloadOutlined />}
              >
                Signup / login
              </Button>
            </Menu.Item>
          </Menu>
        </Header>
        <Row  gutter={[16, 24]}>
          <Col className="gutter-row" span={13} style={{ marginTop: "112px" }}>
            <Row style={{ marginLeft: "162px" }}>
              {" "}
              <Col className="gutter-row" span={10}>
                <img src="./images/leaf.png" style={{ width: "11%" }} />
              </Col>
              <Col className="gutter-row" span={14}>
                <img
                  src="./images/chilli.png"
                  style={{ marginLeft: "227px", width: "7%" }}
                />
              </Col>
            </Row>

            <div>
              <h1
                style={{
                  fontSize: "60px",
                  textAlign: "center",
                  marginBottom: 0,
                }}
              >
                Have No time
                <br /> to prepare <span style={{ color: "#74cf4e" }}>
                  food
                </span>{" "}
                ?
              </h1>
            </div>
            <Col style={{ padding: "0", marginLeft: "296px" }}>
              Choose one of our plans, enter delivery time <br /> and enjoy
              delicious food without leaving your place!
            </Col>
            <Row style={{ marginLeft: "297px", marginTop: "20px" }}>
              {" "}
              <Col span={10}>
                <Button
                  type="primary"
                  shape="round"
                  style={{ backgroundColor: "#74cf4e", border: 0 }}
                >
                  Subscribe Food
                </Button>
              </Col>
              <Col span={14}>
                <img
                  src="./images/leaf.png"
                  style={{ marginLeft: "291px", width: "8%" }}
                />
              </Col>
            </Row>
            <Col>
              <img src="./images/tomato.png" style={{ width: "6%" }} />
            </Col>
            <Row style={{ marginLeft: "140px" }}>
              <Col style={{ marginLeft: "7px" }}>
                <TwitterOutlined />
              </Col>
              <Col style={{ marginLeft: "7px" }}>
                <InstagramOutlined />
              </Col>
              <Col style={{ marginLeft: "7px" }}>
                <FacebookOutlined />
              </Col>
            </Row>
          </Col>
          <Col className="gutter-row Header" span={11}>
            {" "}
            <img className="headerBg"
              style={{ filter: "brightness(74%)" }}
              src="./images/headerBg.png"
            />
          </Col>
        </Row>
      </Layout>
      <Layout style={{ height: "314px" }}>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ marginRight: "0px", marginLeft: 0 }}
        >
          <Col
            span={12}
            style={{ textAlign: "-webkit-right", marginLeft: "65px" ,textAlign:" -moz-right"}}
            className="gutter-row"
          >
            <h1 style={{ borderBottom: "2px solid #74cf4e", width: "166px" }}>
              What we Do
            </h1>
          </Col>
        </Row>
        <Row
          style={{ marginLeft: "272px", marginRight: 0, marginTop: "37px" }}
          gutter={{ xs: 24, sm: 24, md: 24, lg: 32 }}
        >
          <Col span={8} className="gutter-row">
            <Layout
              style={{
                position: "absolute",
                zIndex: 1,
                backgroundColor: "transparent",
                marginTop: "10px",
              }}
            >
              <Col className="gutter-row">
                <img
                  src="./images/food.png"
                  style={{ width: "30%", marginLeft: "35px" }}
                />
              </Col>
              <Col className="gutter-row">
                <h4>Healthy Food</h4>
              </Col>
              <Col
                className="gutter-row"
                style={{ paddingLeft: 0, width: "174px" }}
              >
                <p style={{ fontSize: "12px" }}>
                  Food is tested on the basis of hygiene and taste both.
                  Packaging and freshness of food is maintained
                </p>
              </Col>
            </Layout>
            <Layout>
              <div className="triangle"></div>
            </Layout>
          </Col>
          <Col span={8} className="gutter-row">
            <Layout
              style={{
                position: "absolute",
                zIndex: 1,
                backgroundColor: "transparent",
                marginTop: "10px",
              }}
            >
              <Col className="gutter-row">
                <img
                  src="./images/boiling.png"
                  style={{ width: "30%", marginLeft: "35px" }}
                />
              </Col>
              <Col className="gutter-row">
                <h4>Homecooked</h4>
              </Col>
              <Col
                className="gutter-row"
                style={{ paddingLeft: 0, width: "174px" }}
              >
                <p style={{ fontSize: "12px" }}>
                  Collaboration with home cooks and provide platform to start
                  their service near by area.
                </p>
              </Col>
            </Layout>
            <Layout>
              <div className="triangle"></div>
            </Layout>
          </Col>
          <Col span={8} className="gutter-row">
            <Layout
              style={{
                position: "absolute",
                zIndex: 1,
                backgroundColor: "transparent",
                marginTop: "10px",
              }}
            >
              <Col className="gutter-row">
                <img
                  src="./images/food-delivery.png"
                  style={{ width: "30%", marginLeft: "35px" }}
                />
              </Col>
              <Col className="gutter-row">
                <h4 style={{marginBottom: 0,
fontSize: "15px"}}>
                  Customized</h4>
                  {/* <br /> */}
                 <h4 style={{marginBottom: 0,
fontSize: "15px"}}> delivery
                </h4>
              </Col>
              <Col
                className="gutter-row"
                style={{ paddingLeft: 0, width: "174px" }}
              >
                <p style={{ fontSize: "12px" }}>
                  Pre-shedule delivery option and easy cancellation Available
                  easy re-ordering and bulk order option.
                </p>
              </Col>
            </Layout>
            <Layout>
              <div className="triangle"></div>
            </Layout>
          </Col>
        </Row>
      </Layout>
      <Layout>
        <Row style={{ marginTop: "200px" }}>
          <Col span={12}>
            <img
              src="./images/plate.jpg"
              style={{
                width: "676px",
                borderBottomRightRadius: " 126px",
                borderTopRightRadius: "126px",
              }}
            />
          </Col>
          <Col span={12}>
            <Row>
              <Col
                style={{
                  position: "relative",
                  zIndex: 1,
                  backgroundColor: "transparent",
                  marginLeft: "106px",
                  marginTop: "80px",
                }}
              >
                <Layout >
                  <Col >
                    <h1
                      className="plans"
                      style={{
                        fontSize: "38px",
                        // borderBottom: "2px solid #74cf4e",
                        // borderBottomWidth: " 2px",
                      }}
                    >
                      How easy is it
                    </h1>
                    {/* <hr /> */}
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <FontAwesomeIcon
                          icon={faPlusCircle}
                          style={{
                            color: "#74cf4e",
                            /* width: 151%; */
                            width: "26px",
                            height: "30px",
                          }}
                        />
                      </Col>
                      <Col style={{ marginLeft: "18px" }}>
                        <h3 style={{ marginBottom: 0 }}>Choose meal</h3>
                        <p style={{ fontSize: "12px" }}>
                          Select from a variety of range with just one click
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FontAwesomeIcon
                          icon={faPlusCircle}
                          style={{
                            color: "#74cf4e",
                            /* width: 151%; */
                            width: "26px",
                            height: "30px",
                          }}
                        />
                      </Col>
                      <Col style={{ marginLeft: "18px" }}>
                        <h3 style={{ marginBottom: 0 }}>Subscribe a Plan</h3>
                        <p style={{ fontSize: "12px" }}>
                          Choose your best timing when you want your
                          <br /> food to arrive you
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FontAwesomeIcon
                          icon={faPlusCircle}
                          style={{
                            color: "#74cf4e",
                            /* width: 151%; */
                            width: "26px",
                            height: "30px",
                          }}
                        />
                      </Col>
                      <Col style={{ marginLeft: "18px" }}>
                        <h3 style={{ marginBottom: 0 }}>Get your MealBox</h3>
                        <p style={{ fontSize: "12px" }}>
                          Enter your order details and track yiur order easily
                          <br />
                          with our effective tracking system
                        </p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "15px" }}>
                      <Button
                        type="primary"
                        shape="round"
                        style={{ backgroundColor: "#74cf4e", border: 0 }}
                      >
                        Order Food
                      </Button>
                    </Row>
                  </Col>
                </Layout>
              </Col>
              <Col
                style={{
                  position: "absolute",
                  zIndex: 2,
                  opacity: 0.2,
                  width: " 689px",
                  height: "707px",
                }}
              >
                <img className="plansBg" src="./images/thali.png" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout>
      <Layout style={{ backgroundColor: "transparent" }}>
        <Row style={{ marginTop: "111px", marginLeft: "40%" }}>
          <h1 className="plans">Homechefs & Kitchens</h1>
        </Row>

        <Row style={{ marginTop: "60px" }}>
          <Col
            span={5}
            style={{
              zIndex: -1,

              width: " 800px",
              height: "50px",
              position: "relative",
              marginTop: "250px",
            }}
          >
            <img
              style={{
                width: "619px",
                height: "755px",
                position: "absolute",
                left: "-34px",
              }}
              // className="leafBg"
              src="./images/leafBg.png"
            />
          </Col>

          <Col
            span={5}
            style={{
              position: "relative",
              zIndex: 1,
              backgroundColor: "transparent",
            }}
          >
            <div className="chef1" id="ch1"></div>
            <div className="chef1" id="ch2"></div>
            <div className="chef1" id="ch3"></div>
          </Col>

          <Col
            span={14}
            style={{ zIndex: 1, marginLeft: "-171px", marginTop: "93px" }}
          >
            {" "}
            <CarouselComponent />
          </Col>
        </Row>
      </Layout>
      <Layout>
        <Row id="flexiblePackage">
          <h1 className="plans">In the most flexible package</h1>
        </Row>
        <Row
          style={{ marginLeft: "122px", marginRight: 0, marginTop: "100px" }}
          gutter={{ xs: 24, sm: 24, md: 24, lg: 32 }}
        >
          <Col span={6} className="gutter-row">
            <Layout
              style={{
                position: "absolute",
                zIndex: 1,
                backgroundColor: "transparent",
                marginTop: "25px",
              }}
            >
              <Col className="gutter-row">
                <img
                  src="./images/hotel.png"
                  style={{ width: "51%", marginLeft: "0px" }}
                />
              </Col>
              <Col className="gutter-row" style={{ textAlign: "center" }}>
                <h4 style={{ marginLeft: "-50px", marginTop: "20px" }}>
                  Weeknd Off
                </h4>
              </Col>
            </Layout>
            <Layout>
              <div className="triangle2"></div>
            </Layout>
          </Col>
          <Col span={6} className="gutter-row">
            <Layout
              style={{
                position: "absolute",
                zIndex: 1,
                backgroundColor: "transparent",
                marginTop: "25px",
              }}
            >
              <Col className="gutter-row">
                <img
                  src="./images/spa.png"
                  style={{ width: "51%", marginLeft: "0px" }}
                />
              </Col>
              <Col className="gutter-row" style={{ textAlign: "center" }}>
                <h4 style={{ marginLeft: "-50px", marginTop: "20px" }}>
                  Swap Meal
                </h4>
              </Col>
            </Layout>
            <Layout>
              <div className="triangle2"></div>
            </Layout>
          </Col>
          <Col span={6} className="gutter-row">
            <Layout
              style={{
                position: "absolute",
                zIndex: 1,
                backgroundColor: "transparent",
                marginTop: "25px",
              }}
            >
              <Col className="gutter-row">
                <img
                  src="./images/breakfast.png"
                  style={{ width: "51%", marginLeft: "0px" }}
                />
              </Col>
              <Col className="gutter-row" style={{ textAlign: "center" }}>
                <h4 style={{ marginLeft: "-50px", marginTop: "20px" }}>
                  Skip Meal
                </h4>
              </Col>
            </Layout>
            <Layout>
              <div className="triangle2"></div>
            </Layout>
          </Col>
          <Col span={6} className="gutter-row">
            <Layout
              style={{
                position: "absolute",
                zIndex: 1,
                backgroundColor: "transparent",
                marginTop: "25px",
              }}
            >
              <Col className="gutter-row">
                <img
                  src="./images/reception.png"
                  style={{ width: "51%", marginLeft: "0px" }}
                />
              </Col>
              <Col className="gutter-row" style={{ textAlign: "center" }}>
                <h4 style={{ marginLeft: "-50px", marginTop: "20px" }}>
                  Pause Meal
                </h4>
              </Col>
            </Layout>
            <Layout>
              <div className="triangle2"></div>
            </Layout>
            <img
              src="./images/leafBg2.png"
              style={{
                zIndex: -1,
                /* left: -41px; */
                marginLeft: "141px",
                height: "400px",
                marginTop: "-114px",
              }}
            />
          </Col>
          {/* <Col span={3}>
            
          </Col> */}
        </Row>
      </Layout>
      <Layout style={{ position: "relative", height: "813px" }}>
        <Row style={{display:"block"}}>
          <Row style={{ width: "-webkit-fill-available" }}>
            <h1 className="plans" style={{ marginLeft: "93px" }}>
              Contact us
            </h1>
          </Row>
          <Raw >
            <ContactUs />
          </Raw>
        </Row>
        <Row
          style={{
            position: "relative",
            height: "500px",
            zIndex: -1,
            top: "-278px",
          }}
        >
          <GoogleMap style={{ position: "absolute" }} />
        </Row>
      </Layout>
      <Footer />
    </>
  );
}
