webpackHotUpdate("static\\development\\pages\\food.js",{

/***/ "./Actions/OrderAction.js":
/*!********************************!*\
  !*** ./Actions/OrderAction.js ***!
  \********************************/
/*! exports provided: Orderfood, OrderAddress, Createcart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orderfood", function() { return Orderfood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderAddress", function() { return OrderAddress; });
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
var Createcart = data;

/***/ })

})
//# sourceMappingURL=food.js.bcb8e1b90fedcb675495.hot-update.js.map