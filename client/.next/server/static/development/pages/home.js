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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CarouselComponent.js":
/*!*****************************************!*\
  !*** ./components/CarouselComponent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CarouselComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\nextjs-blog\\client\\components\\CarouselComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




class CarouselComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
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
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Carousel"], _extends({
      ref: node => this.carousel = node
    }, props, {
      autoplay: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    }), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      className: "chefContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }
    }, __jsx("img", {
      className: "chef",
      src: "./images/chef1.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      style: {
        width: "550px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      style: {
        height: "233px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, __jsx("p", {
      style: {
        height: "176px"
      },
      className: "cheflines",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    }, " ", "\" I coocked traditional recipes that are ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 62
      }
    }), " scacred in my family ,to share my love", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }), " for food\".", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }
    }), __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    }, "Rahul")))))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      className: "chefContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }
    }, __jsx("img", {
      className: "chef",
      src: "./images/chef2.jpeg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      style: {
        width: "550px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      style: {
        height: "233px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, __jsx("p", {
      style: {
        height: "176px"
      },
      className: "cheflines",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }
    }, " ", "\" I coocked traditional recipes that are ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 62
      }
    }), " scacred in my family ,to share my love", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }), " for food.", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }), __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, "Rahul")))))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      className: "chefContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }, __jsx("img", {
      className: "chef",
      src: "./images/chef3.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      style: {
        width: "550px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      style: {
        height: "233px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }, __jsx("p", {
      style: {
        height: "176px"
      },
      className: "cheflines",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 19
      }
    }, " ", "\" I coocked traditional recipes that are ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 62
      }
    }), " scacred in my family ,to share my love", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }
    }), " for food.", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }
    }), __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }
    }, "Rahul"))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      style: {
        marginLeft: "309px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      id: "courselBtn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }
    }, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowLeftOutlined"], {
      onClick: this.previous,
      id: "courselShift",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      id: "courselBtn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowRightOutlined"], {
      onClick: this.next,
      id: "courselShift",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 13
      }
    }))));
  }

}

/***/ }),

/***/ "./components/ContactUs.js":
/*!*********************************!*\
  !*** ./components/ContactUs.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ContactUs.module.css */ "./styles/ContactUs.module.css");
/* harmony import */ var _styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\nextjs-blog\\client\\components\\ContactUs.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
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

const prefixSelector = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
  name: "prefix",
  noStyle: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 3
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
  style: {
    width: "70px"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }
}, __jsx(Option, {
  value: "86",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 7
  }
}, "+86"), __jsx(Option, {
  value: "87",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 7
  }
}, "+87"), __jsx(Option, {
  value: "87",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 7
  }
}, "+91")));

const Demo = () => {
  const onFinish = values => {
    console.log(values);
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], _extends({
    className: _styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form
  }, layout, {
    name: "nest-messages",
    onFinish: onFinish,
    validateMessages: validateMessages,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: ["user", "name"],
    label: "Name",
    rules: [{
      required: true
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "phone",
    label: "Phone Number",
    rules: [{
      required: true,
      message: "Please input your phone number!"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    addonBefore: prefixSelector,
    style: {
      width: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: ["user", "introduction"],
    label: "Introduction",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    wrapperCol: _objectSpread({}, layout.wrapperCol, {
      offset: 8
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, "Submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/footer.module.css */ "./styles/footer.module.css");
/* harmony import */ var _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\nextjs-blog\\client\\components\\footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function footer() {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    className: "footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "./images/footer.jpg",
    style: {
      position: "absolute",
      width: "100%",
      height: "100%",
      objectFit: " cover",
      filter: "brightness(50%)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 9,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "logo",
    style: {
      marginLeft: "151px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("img", {
    style: {
      borderRadius: "8px"
    },
    src: "./images/logo2.jpeg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.h2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Contact"), __jsx("ul", {
    className: _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Lorem ipsum #239,trcity plaza"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "peermuchalla. zirakpur,mohali"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "Telephone: +91 99999-88888"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "E-mail: mail@mealbox.com"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.h2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Menu"), __jsx("ul", {
    className: _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "About us"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Our Food"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "Plans"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "Contact us"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.h2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Follow Us"), __jsx("ul", {
    className: _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["FacebookOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["TwitterOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  })))), __jsx("hr", {
    style: {
      zIndex: "1",
      width: "100%",
      margin: "0px",
      opacity: "0.5"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx("p", {
    style: {
      color: "white",
      zIndex: "1",
      fontSize: "15px",
      marginLeft: "auto",
      marginRight: "auto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, " ", "\xA9 All Right Reserved")));
}

/***/ }),

/***/ "./components/googleMap.js":
/*!*********************************!*\
  !*** ./components/googleMap.js ***!
  \*********************************/
/*! exports provided: MapContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapContainer", function() { return MapContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps-react */ "google-maps-react");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\nextjs-blog\\client\\components\\googleMap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class MapContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "displayMarkers", () => {
      return this.state.stores.map((store, index) => {
        return __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
          key: index,
          id: index,
          position: {
            lat: store.latitude,
            lng: store.longitude
          },
          onClick: () => console.log("You clicked me!"),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 9
          }
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
    return __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["Map"], {
      google: this.props.google,
      zoom: 8,
      style: mapStyles,
      initialCenter: {
        lat: 47.444,
        lng: -122.176
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }
    }, this.displayMarkers());
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["GoogleApiWrapper"])({
  apiKey: "AIzaSyCD113R12IhhXRPyUqAvpvyKqc8bio6Liw"
})(MapContainer));

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_typography_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/typography/Title */ "antd/lib/typography/Title");
/* harmony import */ var antd_lib_typography_Title__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_Title__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
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



const {
  Header,
  Slider,
  Content
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];







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
      float: "right",
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
    src: "./images/food-delivery.png",
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
    src: "./images/breakfast.png",
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
    src: "./images/reception.png",
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

/***/ }),

/***/ "./styles/ContactUs.module.css":
/*!*************************************!*\
  !*** ./styles/ContactUs.module.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "ContactUs_form__3LIR_"
};

/***/ }),

/***/ "./styles/footer.module.css":
/*!**********************************!*\
  !*** ./styles/footer.module.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "footer_list__3N9si",
	"h2": "footer_h2__1EcZ1",
	"list2": "footer_list2__3Ne-V"
};

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\nextjs-blog\client\pages\home.js */"./pages/home.js");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "antd/lib/typography/Title":
/*!********************************************!*\
  !*** external "antd/lib/typography/Title" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/typography/Title");

/***/ }),

/***/ "google-maps-react":
/*!************************************!*\
  !*** external "google-maps-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-maps-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=home.js.map