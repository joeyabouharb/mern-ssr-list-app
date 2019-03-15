/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (originalModule) {\n  if (!originalModule.webpackPolyfill) {\n    var module = Object.create(originalModule); // module.parent = undefined by default\n\n    if (!module.children) module.children = [];\n    Object.defineProperty(module, \"loaded\", {\n      enumerable: true,\n      get: function get() {\n        return module.l;\n      }\n    });\n    Object.defineProperty(module, \"id\", {\n      enumerable: true,\n      get: function get() {\n        return module.i;\n      }\n    });\n    Object.defineProperty(module, \"exports\", {\n      enumerable: true\n    });\n    module.webpackPolyfill = 1;\n  }\n\n  return module;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzPzgyYjAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/harmony-module.js\n");

/***/ }),

/***/ "./src/client/components/Notes.js":
/*!****************************************!*\
  !*** ./src/client/components/Notes.js ***!
  \****************************************/
/*! exports provided: Notes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Notes\", function() { return Notes; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Notes = function Notes(props) {\n  var notes = props.notes;\n  console.log(notes);\n  var dom = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, notes.map(function (_ref, index) {\n    var name = _ref.name,\n        description = _ref.description,\n        date = _ref.date;\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: index\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, name, \" \", description, \" \", date));\n  }));\n  console.log(dom);\n  return dom;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTm90ZXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTm90ZXMuanM/ZDg3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuZXhwb3J0IGNvbnN0IE5vdGVzID0gKHByb3BzKSA9PiB7XG4gXG4gICAgY29uc3Qge25vdGVzfSA9IHByb3BzO1xuICAgIGNvbnNvbGUubG9nKG5vdGVzKTtcbiAgICBjb25zdCBkb20gPSAoXG4gICAgPGRpdj5cbiAgICB7XG4gICAgICBub3Rlcy5tYXAoKHtuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZX0sIGluZGV4KSA9PiB7XG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgIDxzcGFuPntuYW1lfSB7ZGVzY3JpcHRpb259IHtkYXRlfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9KVxuICAgIH1cbiAgICA8L2Rpdj5cbiAgICApXG4gICAgY29uc29sZS5sb2coZG9tKTtcbiAgICByZXR1cm4gZG9tO1xuICB9XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBSUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client/components/Notes.js\n");

/***/ }),

