import {LitElement, css, html} from 'lit';

export class ButtonKaskus extends LitElement {
  static properties = {
    text: {},
    variant: {},
    size: {}
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }

    button {
      border-radius: 3px;
      width: 100%;
      cursor: pointer;
    }

    .primary {
      color: #ffffff;
      background-color: #0082c6;
      border: solid 1px #0082c6;
    }

    .primary:hover {
      background-color: #006094;
    }

    .secondary {
      color: #0082c6;
      background-color: #ffffff;
      border: solid 1px #0082c6;
    }

    .secondary:hover {
      background-color: #e8f4fd;
    }

    .alternate {
      color: #5c5c5c;
      background-color: #ffffff;
      border: solid 1px #5c5c5c;
    }

    .alternate:hover {
      background-color: #ebebeb;
    }

    .disable {
      color: #b3b3b3;
      background-color: #d9d9d9;
      border: solid 1px #d9d9d9;
      cursor: default;
    }

    .disable-alternate {
      color: #b3b3b3;
      background-color: #f9f9f9;
      border: solid 1px #b3b3b3;
      cursor: default;
    }

    .text-button {
      color: #0082c6;
      background-color: transparent;
      border: none;
    }

    .text-button:hover {
      text-decoration: underline;
    }

    .regular {
      padding: 10px;
      font-size: 14px;
    }

    .small {
      padding: 5px;
      font-size: 12px;
    }

    .large {
      padding: 10px;
      font-size: 18px;
    }

  `;

  constructor() {
    super();
    // Declare reactive properties
    this.text = 'Button';
    this.variant = 'primary';
    this.size = 'regular';
  }

  // Render the UI as a function of component state
  render() {


    return html`
      <button class="${this.variant} ${this.size}">${this.text}</button>
    `;
  }
}
customElements.define('button-kaskus', ButtonKaskus);
