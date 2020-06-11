webpackHotUpdate("static\\development\\pages\\food.js",{

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

/***/ })

})
//# sourceMappingURL=food.js.fad1af2c970c831844c1.hot-update.js.map