/***/ "./src/client/components/add.js":
/*!**************************************!*\
  !*** ./src/client/components/add.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Add; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Add =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Add, _Component);\n\n  function Add(props) {\n    var _this;\n\n    _classCallCheck(this, Add);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Add).call(this, props));\n    _this.state = {\n      name: '',\n      severity: '',\n      description: ''\n    };\n    _this.onDescriptionChange = _this.onDescriptionChange.bind(_assertThisInitialized(_this));\n    _this.onNameChange = _this.onNameChange.bind(_assertThisInitialized(_this));\n    _this.onSeverityChange = _this.onSeverityChange.bind(_assertThisInitialized(_this));\n    _this.submitForm = _this.submitForm.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Add, [{\n    key: \"submitForm\",\n    value: function submitForm(event) {\n      event.preventDefault();\n      var notes = {\n        name: this.state.name,\n        severity: this.state.severity,\n        description: this.state.description\n      };\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/add', notes).then(function (response) {\n        alert(response.data);\n      }).catch(function (error) {\n        throw error;\n      });\n    }\n  }, {\n    key: \"onNameChange\",\n    value: function onNameChange(event) {\n      this.setState({\n        name: event.target.value\n      });\n    }\n  }, {\n    key: \"onSeverityChange\",\n    value: function onSeverityChange(event) {\n      this.setState({\n        severity: event.target.value\n      });\n    }\n  }, {\n    key: \"onDescriptionChange\",\n    value: function onDescriptionChange(event) {\n      this.setState({\n        description: event.target.value\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Add Note\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n        onSubmit: this.submitForm\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormGroup\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], null, \"Note Name\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n        value: this.state.name,\n        onChange: this.onNameChange,\n        placeholder: \"with a placeholder\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormGroup\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], null, \"Severity\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n        className: \"custom-select\",\n        value: this.state.severity,\n        onChange: this.onSeverityChange,\n        type: \"select\",\n        name: \"electselect\",\n        id: \"exampleSelect\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: \"Low\"\n      }, \"Low\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: \"Medium\"\n      }, \"Medium\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: \"High\"\n      }, \"High\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormGroup\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], null, \"Description\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n        className: \"form-control rounded-0\",\n        value: this.state.description,\n        onChange: this.onDescriptionChange\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n        type: \"submit\",\n        value: \"Submit\"\n      })));\n    }\n  }]);\n\n  return Add;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYWRkLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL2FkZC5qcz9jZDVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZvcm0sIEZvcm1Hcm91cCwgTGFiZWwsIElucHV0fSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHNldmVyaXR5OiAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICB9O1xuICAgIHRoaXMub25EZXNjcmlwdGlvbkNoYW5nZSA9IHRoaXMub25EZXNjcmlwdGlvbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25OYW1lQ2hhbmdlID0gIHRoaXMub25OYW1lQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblNldmVyaXR5Q2hhbmdlID0gdGhpcy5vblNldmVyaXR5Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdWJtaXRGb3JtID0gdGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcyk7XG4gIH1cbiAgc3VibWl0Rm9ybShldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBub3RlcyA9IHtcbiAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgIHNldmVyaXR5OiB0aGlzLnN0YXRlLnNldmVyaXR5LFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuc3RhdGUuZGVzY3JpcHRpb25cbiAgICB9O1xuICAgIGF4aW9zLnBvc3QoJy9hcGkvYWRkJywgbm90ZXMpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBhbGVydChyZXNwb25zZS5kYXRhKTtcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTmFtZUNoYW5nZShldmVudCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuYW1lOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cbiAgb25TZXZlcml0eUNoYW5nZShldmVudCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZXZlcml0eTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG4gIG9uRGVzY3JpcHRpb25DaGFuZ2UoZXZlbnQpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGVzY3JpcHRpb246IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5BZGQgTm90ZTwvaDI+XG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm19PlxuICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgIDxMYWJlbD5Ob3RlIE5hbWU8L0xhYmVsPlxuICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17dGhpcy5vbk5hbWVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwid2l0aCBhIHBsYWNlaG9sZGVyXCIgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgPExhYmVsPlNldmVyaXR5PC9MYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImN1c3RvbS1zZWxlY3RcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZXZlcml0eX0gb25DaGFuZ2U9e3RoaXMub25TZXZlcml0eUNoYW5nZX0gdHlwZT1cInNlbGVjdFwiIG5hbWU9XCJlbGVjdHNlbGVjdFwiIGlkPVwiZXhhbXBsZVNlbGVjdFwiPlxuICAgICAgICAgICAgPG9wdGlvbj48L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMb3dcIiA+TG93PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWVkaXVtXCIgPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgIDxMYWJlbD5EZXNjcmlwdGlvbjwvTGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCByb3VuZGVkLTBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn0gb25DaGFuZ2U9e3RoaXMub25EZXNjcmlwdGlvbkNoYW5nZX0+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIDxJbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIi8+XG4gICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBV0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBSUE7Ozs7QUFyRUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/components/add.js\n");

/***/ }),

