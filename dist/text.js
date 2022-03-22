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
let KaskusText = class extends s {
  constructor() {
    super(...arguments);
    this.text = "";
    this.color = "primary";
    this.variant = "paragraph";
    this.size = "medium";
  }
  getClass() {
    return this.variant + " " + this.size + " " + this.color + " " + night;
  }
  render() {
    switch (this.variant) {
      case "paragraph":
        return $`
          <p class="${this.getClass()}">${this.text || this.innerHTML}</p>
        `;
      case "caption":
        return $`
          <caption class="${this.getClass()}">${this.text || this.innerHTML}</caption>
        `;
      default:
        return null;
    }
  }
};
KaskusText.styles = r`
    :host {
      font-family : Roboto;
    }
    .large{
      font-size : 16px;
    }
    .medium{
      font-size : 14px;
    }
    .small{
      font-size : 12px;
    }

    .secondary{
      color : ${color.secondaryGrey}
    }

    .primary{
      color : ${color.primaryGrey}
    }

    .tertiary{
      color : ${color.tertiaryGrey}
    }

    .primary.nightmode{
      color : ${color.primaryGreyNight}
    }

    .secondary.nightmode{
      color : ${color.secondaryGreyNight}
    }

    .tertiary.nightmode{
      color : ${color.tertiaryGreyNight}
    }

    caption{
      display:inline;
    }
  `;
__decorateClass([
  e()
], KaskusText.prototype, "text", 2);
__decorateClass([
  e()
], KaskusText.prototype, "color", 2);
__decorateClass([
  e()
], KaskusText.prototype, "variant", 2);
__decorateClass([
  e()
], KaskusText.prototype, "size", 2);
KaskusText = __decorateClass([
  n(customElementNames.kaskusText)
], KaskusText);
export { KaskusText };
