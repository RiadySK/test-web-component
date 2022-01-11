import {LitElement, css, html} from 'lit';

export class HeaderKaskus extends LitElement {
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
      <div class="${this.variant} ${this.size}">header ${this.text}</div>
    `;
  }
}
customElements.define('header-kaskus', HeaderKaskus);
