export function isValidUnit(input) {
  if (input === null) return false;
  return !!input.match(/(\d*\.?\d+)\s?(px|em|rem|%|vh|vw|vmin|vmax+)/gim);
}

export function parseMargin(input) {
  const defaultMargin = "0.5em 0";
  if (input === null) defaultMargin;
  const splitMargin = input.split(" ");
  if (splitMargin.length === 2) {
    if (splitMargin.every((unit) => isValidUnit(unit))) return input;
  } else {
    return isValidUnit(input) ? `${input} ${input}` : defaultMargin;
  }
}

export default class FancyHR extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const variant = this.getAttribute("variant") || "solid";
    const color = this.getAttribute("color") || "#000000";
    const _margin = this.getAttribute("margin");
    const margin = isValidUnit(_margin) ? _margin : "0.5em 0";

    let style = document.createElement("style");
    style.textContent = `
    .fancy-hr {
        border: 1px ${variant} ${color};
        margin: ${margin};
    }
    `;

    const hr = document.createElement("hr");
    hr.setAttribute("class", "fancy-hr");

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(hr);
  }
}

window.customElements.define("fancy-hr", FancyHR);