/***/ "./src/client/components/app.js":
/*!**************************************!*\
  !*** ./src/client/components/app.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes_routeController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../routes/routeController */ \"./src/routes/routeController.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Nav\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        className: \"nav-item nav-link\",\n        to: \"/\"\n      }, \"Home\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        className: \"nav-item nav-link\",\n        to: \"/add\"\n      }, \"add note\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__[\"Switch\"], null, _routes_routeController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(function (_ref) {\n        var path = _ref.path,\n            exact = _ref.exact,\n            Component = _ref.component,\n            rest = _objectWithoutProperties(_ref, [\"path\", \"exact\", \"component\"]);\n\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n          key: path,\n          path: path,\n          exact: exact,\n          render: function render(props) {\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, rest));\n          }\n        });\n      })));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL2FwcC5qcz9mYjUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJvdXRlQ29udHJvbGxlciBmcm9tICcuLi8uLi9yb3V0ZXMvcm91dGVDb250cm9sbGVyJztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge1N3aXRjaCwgUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7Q29udGFpbmVyLCBSb3csIE5hdn0gZnJvbSAncmVhY3RzdHJhcCc7XG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuIFxuICByZW5kZXIoKXtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFJvdz5cbiAgICAgICAgPE5hdj5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiIHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiB0bz1cIi9hZGRcIj5hZGQgbm90ZTwvTGluaz5cbiAgICAgIDwvTmF2PlxuICAgICAgPC9Sb3c+XG4gICAgICA8U3dpdGNoPlxuICAgICAge3JvdXRlQ29udHJvbGxlci5tYXAoKHsgcGF0aCwgZXhhY3QsIGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pID0+IChcbiAgICAgICAgPFJvdXRlIGtleT17cGF0aH0gcGF0aD17cGF0aH0gZXhhY3Q9e2V4YWN0fSByZW5kZXI9eyhwcm9wcykgPT4gKFxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnByb3BzfSB7Li4ucmVzdH0gLz5cbiAgICAgICAgKX0gLz5cbiAgICAgICkpfVxuICAgIDwvU3dpdGNoPlxuXG4gICAgPC9Db250YWluZXI+XG4gICAgICBcbiAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQVVBOzs7O0FBdEJBO0FBQ0E7QUF3QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/components/app.js\n");

/***/ }),

/***/ "./src/client/components/home.js":
/*!***************************************!*\
  !*** ./src/client/components/home.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_noteService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/noteService */ \"./src/services/noteService.js\");\n/* harmony import */ var _Notes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Notes */ \"./src/client/components/Notes.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar Home =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Home, _Component);\n\n  function Home(props) {\n    var _this;\n\n    _classCallCheck(this, Home);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));\n\n    if (props.staticContext && props.staticContext.data) {\n      _this.state = {\n        notes: props.staticContext.data\n      };\n    } else {\n      _this.state = {\n        notes: []\n      };\n    }\n\n    return _this;\n  }\n\n  _createClass(Home, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      setTimeout(function () {\n        if (window.__R_DATA) {\n          _this2.setState({\n            notes: window.__R_DATA\n          });\n\n          delete window.__R_DATA;\n        } else {\n          Object(_services_noteService__WEBPACK_IMPORTED_MODULE_2__[\"getNotes\"])().then(function (notes) {\n            _this2.setState({\n              notes: notes\n            });\n          });\n        }\n      }, 0);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var notes = this.state.notes;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Home Page\"), notes.map(function (note) {\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          key: note._id\n        }, note.name);\n      }));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvaG9tZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9ob21lLmpzPzMwODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDb250YWluZXIsIFJvd30gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBnZXROb3RlcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdGVTZXJ2aWNlJztcbmltcG9ydCB7Tm90ZXN9IGZyb20gJy4vTm90ZXMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgIHN1cGVyKHByb3BzKTtcbiAgIGlmIChwcm9wcy5zdGF0aWNDb250ZXh0ICYmIHByb3BzLnN0YXRpY0NvbnRleHQuZGF0YSkge1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBub3RlczogcHJvcHMuc3RhdGljQ29udGV4dC5kYXRhXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbm90ZXM6IFtdLFxuICAgIH07XG4gIH1cbiAgIFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAod2luZG93Ll9fUl9EQVRBKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG5vdGVzOiB3aW5kb3cuX19SX0RBVEFcbiAgICAgICAgfSk7XG4gICAgICAgIGRlbGV0ZSB3aW5kb3cuX19SX0RBVEE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXROb3RlcygpLnRoZW4obm90ZXMgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbm90ZXMsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge25vdGVzfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5Ib21lIFBhZ2U8L2gyPlxuICAgICAgICB7XG4gICAgICAgICAgbm90ZXMubWFwKG5vdGUgPT4ge1xuICAgICAgICAgICAgKDxkaXYga2V5PXtub3RlLl9pZH0+e25vdGUubmFtZX08L2Rpdj4pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBWEE7QUFZQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUVBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFLQTs7OztBQTVDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/components/home.js\n");

