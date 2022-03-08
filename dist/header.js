import { s, $, r, c as customElementNames } from "./index.js";
import { c as color, e, n } from "./const.js";
import { n as night } from "./nightmode.js";
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
let KaskusHeader = class extends s {
  constructor() {
    super(...arguments);
    this.text = "";
    this.color = "primary";
    this.variant = "h1";
    this.font = "roboto";
  }
  getClass() {
    return this.font + " " + this.color + " " + night;
  }
  render() {
    switch (this.variant) {
      case "h1":
        return $`
          <h1 class="${this.getClass()}">${this.text || this.innerHTML}</h1>
        `;
      case "h2":
        return $`
          <h2 class="${this.getClass()}">${this.text || this.innerHTML}</h2>
        `;
      case "h3":
        return $`
          <h3 class="${this.getClass()}">${this.text || this.innerHTML}</h3>
        `;
      case "h4":
        return $`
          <h4 class="${this.getClass()}">${this.text || this.innerHTML}</h4>
        `;
      default:
        return null;
    }
  }
};
KaskusHeader.styles = r`
    .roboto {
      font-family: 'Roboto';
    }
    .vag {
      font-family: 'VAGRounded';
    }
    h1{
      font-size: 20px;
    }
    h2{
      font-size: 18px;
    }
    h3{
      font-size: 16px;
    }
    h4{
      font-size: 14px;
    }

    .secondary{
      color: ${color.secondaryGrey}
    }

    .primary{
      color: ${color.primaryGrey}
    }

    .tertiary{
      color: ${color.tertiaryGrey}
    }

    .primary.nightmode{
      color: ${color.primaryGreyNight}
    }

    .secondary.nightmode{
      color: ${color.secondaryGreyNight}
    }

    .tertiary.nightmode{
      color: ${color.tertiaryGreyNight}
    }
  `;
__decorateClass([
  e({ type: String })
], KaskusHeader.prototype, "text", 2);
__decorateClass([
  e({ type: String })
], KaskusHeader.prototype, "color", 2);
__decorateClass([
  e({ type: String })
], KaskusHeader.prototype, "variant", 2);
__decorateClass([
  e({ type: String })
], KaskusHeader.prototype, "font", 2);
KaskusHeader = __decorateClass([
  n(customElementNames.kaskusHeader)
], KaskusHeader);
export { KaskusHeader };
