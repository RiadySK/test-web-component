import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";
import { c as customElementNames } from "./index.js";
import { c as color, f as fontSize } from "./const.js";
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
let KaskusButton = class extends LitElement {
  constructor() {
    super(...arguments);
    this.text = "";
    this.variant = "primary";
    this.size = "regular";
    this.disabled = false;
  }
  getClass() {
    return this.variant + " " + this.size + " " + night;
  }
  render() {
    return html`
      <button
        class="${this.getClass()}"
        ?disabled=${this.disabled}
      >
        ${this.text}
      </button>
      <slot></slot>
    `;
  }
};
KaskusButton.styles = css`
    :host {
      color: blue;
    }

    button {
      border-radius: 3px;
      max-width: 200px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
    }

    .primary {
      color: ${color.white};
      background-color: ${color.primary};
      border: solid 1px ${color.primary};
    }

    .primary:hover {
      background-color: ${color.primaryHover};
      border: solid 1px ${color.primaryHover};
    }

    .primary.nightmode {
      background-color: ${color.primaryNight};
      border: solid 1px ${color.primaryNight};
    }

    .primary.nightmode:hover {
      background-color: ${color.primaryNightHover};
      border: solid 1px ${color.primaryNightHover};
    }

    .secondary {
      color: ${color.primary};
      background-color: transparent;
      border: solid 1px ${color.primary};
    }

    .secondary:hover {
      background-color: ${color.primaryLightHover};
    }

    .secondary.nightmode {
      color: ${color.primaryNight};
      border: solid 1px ${color.primaryNight};
    }

    .secondary.nightmode:hover {
      background-color: ${color.primaryNightLightHover};
    }

    .secondary-alt {
      color: ${color.secondaryGrey};
      background-color: transparent;
      border: solid 1px ${color.secondaryGrey};
    }

    .secondary-alt:hover {
      background-color: ${color["grey-1"]};
    }

    .secondary-alt.nightmode {
      color: ${color.secondaryGreyNight};
      border: solid 1px ${color.secondaryGreyNight};
    }

    .secondary-alt.nightmode:hover {
      background-color: ${color["grey-5"]};
    }

    .disabled {
      color: ${color.tertiaryGrey};
      background-color: ${color["grey-2"]};
      border: solid 1px ${color["grey-2"]};
      cursor: default;
    }

    .disabled.nightmode {
      color: ${color.tertiaryGreyNight};
      background-color: ${color["grey-4"]};
      border: solid 1px ${color["grey-4"]};
    }

    .disabled-alt {
      color: ${color.tertiaryGrey};
      background-color: ${color["grey-0"]};
      border: solid 1px ${color["grey-4"]};
      cursor: default;
    }

    .disabled-alt.nightmode {
      color: ${color.tertiaryGreyNight};
      background-color: ${color["grey-7"]};
      border: solid 1px ${color["grey-5"]};
    }

    .text {
      color: ${color.primary};
      background-color: transparent;
      border: none;
    }

    .text:hover {
      text-decoration: underline;
    }

    .text.nightmode {
      color: ${color.primaryNight};
    }

    .regular {
      padding: 8px;
      font-size: ${fontSize["size-4"]};
      height: 36px;
    }

    .small {
      padding: 4px;
      font-size: ${fontSize["size-3"]};
      height: 24px;
    }

    .large {
      padding: 8px;
      font-size: ${fontSize["size-6"]};
      height: 36px;
    }
  `;
__decorateClass([
  property({ type: String })
], KaskusButton.prototype, "text", 2);
__decorateClass([
  property({ type: String })
], KaskusButton.prototype, "variant", 2);
__decorateClass([
  property({ type: String })
], KaskusButton.prototype, "size", 2);
__decorateClass([
  property({ type: Boolean })
], KaskusButton.prototype, "disabled", 2);
KaskusButton = __decorateClass([
  customElement(customElementNames.kaskusButton)
], KaskusButton);
export { KaskusButton };