/***/ }),

/***/ "./src/routes/routeController.js":
/*!***************************************!*\
  !*** ./src/routes/routeController.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_components_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/components/home */ \"./src/client/components/home.js\");\n/* harmony import */ var _client_components_add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/components/add */ \"./src/client/components/add.js\");\n\n\nvar routeController = [{\n  path: '/',\n  exact: true,\n  component: _client_components_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/home',\n  component: _client_components_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/add',\n  component: _client_components_add__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routeController);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzL3JvdXRlQ29udHJvbGxlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvcm91dGVDb250cm9sbGVyLmpzP2I0NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhvbWUgZnJvbSAnLi4vY2xpZW50L2NvbXBvbmVudHMvaG9tZSc7XG5pbXBvcnQgQWRkIGZyb20gJy4uL2NsaWVudC9jb21wb25lbnRzL2FkZCc7XG5jb25zdCByb3V0ZUNvbnRyb2xsZXIgPSAgW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIGNvbXBvbmVudDogSG9tZSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvaG9tZScsXG4gICAgY29tcG9uZW50OiBIb21lLFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9hZGQnLFxuICAgIGNvbXBvbmVudDogQWRkLFxuICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZUNvbnRyb2xsZXI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/routeController.js\n");

/***/ }),

/***/ "./src/server/api/apiRoutes.js":
/*!*************************************!*\
  !*** ./src/server/api/apiRoutes.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_Note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Note */ \"./src/server/models/Note.js\");\n/* harmony import */ var _models_Note__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Note__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar routes = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nroutes.get('/get-notes', function (req, res) {\n  _models_Note__WEBPACK_IMPORTED_MODULE_1___default.a.find(function (err, notes) {\n    if (err) {\n      throw err;\n    } else {\n      res.json(notes);\n    }\n  });\n});\nroutes.post('/add', function (req, res) {\n  var _req$body = req.body,\n      name = _req$body.name,\n      severity = _req$body.severity,\n      description = _req$body.description;\n  var newNote = new _models_Note__WEBPACK_IMPORTED_MODULE_1___default.a({\n    name: name,\n    severity: severity,\n    description: description\n  });\n  newNote.save(function (err) {\n    if (err) res.status(500).send(err);\n    res.status(200).send('success');\n  });\n});\nmodule.exports = routes;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyL2FwaS9hcGlSb3V0ZXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2FwaS9hcGlSb3V0ZXMuanM/ZDkwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBOb3RlIGZyb20gJy4uL21vZGVscy9Ob3RlJztcbmNvbnN0IHJvdXRlcyA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlcy5nZXQoJy9nZXQtbm90ZXMnLCAocmVxLCByZXMpID0+IHtcbiAgTm90ZS5maW5kKChlcnIsIG5vdGVzKSA9PiB7XG4gICAgaWYoZXJyKXtcbiAgICAgIHRocm93IGVycjtcbiAgICB9ZWxzZXtcbiAgICAgIHJlcy5qc29uKG5vdGVzKVxuICAgIH1cbiAgfSlcbn0pXG5cbnJvdXRlcy5wb3N0KCcvYWRkJywgKHJlcSwgcmVzKSA9PntcbiAgY29uc3QgeyBuYW1lLCBzZXZlcml0eSwgZGVzY3JpcHRpb24gfSA9IHJlcS5ib2R5O1xuICBjb25zdCBuZXdOb3RlID0gbmV3IE5vdGUoe1xuICAgIG5hbWUsXG4gICAgc2V2ZXJpdHksXG4gICAgZGVzY3JpcHRpb24sXG4gIH0pO1xuICBuZXdOb3RlLnNhdmUoZXJyID0+IHtcbiAgIGlmKGVycikgcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyKTtcbiAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdzdWNjZXNzJyk7XG4gIH0pOyAgXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlczsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/server/api/apiRoutes.js\n");

