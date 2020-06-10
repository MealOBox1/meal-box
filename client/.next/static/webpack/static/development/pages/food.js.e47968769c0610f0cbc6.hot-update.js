webpackHotUpdate("static\\development\\pages\\food.js",{

/***/ "./pages/food.js":
/*!***********************!*\
  !*** ./pages/food.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _userlayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userlayout */ "./pages/userlayout.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _styles_food_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/food.module.css */ "./styles/food.module.css");
/* harmony import */ var _styles_food_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_food_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Actions_ItemsAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Actions/ItemsAction */ "./Actions/ItemsAction.js");
/* harmony import */ var _Actions_OrderAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Actions/OrderAction */ "./Actions/OrderAction.js");

var _jsxFileName = "E:\\nextjs-blog\\client\\pages\\food.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var Meta = antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta;

function Food(props) {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    meals: "lunch",
    veg: "true"
  }),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    loading: false,
    visible: false
  }),
      modalProps = _useState2[0],
      setmodalProps = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      value = _useState3[0],
      setvalue = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    id: "",
    su: su
  }),
      foodId = _useState4[0],
      setfoodId = _useState4[1];

  var showModal = function showModal() {
    setmodalProps(function (prevState) {
      return _objectSpread({}, prevState, {
        visible: true
      });
    });
    setfoodId(function (prevState) {
      return _objectSpread({}, prevState, {
        id: props.menu[0]._id
      });
    });
  };

  var handleOk = function handleOk() {
    setmodalProps(function (prevState) {
      return _objectSpread({}, prevState, {
        loading: true
      });
    });
    setTimeout(function () {
      setmodalProps(function (prevState) {
        return _objectSpread({}, prevState, {
          loading: false,
          visible: false
        });
      });
      console.log(foodId);
      props.Orderfood(foodId);
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/shipping");
    }, 3000);
  };

  var handleCancel = function handleCancel() {
    setmodalProps(function (prevState) {
      return _objectSpread({}, prevState, {
        visible: false
      });
    });
  };

  var handleChange = function handleChange(event) {
    setState(function (prevState) {
      return _objectSpread({}, prevState, {
        veg: event
      });
    });
    console.log(state);
  };

  var handlemeal = function handlemeal(event) {
    console.log(event.item.props.children[1].props.children);
    setState(function (prevState) {
      return _objectSpread({}, prevState, {
        meals: event.item.props.children[1].props.children
      });
    }); // getItems(state);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(state);
    props.getItems(state);
  }, [state]);

  var onchange = function onchange(e) {
    setvalue(e.target.value);
  };

  var selectedFood = function selectedFood(event) {
    console.log(event.target);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx(_userlayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      marginTop: "75px",
      justifyContent: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "site-card-border-less-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: {
      borderLeft: "3px solid #74cf4e"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, "All deliveries"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      flexDirection: "row",
      width: "600px",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    shape: "round",
    style: {
      width: "250px",
      borderRadius: "21px"
    },
    placeholder: "input search text" //   enterButton="Search"
    ,
    size: "large" //  onSearch={(value) => console.log(value)}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    shape: "round",
    style: {
      marginLeft: "46px",
      backgroundColor: "#74cf4e",
      color: "white",
      borderColor: "#74cf4e",
      border: 0
    },
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["SearchOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 25
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, "Search"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    onClick: handleChange,
    style: {
      marginLeft: " 80px",
      backgroundColor: "#74cf4e" // width: " 77px",

    },
    checkedChildren: "veg",
    unCheckedChildren: "Non-veg",
    defaultChecked: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    mode: "horizontal" // style={{ boxShadow: "1px 4px 6px #888888", borderRadius: " 30px" }}
    ,
    defaultSelectedKeys: ["2"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "1",
    style: {
      height: "58px"
    },
    onClick: handlemeal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, " Breakfast")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "2",
    style: {
      height: "58px"
    },
    onClick: handlemeal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }, "lunch")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "3",
    style: {
      height: "58px"
    },
    onClick: handlemeal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }, "dinner")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "4",
    style: {
      height: "58px"
    },
    onClick: handlemeal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }, "Snacks")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      //  justifyContent: "space-between",
      width: "600px",
      flexFlow: "row wrap",
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 15
    }
  }, props.menu.map(function (el) {
    return (// <Link href="/posts/[fid]" as={`/posts/${el._id}`}>
      __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        onClick: showModal,
        hoverable: true,
        className: "Styles.antCardBody",
        bodyStyle: {
          padding: "0",
          fontSize: "9px"
        },
        style: {
          width: 117,
          marginLeft: "20px"
        },
        cover: __jsx("img", {
          alt: "example",
          src: "./images/plate.jpg",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 28
          }
        }),
        key: el._id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 19
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }
      }, el.menu), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 21
        }
      }, "Special 1 plate")) // </Link>

    );
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    visible: modalProps.visible // title="Title"
    ,
    style: {
      padding: 0
    },
    bodyStyle: {
      padding: 0
    },
    onOk: handleOk,
    onCancel: handleCancel,
    footer: [__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: "back",
      onClick: handleCancel,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 13
      }
    }, "Return"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"] //   type="primary"
    , {
      shape: "round" //icon={<DownloadOutlined />}
      ,
      size: "large",
      style: {
        // marginLeft: "246px",
        marginTop: "39px",
        backgroundColor: "#74cf4e",
        color: "white"
      },
      value: "Silver",
      id: "silver" //onClick={choosePlan}
      ,
      key: "submit",
      type: "primary",
      loading: modalProps.loading,
      onClick: handleOk,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 13
      }
    }, "Confirm")],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      width: " 521px",
      height: "121px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 11
    }
  }, __jsx("img", {
    alt: "example",
    src: "./images/plate.jpg",
    style: {
      height: "inherit",
      width: "520px",
      objectFit: "cover"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      borderBottom: "1px solid #dfdddd"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    style: {
      borderRight: "1px solid #dfdddd",
      padding: "11px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 15
    }
  }, "Roti,Daal & Rice"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 15
    }
  }, "Special 1 Plate , 4 Roti")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    style: {
      padding: "11px",
      display: "flex",
      flexDirection: "row"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      marginLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 15
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 17
    }
  }, "Jone Doe"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 17
    }
  }, "Krishn food")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      flexDirection: " column",
      marginTop: "15px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 11
    }
  }, __jsx("h3", {
    style: {
      marginLeft: "15px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 13
    }
  }, "Choose Subscription Plan"), __jsx("div", {
    style: {
      marginLeft: "15px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Group, {
    onChange: onchange,
    value: value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"], {
    className: _styles_food_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.radioStyle,
    value: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 17
    }
  }, "3 Days Subscription Plan"), value == 1 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 21
    }
  }, "hi")) : null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"], {
    className: _styles_food_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.radioStyle,
    value: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 17
    }
  }, "6 Days Subscription Plan"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"], {
    className: _styles_food_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.radioStyle,
    value: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 17
    }
  }, "14 Days Subscription Plan"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"], {
    className: _styles_food_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.radioStyle,
    value: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 17
    }
  }, "28 Days Subscription Plan")))))));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    menu: state.item.items
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, {
  getItems: _Actions_ItemsAction__WEBPACK_IMPORTED_MODULE_9__["getItems"],
  Orderfood: _Actions_OrderAction__WEBPACK_IMPORTED_MODULE_10__["Orderfood"]
})(Food));

/***/ })

})
//# sourceMappingURL=food.js.e47968769c0610f0cbc6.hot-update.js.map