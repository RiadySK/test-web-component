import { s, $, r, c as customElementNames } from "./index.js";
import { n as night, c as color, e, a as n } from "./nightmode.js";
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
let KaskusTab = class extends s {
  constructor() {
    super(...arguments);
    this.variant = "";
    this.text = "";
  }
  getClass() {
    return "tab " + this.variant + " " + night;
  }
  render() {
    return $`
      <div @click=${this._onClick} class=${this.getClass()}>
        <div class="text">${this.text}</div>
      </div>
    `;
  }
  _onClick() {
  }
};
KaskusTab.styles = r`
    .tab {
      padding : 12px 16px;
      cursor : pointer;
      display : inline-block;
      border-bottom: 3px solid transparent;
      margin-right: -4px;
    }

    .text{
      font-size : 14px;
      font-family : 'Roboto';
      color : ${color["grey-4"]};
    }
    
    .tab:hover .text, .selected .text{
      color : ${color.blue};
    }
    .tab:hover, .selected {
      border-bottom: 3px solid ${color.blue};
    }

    .tab.nightmode:hover .text, .selected.nightmode .text{
      color : ${color.blueNight};
    }
    .tab.nightmode:hover, .selected.nightmode {
      border-bottom: 3px solid ${color.blueNight};
    }
  `;
__decorateClass([
  e()
], KaskusTab.prototype, "variant", 2);
__decorateClass([
  e()
], KaskusTab.prototype, "text", 2);
KaskusTab = __decorateClass([
  n(customElementNames.kaskusTab)
], KaskusTab);
export { KaskusTab };
