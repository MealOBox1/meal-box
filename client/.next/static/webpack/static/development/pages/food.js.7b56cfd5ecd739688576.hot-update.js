webpackHotUpdate("static\\development\\pages\\food.js",{

/***/ "./Actions/OrderAction.js":
/*!********************************!*\
  !*** ./Actions/OrderAction.js ***!
  \********************************/
/*! exports provided: Orderfood, postAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orderfood", function() { return Orderfood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postAddress", function() { return postAddress; });
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
var postAddress = function postAddress(data) {
  return function (dispatch) {
    console.log(data);
    defaultAxios.post("/user/PostAddress", data).then(function (res) {
      return dispatch({
        type: Post_Add,
        payload: res.data
      });
    });
  };
};

/***/ })

})
//# sourceMappingURL=food.js.7b56cfd5ecd739688576.hot-update.js.map