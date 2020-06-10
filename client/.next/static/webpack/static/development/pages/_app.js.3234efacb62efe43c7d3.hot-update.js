webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/itemReducer.js":
/*!*********************************!*\
  !*** ./reducers/itemReducer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Actions_Types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Actions/Types */ "./Actions/Types.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  items: [],
  auth: false,
  PlanType: "",
  Address: {},
  // order:{
  foodId: "",
  deliveryAddress: {},
  orde: orde // }

};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log(action.type);
  console.log(action.payload);

  switch (action.type) {
    case "GET_ITEMS":
      // console.log(action.payload._id);
      //localStorage.setItem("item", action.payload.item.items._id);
      return _objectSpread({}, state, {
        items: action.payload
      });

    case _Actions_Types__WEBPACK_IMPORTED_MODULE_1__["Get_Food"]:
      // console.log(action.payload._id);
      //localStorage.setItem("item", action.payload.item.items._id);
      return _objectSpread({}, state, {
        items: action.payload
      });

    case _Actions_Types__WEBPACK_IMPORTED_MODULE_1__["Post_Plan"]:
      return _objectSpread({}, state, {
        PlanType: action.payload
      });

    case _Actions_Types__WEBPACK_IMPORTED_MODULE_1__["Post_Add"]:
      return _objectSpread({}, state, {
        Address: _objectSpread({}, state.Address, {}, action.payload)
      });

    case _Actions_Types__WEBPACK_IMPORTED_MODULE_1__["Get_Add"]:
      return _objectSpread({}, state, {
        Address: _objectSpread({}, state.Address, {}, action.payload)
      });

    default:
      return state;
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.3234efacb62efe43c7d3.hot-update.js.map