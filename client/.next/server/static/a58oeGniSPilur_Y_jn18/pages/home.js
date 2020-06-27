module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/sKF":
/***/ (function(module, exports) {



/***/ }),

/***/ "1+wD":
/***/ (function(module, exports) {



/***/ }),

/***/ "5H56":
/***/ (function(module, exports) {



/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("CH2o");


/***/ }),

/***/ "CH2o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ home_home; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "antd/lib/typography/Title"
var Title_ = __webpack_require__("PsK4");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// CONCATENATED MODULE: ./components/CarouselComponent.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




class CarouselComponent_CarouselComponent extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = external_react_default.a.createRef();
  }

  next() {
    this.carousel.next();
  }

  previous() {
    this.carousel.prev();
  }

  render() {
    const props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return __jsx("div", null, __jsx(external_antd_["Carousel"], _extends({
      ref: node => this.carousel = node
    }, props, {
      autoplay: true
    }), __jsx("div", null, __jsx(external_antd_["Row"], null, __jsx(external_antd_["Col"], {
      className: "chefContainer"
    }, __jsx("img", {
      className: "chef",
      src: "./images/chef1.jpg"
    })), __jsx(external_antd_["Col"], {
      style: {
        width: "550px"
      }
    }, __jsx(external_antd_["Row"], {
      style: {
        height: "233px"
      }
    }, __jsx("p", {
      style: {
        height: "176px"
      },
      className: "cheflines"
    }, " ", "\" I coocked traditional recipes that are ", __jsx("br", null), " scacred in my family ,to share my love", __jsx("br", null), " for food\".", __jsx("br", null), __jsx("h1", null, "Rahul")))))), __jsx("div", null, __jsx(external_antd_["Row"], null, __jsx(external_antd_["Col"], {
      className: "chefContainer"
    }, __jsx("img", {
      className: "chef",
      src: "./images/chef2.jpeg"
    })), __jsx(external_antd_["Col"], {
      style: {
        width: "550px"
      }
    }, __jsx(external_antd_["Row"], {
      style: {
        height: "233px"
      }
    }, __jsx("p", {
      style: {
        height: "176px"
      },
      className: "cheflines"
    }, " ", "\" I coocked traditional recipes that are ", __jsx("br", null), " scacred in my family ,to share my love", __jsx("br", null), " for food.", __jsx("br", null), __jsx("h1", null, "Rahul")))))), __jsx("div", null, __jsx(external_antd_["Row"], null, __jsx(external_antd_["Col"], {
      className: "chefContainer"
    }, __jsx("img", {
      className: "chef",
      src: "./images/chef3.jpg"
    })), __jsx(external_antd_["Col"], {
      style: {
        width: "550px"
      }
    }, __jsx(external_antd_["Row"], {
      style: {
        height: "233px"
      }
    }, __jsx("p", {
      style: {
        height: "176px"
      },
      className: "cheflines"
    }, " ", "\" I coocked traditional recipes that are ", __jsx("br", null), " scacred in my family ,to share my love", __jsx("br", null), " for food.", __jsx("br", null), __jsx("h1", null, "Rahul"))))))), __jsx(external_antd_["Row"], {
      style: {
        marginLeft: "309px"
      }
    }, __jsx(external_antd_["Col"], {
      id: "courselBtn"
    }, " ", __jsx(icons_["ArrowLeftOutlined"], {
      onClick: this.previous,
      id: "courselShift"
    })), __jsx(external_antd_["Col"], {
      id: "courselBtn"
    }, " ", __jsx(icons_["ArrowRightOutlined"], {
      onClick: this.next,
      id: "courselShift"
    }))));
  }

}
// EXTERNAL MODULE: external "google-maps-react"
var external_google_maps_react_ = __webpack_require__("yOsI");

