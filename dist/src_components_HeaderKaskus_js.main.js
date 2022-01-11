"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb_components_lit"] = self["webpackChunkweb_components_lit"] || []).push([["src_components_HeaderKaskus_js"],{

/***/ "./src/components/HeaderKaskus.js":
/*!****************************************!*\
  !*** ./src/components/HeaderKaskus.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderKaskus\": () => (/* binding */ HeaderKaskus)\n/* harmony export */ });\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nclass HeaderKaskus extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {\n  // Define scoped styles right with your component, in plain CSS\n  constructor() {\n    super(); // Declare reactive properties\n\n    this.text = 'Button';\n    this.variant = 'primary';\n    this.size = 'regular';\n  } // Render the UI as a function of component state\n\n\n  render() {\n    return lit__WEBPACK_IMPORTED_MODULE_0__.html`\n      <div class=\"${this.variant} ${this.size}\">header ${this.text}</div>\n    `;\n  }\n\n}\n\n_defineProperty(HeaderKaskus, \"properties\", {\n  text: {},\n  variant: {},\n  size: {}\n});\n\n_defineProperty(HeaderKaskus, \"styles\", lit__WEBPACK_IMPORTED_MODULE_0__.css`\n    :host {\n      color: blue;\n    }\n  `);\n\ncustomElements.define('header-kaskus', HeaderKaskus);\n\n//# sourceURL=webpack://web-components-lit/./src/components/HeaderKaskus.js?");

/***/ })

}]);