/***/ }),

/***/ "./src/server/models/Note.js":
/*!***********************************!*\
  !*** ./src/server/models/Note.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema; // Create Schema\n\nvar NoteSchema = new Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  severity: {\n    type: String,\n    required: true\n  },\n  description: {\n    type: String,\n    required: true\n  },\n  date: {\n    type: Date,\n    default: Date.now\n  }\n});\nvar Note = mongoose.model('note', NoteSchema);\nmodule.exports = Note;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyL21vZGVscy9Ob3RlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9tb2RlbHMvTm90ZS5qcz9jODU1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcblxuLy8gQ3JlYXRlIFNjaGVtYVxuY29uc3QgTm90ZVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBuYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIHNldmVyaXR5OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICBkYXRlOiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICBkZWZhdWx0OiBEYXRlLm5vd1xuICB9LFxufSk7XG5jb25zdCBOb3RlID0gbW9uZ29vc2UubW9kZWwoJ25vdGUnLCBOb3RlU2NoZW1hKTtcbm1vZHVsZS5leHBvcnRzID0gTm90ZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQWJBO0FBa0JBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/server/models/Note.js\n");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _api_apiRoutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/apiRoutes */ \"./src/server/api/apiRoutes.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _client_components_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client/components/app */ \"./src/client/components/app.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _services_noteService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/noteService */ \"./src/services/noteService.js\");\n/* eslint-disable no-console */\n\n\n\n\n //middlewares\n\nvar server = express__WEBPACK_IMPORTED_MODULE_0___default()();\n/* set up mongoose to connect to our MongoDb server */\n\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.set('useNewUrlParser', true);\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect('mongodb+srv://admin:Admin123@joeycluster-qflzr.mongodb.net/noteDB?retryWrites=true');\nvar db = mongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connection;\ndb.on('error', function (error) {\n  console.log(error);\n});\ndb.once('open', function () {\n  console.log('Connected to Database');\n}); // set up view render engine\n\nserver.set('views', path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, '../views'));\nserver.set('view engine', 'ejs');\nserver.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public'));\nserver.locals.serialize = serialize_javascript__WEBPACK_IMPORTED_MODULE_4___default.a; // parse application/x-www-form-urlencoded\n\nserver.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({\n  extended: false\n})); // parse application/json\n\nserver.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json());\n\nserver.use('/api', _api_apiRoutes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n\n\n\n\nserver.get('*', function (req, res) {\n  Object(_services_noteService__WEBPACK_IMPORTED_MODULE_10__[\"getNotes\"])().then(function (data) {\n    var context = {\n      data: data\n    };\n    var markup = react_dom_server__WEBPACK_IMPORTED_MODULE_6___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"StaticRouter\"], {\n      location: req.url,\n      context: context\n    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_client_components_app__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)));\n    res.render('index', {\n      markup: markup,\n      data: data\n    });\n  }).catch(function (err) {\n    throw err;\n  });\n});\nserver.listen(8080, function () {\n  return console.log('Server is running...');\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyL3NlcnZlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvc2VydmVyLmpzPzU0NWQiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ3NlcmlhbGl6ZS1qYXZhc2NyaXB0Jztcbi8vbWlkZGxld2FyZXNcbmNvbnN0IHNlcnZlciA9IGV4cHJlc3MoKTtcblxuLyogc2V0IHVwIG1vbmdvb3NlIHRvIGNvbm5lY3QgdG8gb3VyIE1vbmdvRGIgc2VydmVyICovXG5tb25nb29zZS5zZXQoJ3VzZU5ld1VybFBhcnNlcicsIHRydWUpO1xubW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9hZG1pbjpBZG1pbjEyM0Bqb2V5Y2x1c3Rlci1xZmx6ci5tb25nb2RiLm5ldC9ub3RlREI/cmV0cnlXcml0ZXM9dHJ1ZScpO1xuY29uc3QgZGIgPSBtb25nb29zZS5jb25uZWN0aW9uO1xuXG5kYi5vbignZXJyb3InLCAoZXJyb3IpID0+IHtcbiAgY29uc29sZS5sb2coZXJyb3IpO1xufSk7XG5cbmRiLm9uY2UoJ29wZW4nLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gRGF0YWJhc2UnKTtcbn0pO1xuXG4vLyBzZXQgdXAgdmlldyByZW5kZXIgZW5naW5lXG5zZXJ2ZXIuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi92aWV3cycpKTtcbnNlcnZlci5zZXQoJ3ZpZXcgZW5naW5lJywgJ2VqcycpO1xuc2VydmVyLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpO1xuc2VydmVyLmxvY2Fscy5zZXJpYWxpemUgPSBzZXJpYWxpemU7XG5cbi8vIHBhcnNlIGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFxuc2VydmVyLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xuXG4vLyBwYXJzZSBhcHBsaWNhdGlvbi9qc29uXG5zZXJ2ZXIudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcblxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL2FwaS9hcGlSb3V0ZXMnO1xuXG5zZXJ2ZXIudXNlKCcvYXBpJywgcm91dGVzKTtcblxuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnLi4vY2xpZW50L2NvbXBvbmVudHMvYXBwJztcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgZ2V0Tm90ZXMgfSBmcm9tICcuLi9zZXJ2aWNlcy9ub3RlU2VydmljZSc7XG5zZXJ2ZXIuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgXG4gICAgXG4gICAgZ2V0Tm90ZXMoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IHtkYXRhfTtcbiAgICAgIGNvbnN0IG1hcmt1cCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKFxuICAgICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEudXJsfSBjb250ZXh0PXtjb250ZXh0fT5cbiAgICAgICAgICA8QXBwIC8+XG4gICAgICAgIDwvU3RhdGljUm91dGVyPlxuICAgICAgKVxuICAgICAgcmVzLnJlbmRlcignaW5kZXgnLFxuICAgICAgIHttYXJrdXAsIGRhdGF9LFxuICAgICAgICk7XG4gICAgfSkuY2F0Y2goZXJyID0+IHt0aHJvdyBlcnJ9KTtcbn0pO1xuXG5zZXJ2ZXIubGlzdGVuKDgwODAsICgpID0+IGNvbnNvbGUubG9nKCdTZXJ2ZXIgaXMgcnVubmluZy4uLicpKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/server/server.js\n");