// CONCATENATED MODULE: ./components/googleMap.js
var googleMap_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class googleMap_MapContainer extends external_react_["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "displayMarkers", () => {
      return this.state.stores.map((store, index) => {
        return googleMap_jsx(external_google_maps_react_["Marker"], {
          key: index,
          id: index,
          position: {
            lat: store.latitude,
            lng: store.longitude
          },
          onClick: () => console.log("You clicked me!")
        });
      });
    });

    this.state = {
      stores: [{
        lat: 47.49855629475769,
        lng: -122.14184416996333
      }, {
        latitude: 47.359423,
        longitude: -122.021071
      }, {
        latitude: 47.2052192687988,
        longitude: -121.988426208496
      }, {
        latitude: 47.6307081,
        longitude: -122.1434325
      }, {
        latitude: 47.3084488,
        longitude: -122.2140121
      }, {
        latitude: 47.5524695,
        longitude: -122.0425407
      }]
    };
  }

  render() {
    const mapStyles = {
      width: "100%",
      height: "600px"
    };
    return googleMap_jsx(external_google_maps_react_["Map"], {
      google: this.props.google,
      zoom: 8,
      style: mapStyles,
      initialCenter: {
        lat: 47.444,
        lng: -122.176
      }
    }, this.displayMarkers());
  }

}
/* harmony default export */ var googleMap = (Object(external_google_maps_react_["GoogleApiWrapper"])({
  apiKey: "AIzaSyCD113R12IhhXRPyUqAvpvyKqc8bio6Liw"
})(googleMap_MapContainer));
// EXTERNAL MODULE: ./styles/ContactUs.module.css
var ContactUs_module = __webpack_require__("1+wD");
var ContactUs_module_default = /*#__PURE__*/__webpack_require__.n(ContactUs_module);

// CONCATENATED MODULE: ./components/ContactUs.js

var ContactUs_jsx = external_react_default.a.createElement;

function ContactUs_extends() { ContactUs_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ContactUs_extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { ContactUs_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ContactUs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const {
  Option
} = external_antd_["Select"];
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!"
  },
  number: {
    range: "${label} must be between ${min} and ${max}"
  }
};

const prefixSelector = ContactUs_jsx(external_antd_["Form"].Item, {
  name: "prefix",
  noStyle: true
}, ContactUs_jsx(external_antd_["Select"], {
  style: {
    width: "70px"
  }
}, ContactUs_jsx(Option, {
  value: "86"
}, "+86"), ContactUs_jsx(Option, {
  value: "87"
}, "+87"), ContactUs_jsx(Option, {
  value: "87"
}, "+91")));

const Demo = () => {
  const onFinish = values => {
    console.log(values);
  };

  return ContactUs_jsx(external_antd_["Form"], ContactUs_extends({
    className: ContactUs_module_default.a.form
  }, layout, {
    name: "nest-messages",
    onFinish: onFinish,
    validateMessages: validateMessages
  }), ContactUs_jsx(external_antd_["Form"].Item, {
    name: ["user", "name"],
    label: "Name",
    rules: [{
      required: true
    }]
  }, ContactUs_jsx(external_antd_["Input"], {
    placeholder: "Name"
  })), ContactUs_jsx(external_antd_["Form"].Item, {
    name: "phone",
    label: "Phone Number",
    rules: [{
      required: true,
      message: "Please input your phone number!"
    }]
  }, ContactUs_jsx(external_antd_["Input"], {
    addonBefore: prefixSelector,
    style: {
      width: "100%"
    }
  })), ContactUs_jsx(external_antd_["Form"].Item, {
    name: ["user", "introduction"],
    label: "Introduction"
  }, ContactUs_jsx(external_antd_["Input"].TextArea, null)), ContactUs_jsx(external_antd_["Form"].Item, {
    wrapperCol: _objectSpread({}, layout.wrapperCol, {
      offset: 8
    })
  }, ContactUs_jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit"
  }, "Submit")));
};

/* harmony default export */ var ContactUs = (Demo);
// EXTERNAL MODULE: ./components/footer.js
var footer = __webpack_require__("aIN1");

// EXTERNAL MODULE: ./styles/home.css
var home = __webpack_require__("/sKF");

// CONCATENATED MODULE: ./pages/home.js
var home_jsx = external_react_default.a.createElement;
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



