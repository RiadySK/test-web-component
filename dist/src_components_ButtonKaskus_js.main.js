"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb_components_lit"] = self["webpackChunkweb_components_lit"] || []).push([["src_components_ButtonKaskus_js"],{

/***/ "./src/components/ButtonKaskus.js":
/*!****************************************!*\
  !*** ./src/components/ButtonKaskus.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ButtonKaskus\": () => (/* binding */ ButtonKaskus)\n/* harmony export */ });\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nclass ButtonKaskus extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {\n  // Define scoped styles right with your component, in plain CSS\n  constructor() {\n    super(); // Declare reactive properties\n\n    this.text = 'Button';\n    this.variant = 'primary';\n    this.size = 'regular';\n  } // Render the UI as a function of component state\n\n\n  render() {\n    return lit__WEBPACK_IMPORTED_MODULE_0__.html`\n      <button class=\"${this.variant} ${this.size}\">${this.text}</button>\n    `;\n  }\n\n}\n\n_defineProperty(ButtonKaskus, \"properties\", {\n  text: {},\n  variant: {},\n  size: {}\n});\n\n_defineProperty(ButtonKaskus, \"styles\", lit__WEBPACK_IMPORTED_MODULE_0__.css`\n    :host {\n      color: blue;\n    }\n\n    button {\n      border-radius: 3px;\n      width: 100%;\n      cursor: pointer;\n    }\n\n    .primary {\n      color: #ffffff;\n      background-color: #0082c6;\n      border: solid 1px #0082c6;\n    }\n\n    .primary:hover {\n      background-color: #006094;\n    }\n\n    .secondary {\n      color: #0082c6;\n      background-color: #ffffff;\n      border: solid 1px #0082c6;\n    }\n\n    .secondary:hover {\n      background-color: #e8f4fd;\n    }\n\n    .alternate {\n      color: #5c5c5c;\n      background-color: #ffffff;\n      border: solid 1px #5c5c5c;\n    }\n\n    .alternate:hover {\n      background-color: #ebebeb;\n    }\n\n    .disable {\n      color: #b3b3b3;\n      background-color: #d9d9d9;\n      border: solid 1px #d9d9d9;\n      cursor: default;\n    }\n\n    .disable-alternate {\n      color: #b3b3b3;\n      background-color: #f9f9f9;\n      border: solid 1px #b3b3b3;\n      cursor: default;\n    }\n\n    .text-button {\n      color: #0082c6;\n      background-color: transparent;\n      border: none;\n    }\n\n    .text-button:hover {\n      text-decoration: underline;\n    }\n\n    .regular {\n      padding: 10px;\n      font-size: 14px;\n    }\n\n    .small {\n      padding: 5px;\n      font-size: 12px;\n    }\n\n    .large {\n      padding: 10px;\n      font-size: 18px;\n    }\n\n  `);\n\ncustomElements.define('button-kaskus', ButtonKaskus);\n\n//# sourceURL=webpack://web-components-lit/./src/components/ButtonKaskus.js?");

/***/ })

}]);