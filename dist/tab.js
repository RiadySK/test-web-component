import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";
import { c as customElementNames } from "./index.js";
import { c as color } from "./const.js";
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
let KaskusTab = class extends LitElement {
  constructor() {
    super(...arguments);
    this.variant = "";
    this.text = "";
  }
  render() {
    return html`
      <div @click=${this._onClick} class="tab ${this.variant}">
          <div class="text">${this.text}</div>
      </div>
    `;
  }
  _onClick() {
  }
};
KaskusTab.styles = css`
    .tab {
      padding : 0 16px 12px 16px;
      cursor : pointer;
      display : inline-block;
      border-bottom: 3px solid transparent;
      margin-right: -4px;
    }
    .text{
      color : ${color["grey-4"]};
      font-family : Roboto;
      font-size : 14px;
    }
    .tab:hover .text, .selected .text{
      color : ${color.primary};
    }
    .tab:hover, .selected{
      border-bottom: 3px solid ${color.blue};
    }
  `;
__decorateClass([
  property()
], KaskusTab.prototype, "variant", 2);
__decorateClass([
  property()
], KaskusTab.prototype, "text", 2);
KaskusTab = __decorateClass([
  customElement(customElementNames.kaskusTab)
], KaskusTab);
export { KaskusTab };
