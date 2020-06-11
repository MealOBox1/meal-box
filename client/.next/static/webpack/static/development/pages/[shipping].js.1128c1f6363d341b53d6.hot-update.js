webpackHotUpdate("static\\development\\pages\\[shipping].js",{

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
        type: Get_Caer,
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
//# sourceMappingURL=[shipping].js.1128c1f6363d341b53d6.hot-update.js.map