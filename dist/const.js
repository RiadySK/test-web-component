var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { r } from "./index.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$1 = (n2) => (e2) => typeof e2 == "function" ? ((n3, e3) => (window.customElements.define(n3, e3), e3))(n2, e2) : ((n3, e3) => {
  const { kind: t, elements: i2 } = e3;
  return { kind: t, elements: i2, finisher(e4) {
    window.customElements.define(n3, e4);
  } };
})(n2, e2);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i = (i2, e2) => e2.kind === "method" && e2.descriptor && !("value" in e2.descriptor) ? __spreadProps(__spreadValues({}, e2), { finisher(n2) {
  n2.createProperty(e2.key, i2);
} }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e2.key, initializer() {
  typeof e2.initializer == "function" && (this[e2.key] = e2.initializer.call(this));
}, finisher(n2) {
  n2.createProperty(e2.key, i2);
} };
function e(e2) {
  return (n2, t) => t !== void 0 ? ((i2, e3, n3) => {
    e3.constructor.createProperty(n3, i2);
  })(e2, n2, t) : i(e2, n2);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var n;
((n = window.HTMLSlotElement) === null || n === void 0 ? void 0 : n.prototype.assignedElements) != null ? (o, n2) => o.assignedElements(n2) : (o, n2) => o.assignedNodes(n2).filter((o2) => o2.nodeType === Node.ELEMENT_NODE);
const color = {
  primary: r`#0082c6`,
  primaryHover: r`#0082c6b3`,
  primaryLightHover: r`#0082c61a`,
  primaryNight: r`#57acd9`,
  primaryNightHover: r`#57acd9b3`,
  primaryNightLightHover: r`#57acd966`,
  blue: r`#0082c6`,
  blueHover: r`#0082c6b3`,
  blueHover1: r`#0082c61a`,
  blueLightHover: r`0082c61a`,
  blueNight: r`#57acd9`,
  blueNightHover: r`#57acd9b3`,
  blueNightLightHover: r`#57acd966`,
  red: r`#ed1b34`,
  redNight: r`#e4555d`,
  yellow: r`#faa61a`,
  yellowNight: r`#fdba4d`,
  white: r`#ffffff`,
  repGreen: r`#30c436`,
  repGreenLight: r`#60e38f`,
  repRed: r`#c82a32`,
  repRedLight: r`#e4555d`,
  repNeutral: r`#cccccc`,
  repDisabled: r`#454545`,
  "grey-0": r`#f9f9f9`,
  "grey-1": r`#ebebeb`,
  "grey-2": r`#d9d9d9`,
  "grey-3": r`#c7c7c7`,
  "grey-4": r`#b3b3b3`,
  "grey-5": r`#5c5c5c`,
  "grey-6": r`#333333`,
  "grey-7": r`#202020`,
  "grey-8": r`#171717`,
  primaryGrey: r`#202020`,
  secondaryGrey: r`#5c5c5c`,
  tertiaryGrey: r`#b3b3b3`,
  primaryGreyNight: r`#ebebeb`,
  secondaryGreyNight: r`#c7c7c7`,
  tertiaryGreyNight: r`#5c5c5c`
};
const fontSize = {
  default: r`16px`,
  "size-1": r`8px`,
  "size-2": r`10px`,
  "size-3": r`12px`,
  "size-4": r`14px`,
  "size-5": r`16px`,
  "size-6": r`18px`,
  "size-7": r`20px`
};
export { color as c, e, fontSize as f, n$1 as n };