const {
  Header,
  Slider,
  Content
} = external_antd_["Layout"];








function home_home() {
  return home_jsx(external_react_default.a.Fragment, null, home_jsx(external_antd_["Layout"], {
    className: "layout"
  }, home_jsx(Header, null, home_jsx("div", {
    className: "logo"
  }, home_jsx("img", {
    style: {
      borderRadius: "4px"
    },
    src: "./images/logo2.jpeg"
  })), home_jsx(external_antd_["Menu"], {
    style: {
      float: "right",
      backgroundColor: "transparent !important",
      color: "#d8d8d8"
    },
    mode: "horizontal",
    defaultSelectedKeys: ["1"]
  }, home_jsx(external_antd_["Menu"].Item, {
    key: "1",
    className: "customclass"
  }, "Home"), home_jsx(external_antd_["Menu"].Item, {
    key: "2",
    className: "customclass"
  }, "OUR FOOD"), home_jsx(external_antd_["Menu"].Item, {
    key: "3",
    className: "customclass"
  }, "PLANS"), home_jsx(external_antd_["Menu"].Item, null, home_jsx(external_antd_["Button"], {
    style: {
      borderRadius: "12px",
      backgroundColor: "#74cf4e",
      color: "white"
    } // type="sucess"
    // icon={<DownloadOutlined />}

  }, "Signup / login")))), home_jsx(external_antd_["Row"], {
    className: "headerB",
    gutter: [16, 24]
  }, home_jsx(external_antd_["Col"], {
    className: "gutter-row",
    span: 13,
    style: {
      marginTop: "112px"
    }
  }, home_jsx(external_antd_["Row"], {
    style: {
      marginLeft: "162px"
    }
  }, " ", home_jsx(external_antd_["Col"], {
    className: "gutter-row",
    span: 10
  }, home_jsx("img", {
    src: "./images/leaf.png",
    style: {
      width: "11%"
    }
  })), home_jsx(external_antd_["Col"], {
    className: "gutter-row",
    span: 14
  }, home_jsx("img", {
    src: "./images/chilli.png",
    style: {
      marginLeft: "227px",
      width: "7%"
    }
  }))), home_jsx("div", null, home_jsx("h1", {
    style: {
      fontSize: "60px",
      textAlign: "center",
      marginBottom: 0
    }
  }, "Have No time", home_jsx("br", null), " to prepare ", home_jsx("span", {
    style: {
      color: "#74cf4e"
    }
  }, "food"), " ", "?")), home_jsx(external_antd_["Col"], {
    style: {
      padding: "0",
      marginLeft: "146px"
    }
  }, "Choose one of our plans, enter delivery time ", home_jsx("br", null), " and enjoy delicious food without leaving your place!"), home_jsx(external_antd_["Row"], {
    style: {
      marginLeft: "139px",
      marginTop: "20px"
    }
  }, " ", home_jsx(external_antd_["Col"], {
    span: 10
  }, home_jsx(external_antd_["Button"], {
    type: "primary",
    shape: "round",
    style: {
      backgroundColor: "#74cf4e",
      border: 0
    }
  }, "Subscribe Food")), home_jsx(external_antd_["Col"], {
    span: 14
  }, home_jsx("img", {
    src: "./images/leaf.png",
    style: {
      marginLeft: "291px",
      width: "8%"
    }
  }))), home_jsx(external_antd_["Col"], null, home_jsx("img", {
    src: "./images/tomato.png",
    style: {
      width: "6%"
    }
  })), home_jsx(external_antd_["Row"], {
    style: {
      marginLeft: "140px"
    }
  }, home_jsx(external_antd_["Col"], {
    style: {
      marginLeft: "7px"
    }
  }, home_jsx(icons_["TwitterOutlined"], null)), home_jsx(external_antd_["Col"], {
    style: {
      marginLeft: "7px"
    }
  }, home_jsx(icons_["InstagramOutlined"], null)), home_jsx(external_antd_["Col"], {
    style: {
      marginLeft: "7px"
    }
  }, home_jsx(icons_["FacebookOutlined"], null)))), home_jsx(external_antd_["Col"], {
    className: "gutter-row",
    span: 11
  }, " ", home_jsx("img", {
    style: {
      filter: "brightness(74%)"
    },
    src: "./images/headerBg.png"
  })))), home_jsx(external_antd_["Layout"], {
    style: {
      height: "314px"
    }
  }, home_jsx(external_antd_["Row"], {
    gutter: {
      xs: 8,
      sm: 16,
      md: 24,
      lg: 32
    },
    style: {
      marginRight: "0px",
      marginLeft: 0
    }
  }, home_jsx(external_antd_["Col"], {
    span: 12,
    style: {
      textAlign: "-webkit-right",
      marginLeft: "65px"
    },
    className: "gutter-row"
  }, home_jsx("h1", {
    style: {
      borderBottom: "2px solid #74cf4e",
      width: "163px"
    }
  }, "What we Do"))), home_jsx(external_antd_["Row"], {
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
    }
  }, home_jsx(external_antd_["Col"], {
    span: 8,
    className: "gutter-row"
  }, home_jsx(external_antd_["Layout"], {
    style: {
      position: "absolute",
      zIndex: 1,
      backgroundColor: "transparent",
      marginTop: "10px"
    }
  }, home_jsx(external_antd_["Col"], {
    className: "gutter-row"
  }, home_jsx("img", {
    src: "./images/food.png",
    style: {
      width: "30%",
      marginLeft: "35px"
    }
  })), home_jsx(external_antd_["Col"], {
    className: "gutter-row"
  }, home_jsx("h4", null, "Healthy Food")), home_jsx(external_antd_["Col"], {
    className: "gutter-row",
    style: {
      paddingLeft: 0,
      width: "174px"
    }
  }, home_jsx("p", {
    style: {
      fontSize: "12px"
    }
  }, "Food is tested on the basis of hygiene and taste both. Packaging and freshness of food is maintained"))), home_jsx(external_antd_["Layout"], null, home_jsx("div", {
    className: "triangle"
  }))), home_jsx(external_antd_["Col"], {
    span: 8,
    className: "gutter-row"
  }, home_jsx(external_antd_["Layout"], {
    style: {
      position: "absolute",
      zIndex: 1,
      backgroundColor: "transparent",
      marginTop: "10px"
    }
  }, home_jsx(external_antd_["Col"], {
    className: "gutter-row"
  }, home_jsx("img", {
    src: "./images/boiling.png",
    style: {
      width: "30%",
      marginLeft: "35px"
    }
  })), home_jsx(external_antd_["Col"], {
    className: "gutter-row"
  }, home_jsx("h4", null, "Homecooked")), home_jsx(external_antd_["Col"], {
    className: "gutter-row",
    style: {
      paddingLeft: 0,
      width: "174px"
    }
  }, home_jsx("p", {
    style: {
      fontSize: "12px"
    }
  }, "Collaboration with home cooks and provide platform to start their service near by area."))), home_jsx(external_antd_["Layout"], null, home_jsx("div", {
    className: "triangle"
  }))), home_jsx(external_antd_["Col"], {
    span: 8,
    className: "gutter-row"
  }, home_jsx(external_antd_["Layout"], {
    style: {
      position: "absolute",
      zIndex: 1,
      backgroundColor: "transparent",
      marginTop: "10px"
    }
  }, home_jsx(external_antd_["Col"], {
    className: "gutter-row"
  }, home_jsx("img", {
    src: "./images/food-delivery.png",
    style: {
      width: "30%",
      marginLeft: "35px"
    }
  })), home_jsx(external_antd_["Col"], {
    className: "gutter-row"
  }, home_jsx("h4", null, "Customized", home_jsx("br", null), "delivery", " ")), home_jsx(external_antd_["Col"], {
    className: "gutter-row",
    style: {
      paddingLeft: 0,
      width: "174px"
    }
  }, home_jsx("p", {
    style: {
      fontSize: "12px"
    }
  }, "Pre-shedule delivery option and easy cancellation Available easy re-ordering and bulk order option."))), home_jsx(external_antd_["Layout"], null, home_jsx("div", {
    className: "triangle"
  }))))), home_jsx(external_antd_["Layout"], null, home_jsx(external_antd_["Row"], {
    style: {
      marginTop: "200px"
    }
  }, home_jsx(external_antd_["Col"], {
    span: 12
  }, home_jsx("img", {
    src: "./images/plate.jpg",
    style: {
      width: "676px",
      borderBottomRightRadius: " 126px",
      borderTopRightRadius: "126px"
    }
  })), home_jsx(external_antd_["Col"], {
    span: 12
  }, home_jsx(external_antd_["Row"], null, home_jsx(external_antd_["Col"], {
    style: {
      position: "relative",
      zIndex: 1,
      backgroundColor: "transparent",
      marginLeft: "106px",
      marginTop: "80px"
    }
  }, home_jsx(external_antd_["Layout"], null, home_jsx(external_antd_["Col"], null, home_jsx("h1", {
    className: "plans",
    style: {
      fontSize: "38px" // borderBottom: "2px solid #74cf4e",
      // borderBottomWidth: " 2px",

    }
  }, "How easy is it")), home_jsx(external_antd_["Col"], null, home_jsx(external_antd_["Row"], null, home_jsx(external_antd_["Col"], null, home_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faPlusCircle"],
    style: {
      color: "#74cf4e",

      /* width: 151%; */
      width: "26px",
      height: "30px"
    }
  })), home_jsx(external_antd_["Col"], {
    style: {
      marginLeft: "18px"
    }
  }, home_jsx("h3", {
    style: {
      marginBottom: 0
    }
  }, "Choose meal"), home_jsx("p", {
    style: {
      fontSize: "12px"
    }
  }, "Select from a variety of range with just one click"))), home_jsx(external_antd_["Row"], null, home_jsx(external_antd_["Col"], null, home_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faPlusCircle"],
    style: {
      color: "#74cf4e",

      /* width: 151%; */
      width: "26px",
      height: "30px"
    }
  })), home_jsx(external_antd_["Col"], {
    style: {
      marginLeft: "18px"
    }
  }, home_jsx("h3", {
    style: {
      marginBottom: 0
    }
  }, "Subscribe a Plan"), home_jsx("p", {
    style: {
      fontSize: "12px"
    }
  }, "Choose your best timing when you want your", home_jsx("br", null), " food to arrive you"))), home_jsx(external_antd_["Row"], null, home_jsx(external_antd_["Col"], null, home_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faPlusCircle"],
    style: {
      color: "#74cf4e",

      /* width: 151%; */
      width: "26px",
      height: "30px"
    }
  })), home_jsx(external_antd_["Col"], {
    style: {
      marginLeft: "18px"
    }
  }, home_jsx("h3", {
    style: {
      marginBottom: 0
    }
  }, "Get your MealBox"), home_jsx("p", {
    style: {
      fontSize: "12px"
    }
  }, "Enter your order details and track yiur order easily", home_jsx("br", null), "with our effective tracking system"))), home_jsx(external_antd_["Row"], {
    style: {
      marginTop: "15px"
    }
  }, home_jsx(external_antd_["Button"], {
    type: "primary",
    shape: "round",
    style: {
      backgroundColor: "#74cf4e",
      border: 0
    }
  }, "Order Food"))))), home_jsx(external_antd_["Col"], {
    style: {
      position: "absolute",
      zIndex: 2,
      opacity: 0.2,
      width: " 689px",
      height: "707px"
    }
  }, home_jsx("img", {
    className: "plansBg",
    src: "./images/thali.png"
  })))))), home_jsx(external_antd_["Layout"], {
    style: {
      backgroundColor: "transparent"
    }
  }, home_jsx(external_antd_["Row"], {
    style: {
      marginTop: "111px",
      marginLeft: "40%"
    }
  }, home_jsx("h1", {
    className: "plans"
  }, "Homechefs & Kitchens")), home_jsx(external_antd_["Row"], {
    style: {
      marginTop: "60px"
    }
  }, home_jsx(external_antd_["Col"], {
    span: 5,
    style: {
      zIndex: -1,
      width: " 800px",
      height: "50px",
      position: "relative",
      marginTop: "250px"
    }
  }, home_jsx("img", {
    style: {
      width: "619px",
      height: "755px",
      position: "absolute",
      left: "-34px"
    } // className="leafBg"
    ,
    src: "./images/leafBg.png"
  })), home_jsx(external_antd_["Col"], {
    span: 5,
    style: {
      position: "relative",
      zIndex: 1,
      backgroundColor: "transparent"
    }
  }, home_jsx("div", {
    className: "chef1",
    id: "ch1"
  }), home_jsx("div", {
    className: "chef1",
    id: "ch2"
  }), home_jsx("div", {
    className: "chef1",
    id: "ch3"
  })), home_jsx(external_antd_["Col"], {
    span: 14,
    style: {
      zIndex: 1,
      marginLeft: "-171px",
      marginTop: "93px"
    }
  }, " ", home_jsx(CarouselComponent_CarouselComponent, null)))), home_jsx(external_antd_["Layout"], null, home_jsx(external_antd_["Row"], {
    id: "flexiblePackage"
  }, home_jsx("h1", {
    className: "plans"
  }, "In the most flexible package")), home_jsx(external_antd_["Row"], {
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
    }
  }, home_jsx(external_antd_["Col"], {
    span: 6,
    className: "gutter-row"
  }, home_jsx(external_antd_["Layout"], {
    style: {
      position: "absolute",
      zIndex: 1,
      backgroundColor: "transparent",
      marginTop: "25px"
    }
  }, home_jsx(external_antd_["Col"], {
    className: "gutter-row"
  }, home_jsx("img", {
    src: "./images/hotel.png",
    style: {
      width: "51%",
      marginLeft: "0px"
    }
  })), home_jsx(external_antd_["Col"], {
    className: "gutter-row",
    style: {
      textAlign: "center"
    }
  }, home_jsx("h4", {
    style: {
      marginLeft: "-50px",
      marginTop: "20px"
    }
  }, "Weeknd Off"))), home_jsx(external_antd_["Layout"], null, home_jsx("div", {
    className: "triangle2"
  }))), home_jsx(external_antd_["Col"], {
    span: 6,
    className: "gutter-row"
  }, home_jsx(external_antd_["Layout"], {
    style: {
      position: "absolute",
      zIndex: 1,
      backgroundColor: "transparent",
      marginTop: "25px"
    }
  }, home_jsx(external_antd_["Col"], {
    className: "gutter-row"
  }, home_jsx("img", {
    src: "./images/spa.png",
    style: {
      width: "51%",
      marginLeft: "0px"
    }
  })), home_jsx(external_antd_["Col"], {
    className: "gutter-row",
    style: {
      textAlign: "center"
    }
  }, home_jsx("h4", {
    style: {
      marginLeft: "-50px",
      marginTop: "20px"
    }
  }, "Swap Meal"))), home_jsx(external_antd_["Layout"], null, home_jsx("div", {
    className: "triangle2"
  }))), home_jsx(external_antd_["Col"], {
    span: 6,
    className: "gutter-row"
  }, home_jsx(external_antd_["Layout"], {
    style: {
      position: "absolute",
      zIndex: 1,
      backgroundColor: "transparent",
      marginTop: "25px"
    }
  }, home_jsx(external_antd_["Col"], {
    className: "gutter-row"
  }, home_jsx("img", {
    src: "./images/breakfast.png",
    style: {
      width: "51%",
      marginLeft: "0px"
    }
  })), home_jsx(external_antd_["Col"], {
    className: "gutter-row",
    style: {
      textAlign: "center"
    }
  }, home_jsx("h4", {
    style: {
      marginLeft: "-50px",
      marginTop: "20px"
    }
  }, "Skip Meal"))), home_jsx(external_antd_["Layout"], null, home_jsx("div", {
    className: "triangle2"
  }))), home_jsx(external_antd_["Col"], {
    span: 6,
    className: "gutter-row"
  }, home_jsx(external_antd_["Layout"], {
    style: {
      position: "absolute",
      zIndex: 1,
      backgroundColor: "transparent",
      marginTop: "25px"
    }
  }, home_jsx(external_antd_["Col"], {
    className: "gutter-row"
  }, home_jsx("img", {
    src: "./images/reception.png",
    style: {
      width: "51%",
      marginLeft: "0px"
    }
  })), home_jsx(external_antd_["Col"], {
    className: "gutter-row",
    style: {
      textAlign: "center"
    }
  }, home_jsx("h4", {
    style: {
      marginLeft: "-50px",
      marginTop: "20px"
    }
  }, "Pause Meal"))), home_jsx(external_antd_["Layout"], null, home_jsx("div", {
    className: "triangle2"
  })), home_jsx("img", {
    src: "./images/leafBg2.png",
    style: {
      zIndex: -1,

      /* left: -41px; */
      marginLeft: "141px",
      height: "400px",
      marginTop: "-114px"
    }
  })))), home_jsx(external_antd_["Layout"], {
    style: {
      position: "relative",
      height: "813px"
    }
  }, home_jsx(external_antd_["Row"], null, home_jsx(external_antd_["Row"], {
    style: {
      width: "-webkit-fill-available"
    }
  }, home_jsx("h1", {
    className: "plans",
    style: {
      marginLeft: "93px"
    }
  }, "Contact us")), home_jsx(external_antd_["Row"], {
    className: "formBg"
  }, home_jsx(ContactUs, null))), home_jsx(external_antd_["Row"], {
    style: {
      position: "relative",
      height: "500px",
      zIndex: -1,
      top: "-278px"
    }
  }, home_jsx(googleMap, {
    style: {
      position: "absolute"
    }
  }))), home_jsx(footer["a" /* default */], null));
}

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "PsK4":
/***/ (function(module, exports) {

module.exports = require("antd/lib/typography/Title");

/***/ }),

