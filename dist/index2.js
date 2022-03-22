var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
import { s, $, r, c as customElementNames } from "./index.js";
import { e, n as night, c as color, a as n } from "./nightmode.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function t(t2) {
  return e(__spreadProps(__spreadValues({}, t2), { state: true }));
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let KaskusSharer = class extends s {
  constructor() {
    super(...arguments);
    this._isActive = false;
    this.icon = "share";
    this.color = "grey";
    this.size = "medium";
    this.type = "regular";
    this.direction = "right";
    this.url = "";
    this.title = "";
    this.description = "";
    this.onClickFacebook = this._handleClickFacebook;
    this.onClickMessenger = this._handleClickMessenger;
    this.onClickWhatsapp = this._handleClickWhatsapp;
    this.onClickTwitter = this._handleClickTwitter;
    this.onClickLink = this._handleClickLink;
    this._handleShare = () => {
      if (window && navigator.share) {
        navigator.share({
          title: this.title || document.title,
          text: this.description || window.location.href,
          url: this.url || window.location.href
        });
      } else {
        this._isActive = !this._isActive;
      }
    };
  }
  _handleClickFacebook() {
    eval(`(${this.onClickFacebook})`);
  }
  _handleClickMessenger() {
    eval(`(${this.onClickMessenger})`);
  }
  _handleClickWhatsapp() {
    eval(`(${this.onClickWhatsapp})`);
  }
  _handleClickTwitter() {
    eval(`(${this.onClickTwitter})`);
  }
  _handleClickLink() {
    eval(`(${this.onClickLink})`);
  }
  shareItems() {
    return $`
      <div class="sharer-container">
        <kaskus-icon
          variant="facebook"
          color="${this.color}"
          size="${this.size}"
          @click="${this._handleClickFacebook}"
        ></kaskus-icon>
        <kaskus-icon
          variant="facebook-messenger"
          color="${this.color}"
          size="${this.size}"
          @click="${this._handleClickMessenger}"
        ></kaskus-icon>
        <kaskus-icon
          variant="whatsapp"
          color="${this.color}"
          size="${this.size}"
          @click="${this._handleClickWhatsapp}"
        ></kaskus-icon>
        <kaskus-icon
          variant="twitter"
          color="${this.color}"
          size="${this.size}"
          @click="${this._handleClickTwitter}"
        ></kaskus-icon>
        <kaskus-icon
          variant="link"
          color="${this.color}"
          size="${this.size}"
          @click="${this._handleClickLink}"
        ></kaskus-icon>
      </div>
    `;
  }
  getClass() {
    return `sharer ${this._isActive ? "active" : ""} ${this.direction} ${this.type} ${this.color} ${night}`;
  }
  render() {
    return $`
      <kaskus-icon
        class="${this.getClass()}"
        variant="${this._isActive ? "times" : this.icon}"
        type="${this.type}"
        size="${this.size}"
        color="${this.color}"
        @click="${() => this._handleShare()}"
      >
        ${this.shareItems()}
      </kaskus-icon>
      <slot></slot>
    `;
  }
};
KaskusSharer.styles = r`
    .sharer {
      position: relative;
    }
    
    .sharer-container {
      position: absolute;
      display: none;
      z-index: 99;
      overflow: hidden;
      padding: 1px;
      border-radius: 3px;
      background-color: ${color.white};
    }

    .active .sharer-container {
      display: flex;
    }
    .nightmode .sharer-container {
      background-color: ${color["grey-8"]};
    }

    .grey.outline .sharer-container {
      border: 1px solid ${color.secondaryGreyNight};
    }
    .blue.outline .sharer-container {
      border: 1px solid ${color.blueNight};
    }

    .right .sharer-container {
      left: 100%;
    }
    .left .sharer-container {
      right: 100%;
    }
    .top .sharer-container {
      bottom: 100%;
    }
    .bottom .sharer-container {
      top: 100%;
    }
  `;
__decorateClass([
  t()
], KaskusSharer.prototype, "_isActive", 2);
__decorateClass([
  e({ type: String })
], KaskusSharer.prototype, "icon", 2);
__decorateClass([
  e({ type: String })
], KaskusSharer.prototype, "color", 2);
__decorateClass([
  e({ type: "small" })
], KaskusSharer.prototype, "size", 2);
__decorateClass([
  e({ type: "solid" })
], KaskusSharer.prototype, "type", 2);
__decorateClass([
  e({ type: "left" })
], KaskusSharer.prototype, "direction", 2);
__decorateClass([
  e({ type: String })
], KaskusSharer.prototype, "url", 2);
__decorateClass([
  e({ type: String })
], KaskusSharer.prototype, "title", 2);
__decorateClass([
  e({ type: String })
], KaskusSharer.prototype, "description", 2);
__decorateClass([
  e()
], KaskusSharer.prototype, "onClickFacebook", 2);
__decorateClass([
  e()
], KaskusSharer.prototype, "onClickMessenger", 2);
__decorateClass([
  e()
], KaskusSharer.prototype, "onClickWhatsapp", 2);
__decorateClass([
  e()
], KaskusSharer.prototype, "onClickTwitter", 2);
__decorateClass([
  e()
], KaskusSharer.prototype, "onClickLink", 2);
KaskusSharer = __decorateClass([
  n(customElementNames.kaskusSharer)
], KaskusSharer);
export { KaskusSharer };
