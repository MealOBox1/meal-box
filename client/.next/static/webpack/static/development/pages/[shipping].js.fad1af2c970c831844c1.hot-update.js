webpackHotUpdate("static\\development\\pages\\[shipping].js",{

/***/ "./Actions/ItemsAction.js":
/*!********************************!*\
  !*** ./Actions/ItemsAction.js ***!
  \********************************/
/*! exports provided: getItems, getFood, postPlan, postAddress, GetAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItems", function() { return getItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFood", function() { return getFood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postPlan", function() { return postPlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postAddress", function() { return postAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAddress", function() { return GetAddress; });
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types */ "./Actions/Types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var getItems = function getItems(data) {
  return function (dispatch) {
    console.log(data);
    _Types__WEBPACK_IMPORTED_MODULE_0__["defaultAxios"].get("/venders?veg=".concat(data.veg, "&meals=").concat(data.meals)).then(function (res) {
      return dispatch({
        type: "GET_ITEMS",
        payload: res.data
      });
    } // {
    //   console.log(res);
    // }
    );
  };
};
var getFood = function getFood(data) {
  return function (dispatch) {
    console.log(data);
    _Types__WEBPACK_IMPORTED_MODULE_0__["defaultAxios"].get("/venders/".concat(data)).then(function (res) {
      return dispatch({
        type: "Get_Food",
        payload: res.data
      });
    } // {
    //   console.log(res);
    // }
    );
  };
};
var postPlan = function postPlan(data) {
  return function (dispatch) {
    console.log(data, "ddd");
    dispatch({
      type: _Types__WEBPACK_IMPORTED_MODULE_0__["Post_Plan"],
      payload: data
    });
  };
};
var postAddress = function postAddress(data) {
  return function (dispatch) {
    console.log(data);
    _Types__WEBPACK_IMPORTED_MODULE_0__["defaultAxios"].post("/user/PostAddress", data).then(function (res) {
      return dispatch({
        type: _Types__WEBPACK_IMPORTED_MODULE_0__["Post_Add"],
        payload: res.data
      });
    });
  };
};
var GetAddress = function GetAddress(data) {
  return function (dispatch) {
    console.log(data);
    _Types__WEBPACK_IMPORTED_MODULE_0__["defaultAxios"].get("/user/Addresses", data).then(function (res) {
      return dispatch({
        type: _Types__WEBPACK_IMPORTED_MODULE_0__["Get_Add"],
        payload: res.data
      });
    });
  };
};

/***/ }),

/***/ "./Actions/OrderAction.js":
/*!********************************!*\
  !*** ./Actions/OrderAction.js ***!
  \********************************/
/*! exports provided: Orderfood, OrderAddress, getCart, Createcart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orderfood", function() { return Orderfood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderAddress", function() { return OrderAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCart", function() { return getCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Createcart", function() { return Createcart; });
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types */ "./Actions/Types.js");

var Orderfood = function Orderfood(data) {
  return function (dispatch) {
    console.log(data);
    dispatch({
      type: _Types__WEBPACK_IMPORTED_MODULE_0__["Order_Food"],
      payload: data
    });
  };
};
var OrderAddress = function OrderAddress(data) {
  return function (dispatch) {
    console.log(data);
    dispatch({
      type: _Types__WEBPACK_IMPORTED_MODULE_0__["Order_Add"],
      payload: data
    });
  };
};
var getCart = function getCart(data) {
  return function (dispatch) {
    console.log(req.params.id);
    defaultAxios.get("/venders/".concat(req.params.id)).then(function (res) {
      return dispatch({
        type: Post_Add,
        payload: data
      });
    });
  };
};
var Createcart = function Createcart(data) {
  return function (dispatch) {
    dispatch({
      type: "Add_cart",
      payload: data
    });
  };
};

/***/ }),

/***/ "./pages/[shipping].js":
/*!*****************************!*\
  !*** ./pages/[shipping].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _userlayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userlayout */ "./pages/userlayout.js");
/* harmony import */ var _components_Header_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Head */ "./components/Header/Head.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Actions_ItemsAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Actions/ItemsAction */ "./Actions/ItemsAction.js");
/* harmony import */ var _Actions_OrderAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Actions/OrderAction */ "./Actions/OrderAction.js");

var _jsxFileName = "E:\\nextjs-blog\\client\\pages\\[shipping].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function shipping(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    props.GetAddress();
    props.getCart();
  }, []);

  var handleAddress = function handleAddress() {
    props.OrderAddress(props.address[1]._id);
  };

  console.log(props.address[1]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_components_Header_Head__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Encrypted checkout")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    mode: "horizontal" // style={{ boxShadow: "1px 4px 6px #888888", borderRadius: " 30px" }}
    //defaultSelectedKeys={["2"]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "1",
    style: {
      height: "58px"
    } //onClick={handlemeal}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, " ", __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "1. shipping info"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "2",
    style: {
      height: "58px"
    } //onClick={handlemeal}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, "2. payment info")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    style: {
      borderBottom: "1px solid green",
      height: "42px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "Shopping Cart"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    style: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      borderLeft: "3px solid #74cf4e",
      // marginLeft: "550px",
      marginTop: "20px",
      width: "56%",
      marginLeft: "10px"
    }, "marginTop", "20px"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, "Home"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "land mark"), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "pincode"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    htmlType: "submit",
    shape: "round",
    style: {
      backgroundColor: "#74cf4e",
      border: 0
    },
    onClick: handleAddress,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "Delivery here"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    htmlType: "submit",
    shape: "round",
    style: {
      backgroundColor: "#74cf4e",
      border: 0,
      marginLeft: "129px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, "Edit")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    style: {
      marginLeft: "106px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "./images/plate.jpg",
    style: {
      objectFit: "cover",
      height: "48px",
      width: "234px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  })), __jsx("div", {
    style: {
      marginBottom: "7px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      width: "233px",
      fontSize: "15px",
      height: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }, props.cart.food.menu, " "), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  }, props.cart.days, " Days")), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      width: "233px",
      fontSize: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx("p", {
    style: {
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 15
    }
  }, "Special 1 plate , 4 roti"), __jsx("p", {
    style: {
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }, "$ 80"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    htmlType: "submit" // shape="round"
    ,
    style: {
      backgroundColor: "#74cf4e",
      border: 0,
      // marginLeft: "134px",
      width: "233px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, "Apply Promo code"), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }, __jsx("ul", {
    style: {
      listStyle: "none",
      fontSize: "12px",
      padding: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }, __jsx("li", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 15
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  }, "Subtotal"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 17
    }
  }, "$ 80")), __jsx("li", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 15
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 17
    }
  }, "Taxes & Fares"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }, "$ 80")), __jsx("li", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 15
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  }, "Promo Code"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, "$ 80")), __jsx("li", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 15
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }, "Delivery"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }, "$ 80")), __jsx("li", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "14px",
      fontSize: "27px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 15
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 17
    }
  }, "Total"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }, "$ 80")))))));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    cart: state.order.cart,
    address: state.item.Address
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  GetAddress: _Actions_ItemsAction__WEBPACK_IMPORTED_MODULE_7__["GetAddress"],
  OrderAddress: _Actions_OrderAction__WEBPACK_IMPORTED_MODULE_8__["OrderAddress"],
  getCart: _Actions_OrderAction__WEBPACK_IMPORTED_MODULE_8__["getCart"]
})(shipping));

/***/ })

})
//# sourceMappingURL=[shipping].js.fad1af2c970c831844c1.hot-update.js.map