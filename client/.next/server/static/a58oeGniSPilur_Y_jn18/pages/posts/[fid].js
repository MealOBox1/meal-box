module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6ly7":
/***/ (function(module, exports) {



/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TT8f");


/***/ }),

/***/ "DrnY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GET_ITEMS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Post_Plan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Post_Add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Get_Add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Get_Food; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Order_Food; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Order_Add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return defaultAxios; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
const GET_ITEMS = "GET_ITEMS";
const Post_Plan = "PostPlan";
const Post_Add = "Post_Add";
const Get_Add = "Get_Add";
const Get_Food = "Get_Food";
const Order_Food = "Order_Food";
const Order_Add = "Order_Add";

const defaultAxios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://localhost:5000"
  /* other custom settings */

});

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "Oo8v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return postPlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return postAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAddress; });
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("DrnY");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const getItems = data => dispatch => {
  console.log(data);
  _Types__WEBPACK_IMPORTED_MODULE_0__[/* defaultAxios */ "g"].get(`/venders?veg=${data.veg}&meals=${data.meals}`).then(res => dispatch({
    type: "GET_ITEMS",
    payload: res.data
  }));
};
const getFood = data => dispatch => {
  console.log(data);
  _Types__WEBPACK_IMPORTED_MODULE_0__[/* defaultAxios */ "g"].get(`/venders/${data}`).then(res => dispatch({
    type: "Get_Food",
    payload: res.data
  }) // {
  //   console.log(res);
  // }
  );
};
const postPlan = data => dispatch => {
  console.log(data, "ddd");
  dispatch({
    type: _Types__WEBPACK_IMPORTED_MODULE_0__[/* Post_Plan */ "f"],
    payload: data
  });
};
const postAddress = data => dispatch => {
  console.log(data);
  _Types__WEBPACK_IMPORTED_MODULE_0__[/* defaultAxios */ "g"].post(`/user/PostAddress`, data).then(res => dispatch({
    type: _Types__WEBPACK_IMPORTED_MODULE_0__[/* Post_Add */ "e"],
    payload: res.data
  }));
};
const GetAddress = data => dispatch => {
  console.log(data);
  _Types__WEBPACK_IMPORTED_MODULE_0__[/* defaultAxios */ "g"].get(`/user/Addresses`, data).then(res => dispatch({
    type: _Types__WEBPACK_IMPORTED_MODULE_0__[/* Get_Add */ "a"],
    payload: res.data
  }));
};

/***/ }),

/***/ "TT8f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_food_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("6ly7");
/* harmony import */ var _styles_food_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_food_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Actions_ItemsAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Oo8v");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function foodDetail(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const fid = router.query.fid;
  console.log(router.query.fid);
  const {
    0: value,
    1: setvalue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: data,
    1: setdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    props.getFood(fid);
    setdata(prevState => ({
      food: props.food
    }));
    console.log(data);
  }, []);

  const onchange = e => {
    setvalue(e.target.value);
  };

  return __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx("p", null, "Post:", fid), __jsx("p", null, props.food.title), __jsx("p", null, data.title)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      justifyContent: "center",
      marginTop: "15px"
    }
  }, __jsx("div", {
    className: "site-card-border-less-wrapper"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      borderLeft: "3px solid #74cf4e",
      width: " 652px"
    }
  }, __jsx("h3", null, "Choose Subscription Plan"), __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
    onChange: onchange,
    value: value
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
    className: _styles_food_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.radioStyle,
    value: 1
  }, "3 Days Subscription Plan"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
    className: _styles_food_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.radioStyle,
    value: 2
  }, "6 Days Subscription Plan"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
    className: _styles_food_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.radioStyle,
    value: 3
  }, "14 Days Subscription Plan"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
    className: _styles_food_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.radioStyle,
    value: 4
  }, "28 Days Subscription Plan"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"] //   type="primary"
  , {
    shape: "round" //icon={<DownloadOutlined />}
    ,
    size: "large",
    style: {
      marginLeft: "246px",
      marginTop: "39px",
      backgroundColor: "#74cf4e",
      color: "white"
    },
    value: "Silver",
    id: "silver" //onClick={choosePlan}

  }, "Confirm")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null)));
}

const mapStateToProps = state => ({
  food: state.item.items
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  getFood: _Actions_ItemsAction__WEBPACK_IMPORTED_MODULE_5__[/* getFood */ "b"]
})(foodDetail));

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });