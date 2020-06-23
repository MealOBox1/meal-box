webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd_lib_typography_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/typography/Title */ "./node_modules/antd/lib/typography/Title.js");
/* harmony import */ var antd_lib_typography_Title__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_Title__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_CarouselComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CarouselComponent */ "./components/CarouselComponent.js");
/* harmony import */ var _components_googleMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/googleMap */ "./components/googleMap.js");
/* harmony import */ var _components_ContactUs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ContactUs */ "./components/ContactUs.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
var _jsxFileName = "E:\\nextjs-blog\\client\\pages\\home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
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



var Header = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Header,
    Slider = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Slider,
    Content = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Content;







function home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    className: "layout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 7
    }
  }, __jsx(Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 11
    }
  }, __jsx("img", {
    style: {
      borderRadius: "4px"
    },
    src: "./images/logo2.jpeg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    style: {
      "float": "right",
      backgroundColor: "transparent !important",
      color: "#d8d8d8"
    },
    mode: "horizontal",
    defaultSelectedKeys: ["1"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "1",
    className: "customclass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613,
      columnNumber: 13
    }
  }, "Home"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "2",
    className: "customclass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616,
      columnNumber: 13
    }
  }, "OUR FOOD"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "3",
    className: "customclass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619,
      columnNumber: 13
    }
  }, "PLANS"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      borderRadius: "12px",
      backgroundColor: "#74cf4e",
      color: "white"
    } // type="sucess"
    // icon={<DownloadOutlined />}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 15
    }
  }, "Signup / login")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "headerBg",
    gutter: [16, 24],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    span: 13,
    style: {
      marginTop: "112px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginLeft: "162px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639,
      columnNumber: 13
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    span: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 641,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "./images/leaf.png",
    style: {
      width: "11%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    span: 14,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "./images/chilli.png",
    style: {
      marginLeft: "227px",
      width: "7%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645,
      columnNumber: 17
    }
  }))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 13
    }
  }, __jsx("h1", {
    style: {
      fontSize: "60px",
      textAlign: "center",
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653,
      columnNumber: 15
    }
  }, "Have No time", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661,
      columnNumber: 17
    }
  }), " to prepare ", __jsx("span", {
    style: {
      color: "#74cf4e"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661,
      columnNumber: 35
    }
  }, "food"), " ", "?")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    style: {
      padding: "0",
      marginLeft: "146px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667,
      columnNumber: 13
    }
  }, "Choose one of our plans, enter delivery time ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668,
      columnNumber: 60
    }
  }), " and enjoy delicious food without leaving your place!"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginLeft: "139px",
      marginTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 13
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    shape: "round",
    style: {
      backgroundColor: "#74cf4e",
      border: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674,
      columnNumber: 17
    }
  }, "Subscribe Food")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 14,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "./images/leaf.png",
    style: {
      marginLeft: "291px",
      width: "8%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 17
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "./images/tomato.png",
    style: {
      width: "6%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginLeft: "140px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    style: {
      marginLeft: "7px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693,
      columnNumber: 15
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["TwitterOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    style: {
      marginLeft: "7px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 15
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["InstagramOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    style: {
      marginLeft: "7px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699,
      columnNumber: 15
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["FacebookOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 700,
      columnNumber: 17
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    span: 11,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704,
      columnNumber: 11
    }
  }, " ", __jsx("img", {
    style: {
      filter: "brightness(74%)"
    },
    src: "./images/headerBg.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706,
      columnNumber: 13
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    style: {
      height: "314px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: {
      xs: 8,
      sm: 16,
      md: 24,
      lg: 32
    },
    style: {
      marginRight: "0px",
      marginLeft: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 12,
    style: {
      textAlign: "-webkit-right",
      marginLeft: "65px"
    },
    className: "gutter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718,
      columnNumber: 11
    }
  }, __jsx("h1", {
    style: {
      borderBottom: "2px solid #74cf4e",
      width: "163px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 13
    }
  }, "What we Do"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginLeft: "151px",
      marginRight: 0,
      marginTop: "37px"
    },
    gutter: {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 32
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 8,
    className: "gutter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    style: {
      position: "absolute",
      zIndex: 1,
      backgroundColor: "transparent",
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "./images/food.png",
    style: {
      width: "30%",
      marginLeft: "35px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747,
      columnNumber: 15
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748,
      columnNumber: 17
    }
  }, "Healthy Food")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    style: {
      paddingLeft: 0,
      width: "174px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 750,
      columnNumber: 15
    }
  }, __jsx("p", {
    style: {
      fontSize: "12px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754,
      columnNumber: 17
    }
  }, "Food is tested on the basis of hygiene and taste both. Packaging and freshness of food is maintained"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 760,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "triangle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 8,
    className: "gutter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 764,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    style: {
      position: "absolute",
      zIndex: 1,
      backgroundColor: "transparent",
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 773,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "./images/boiling.png",
    style: {
      width: "30%",
      marginLeft: "35px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779,
      columnNumber: 15
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 780,
      columnNumber: 17
    }
  }, "Homecooked")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    style: {
      paddingLeft: 0,
      width: "174px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 782,
      columnNumber: 15
    }
  }, __jsx("p", {
    style: {
      fontSize: "12px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786,
      columnNumber: 17
    }
  }, "Collaboration with home cooks and provide platform to start their service near by area."))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 792,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "triangle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 8,
    className: "gutter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 796,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    style: {
      position: "absolute",
      zIndex: 1,
      backgroundColor: "transparent",
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 797,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 805,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "./images/delivery.jpg",
    style: {
      width: "30%",
      marginLeft: "35px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 806,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811,
      columnNumber: 15
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 812,
      columnNumber: 17
    }
  }, "Customized", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 814,
      columnNumber: 19
    }
  }), "delivery", " ")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    style: {
      paddingLeft: 0,
      width: "174px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 818,
      columnNumber: 15
    }
  }, __jsx("p", {
    style: {
      fontSize: "12px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 822,
      columnNumber: 17
    }
  }, "Pre-shedule delivery option and easy cancellation Available easy re-ordering and bulk order option."))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "triangle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 829,
      columnNumber: 15
    }
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 834,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginTop: "200px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 835,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 836,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "./images/plate.jpg",
    style: {
      width: "676px",
      borderBottomRightRadius: " 126px",
      borderTopRightRadius: "126px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 837,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 846,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    style: {
      position: "relative",
      zIndex: 1,
      backgroundColor: "transparent",
      marginLeft: "106px",
      marginTop: "80px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 848,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 857,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 858,
      columnNumber: 19
    }
  }, __jsx("h1", {
    className: "plans",
    style: {
      fontSize: "38px" // borderBottom: "2px solid #74cf4e",
      // borderBottomWidth: " 2px",

    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 859,
      columnNumber: 21
    }
  }, "How easy is it")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 871,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 872,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 873,
      columnNumber: 23
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPlusCircle"],
    style: {
      color: "#74cf4e",

      /* width: 151%; */
      width: "26px",
      height: "30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 874,
      columnNumber: 25
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    style: {
      marginLeft: "18px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 884,
      columnNumber: 23
    }
  }, __jsx("h3", {
    style: {
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 885,
      columnNumber: 25
    }
  }, "Choose meal"), __jsx("p", {
    style: {
      fontSize: "12px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 886,
      columnNumber: 25
    }
  }, "Select from a variety of range with just one click"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 891,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 892,
      columnNumber: 23
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPlusCircle"],
    style: {
      color: "#74cf4e",

      /* width: 151%; */
      width: "26px",
      height: "30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 893,
      columnNumber: 25
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    style: {
      marginLeft: "18px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 903,
      columnNumber: 23
    }
  }, __jsx("h3", {
    style: {
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 904,
      columnNumber: 25
    }
  }, "Subscribe a Plan"), __jsx("p", {
    style: {
      fontSize: "12px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 905,
      columnNumber: 25
    }
  }, "Choose your best timing when you want your", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 907,
      columnNumber: 27
    }
  }), " food to arrive you"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 911,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 912,
      columnNumber: 23
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPlusCircle"],
    style: {
      color: "#74cf4e",

      /* width: 151%; */
      width: "26px",
      height: "30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 913,
      columnNumber: 25
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    style: {
      marginLeft: "18px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 923,
      columnNumber: 23
    }
  }, __jsx("h3", {
    style: {
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 924,
      columnNumber: 25
    }
  }, "Get your MealBox"), __jsx("p", {
    style: {
      fontSize: "12px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 925,
      columnNumber: 25
    }
  }, "Enter your order details and track yiur order easily", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 927,
      columnNumber: 27
    }
  }), "with our effective tracking system"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginTop: "15px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 932,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    shape: "round",
    style: {
      backgroundColor: "#74cf4e",
      border: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 933,
      columnNumber: 23
    }
  }, "Order Food"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    style: {
      position: "absolute",
      zIndex: 2,
      opacity: 0.2,
      width: " 689px",
      height: "707px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 944,
      columnNumber: 15
    }
  }, __jsx("img", {
    className: "plansBg",
    src: "./images/thali.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 953,
      columnNumber: 17
    }
  })))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    style: {
      backgroundColor: "transparent"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 959,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginTop: "111px",
      marginLeft: "40%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 960,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "plans",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 961,
      columnNumber: 11
    }
  }, "Homechefs & Kitchens")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginTop: "60px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 964,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 5,
    style: {
      zIndex: -1,
      width: " 800px",
      height: "50px",
      position: "relative",
      marginTop: "250px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 965,
      columnNumber: 11
    }
  }, __jsx("img", {
    style: {
      width: "619px",
      height: "755px",
      position: "absolute",
      left: "-34px"
    } // className="leafBg"
    ,
    src: "./images/leafBg.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 976,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 5,
    style: {
      position: "relative",
      zIndex: 1,
      backgroundColor: "transparent"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 988,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "chef1",
    id: "ch1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 996,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "chef1",
    id: "ch2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 997,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "chef1",
    id: "ch3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 998,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 14,
    style: {
      zIndex: 1,
      marginLeft: "-171px",
      marginTop: "93px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1001,
      columnNumber: 11
    }
  }, " ", __jsx(_components_CarouselComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1006,
      columnNumber: 13
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1010,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    id: "flexiblePackage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1011,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "plans",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1012,
      columnNumber: 11
    }
  }, "In the most flexible package")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginLeft: "122px",
      marginRight: 0,
      marginTop: "100px"
    },
    gutter: {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 32
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1014,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 6,
    className: "gutter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1018,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    style: {
      position: "absolute",
      zIndex: 1,
      backgroundColor: "transparent",
      marginTop: "25px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1019,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1027,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "./images/hotel.png",
    style: {
      width: "51%",
      marginLeft: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1028,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1033,
      columnNumber: 15
    }
  }, __jsx("h4", {
    style: {
      marginLeft: "-50px",
      marginTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1034,
      columnNumber: 17
    }
  }, "Weeknd Off"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1039,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "triangle2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1040,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 6,
    className: "gutter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1043,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    style: {
      position: "absolute",
      zIndex: 1,
      backgroundColor: "transparent",
      marginTop: "25px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1044,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1052,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "./images/spa.png",
    style: {
      width: "51%",
      marginLeft: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1053,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1058,
      columnNumber: 15
    }
  }, __jsx("h4", {
    style: {
      marginLeft: "-50px",
      marginTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1059,
      columnNumber: 17
    }
  }, "Swap Meal"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1064,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "triangle2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1065,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 6,
    className: "gutter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1068,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    style: {
      position: "absolute",
      zIndex: 1,
      backgroundColor: "transparent",
      marginTop: "25px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1069,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1077,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "./images/skip-meal.jpg",
    style: {
      width: "51%",
      marginLeft: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1078,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1083,
      columnNumber: 15
    }
  }, __jsx("h4", {
    style: {
      marginLeft: "-50px",
      marginTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1084,
      columnNumber: 17
    }
  }, "Skip Meal"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1089,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "triangle2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1090,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 6,
    className: "gutter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1093,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    style: {
      position: "absolute",
      zIndex: 1,
      backgroundColor: "transparent",
      marginTop: "25px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1094,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1102,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "./images/pause-meal.jpg",
    style: {
      width: "51%",
      marginLeft: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1103,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1108,
      columnNumber: 15
    }
  }, __jsx("h4", {
    style: {
      marginLeft: "-50px",
      marginTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1109,
      columnNumber: 17
    }
  }, "Pause Meal"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1114,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "triangle2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1115,
      columnNumber: 15
    }
  })), __jsx("img", {
    src: "./images/leafBg2.png",
    style: {
      zIndex: -1,

      /* left: -41px; */
      marginLeft: "141px",
      height: "400px",
      marginTop: "-114px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1117,
      columnNumber: 13
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    style: {
      position: "relative",
      height: "813px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1133,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1134,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      width: "-webkit-fill-available"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1135,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "plans",
    style: {
      marginLeft: "93px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1136,
      columnNumber: 13
    }
  }, "Contact us")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "formBg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1140,
      columnNumber: 11
    }
  }, __jsx(_components_ContactUs__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1141,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      position: "relative",
      height: "500px",
      zIndex: -1,
      top: "-278px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1144,
      columnNumber: 9
    }
  }, __jsx(_components_googleMap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      position: "absolute"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1152,
      columnNumber: 11
    }
  }))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1155,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=home.js.6b4b2c562b6777206ab9.hot-update.js.map