/***/ "aIN1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5H56");
/* harmony import */ var _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function footer() {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    className: "footer"
  }, __jsx("img", {
    src: "./images/footer.jpg",
    style: {
      position: "absolute",
      width: "100%",
      height: "100%",
      objectFit: " cover",
      filter: "brightness(50%)"
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 9
  }, __jsx("div", {
    className: "logo",
    style: {
      marginLeft: "151px"
    }
  }, __jsx("img", {
    style: {
      borderRadius: "8px"
    },
    src: "./images/logo2.jpeg"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 5
  }, __jsx("h2", {
    className: _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.h2
  }, "Contact"), __jsx("ul", {
    className: _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list
  }, __jsx("li", null, "Lorem ipsum #239,trcity plaza"), __jsx("li", null, "peermuchalla. zirakpur,mohali"), __jsx("li", null, "Telephone: +91 99999-88888"), __jsx("li", null, "E-mail: mail@mealbox.com"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 5
  }, __jsx("h2", {
    className: _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.h2
  }, "Menu"), __jsx("ul", {
    className: _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list
  }, __jsx("li", null, "About us"), __jsx("li", null, "Our Food"), __jsx("li", null, "Plans"), __jsx("li", null, "Contact us"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 5
  }, __jsx("h2", {
    className: _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.h2
  }, "Follow Us"), __jsx("ul", {
    className: _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list2
  }, __jsx("li", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["FacebookOutlined"], null)), __jsx("li", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["TwitterOutlined"], null)))), __jsx("hr", {
    style: {
      zIndex: "1",
      width: "100%",
      margin: "0px",
      opacity: "0.5"
    }
  }), __jsx("p", {
    style: {
      color: "white",
      zIndex: "1",
      fontSize: "15px",
      marginLeft: "auto",
      marginRight: "auto"
    }
  }, " ", "\xA9 All Right Reserved")));
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "yOsI":
/***/ (function(module, exports) {

module.exports = require("google-maps-react");

/***/ })

/******/ });