/***/ }),

/***/ "./src/services/noteService.js":
/*!*************************************!*\
  !*** ./src/services/noteService.js ***!
  \*************************************/
/*! exports provided: getNotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNotes\", function() { return getNotes; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getNotes() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://localhost:8080/api/get-notes').then(function (response) {\n    return response.data;\n  }).catch(function (error) {\n    throw error;\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvbm90ZVNlcnZpY2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbm90ZVNlcnZpY2UuanM/NjNhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm90ZXMoKXtcbiAgcmV0dXJuIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9nZXQtbm90ZXMnKVxuICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSkuY2F0Y2goZXJyb3IgPT4ge3Rocm93IGVycm9yfSk7XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/noteService.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1wYXJzZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzgxODgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///body-parser\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj83NGJiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtZG9tL3NlcnZlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIj85NDM5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-dom/server\n");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtcm91dGVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyXCI/YTM3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-router\n");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtcm91dGVyLWRvbS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIj81M2I5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-router-dom\n");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reactstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RzdHJhcC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0c3RyYXBcIj8yNDkzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///reactstrap\n");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXplLWphdmFzY3JpcHQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiPzE2ZjkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VyaWFsaXplLWphdmFzY3JpcHRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///serialize-javascript\n");

/***/ })

/******/ });