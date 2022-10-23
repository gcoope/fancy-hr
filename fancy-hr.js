export function isValidVariant(input) {
  return ["solid", "dotted", "dashed", "double"].includes(input);
}

export function isValidColor(input) {
  const style = new Option().style;
  style.color = input;
  return !!style.color;
}

export function isValidUnit(input) {
  if (input === null) return false;
  if (input === "0") return true;
  return !!input.match(/(\d*\.?\d+)\s?(px|em|rem|%|vh|vw|vmin|vmax+)/gim);
}

export function parseMargin(input) {
  const defaultMargin = "0.5em 0";
  if (input === null) return defaultMargin;
  const splitMargin = input.split(" ");
  if (splitMargin.length === 2) {
    if (splitMargin.every((unit) => isValidUnit(unit) || unit === "auto"))
      return input;
    else return defaultMargin;
  } else {
    return isValidUnit(input) || input === "auto"
      ? `${input} ${input}`
      : defaultMargin;
  }
}

export default class FancyHR extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getAttr(key, fallbackValue, validator = null) {
    const attr = this.getAttribute(key);
    if (attr === null) return fallbackValue;
    if (validator === null) return attr;
    return validator(attr) ? attr : fallbackValue;
  }

  connectedCallback() {
    const color = this.getAttr("color", "#000000", isValidColor);
    const variant = this.getAttr("variant", "solid", isValidVariant);
    const margin = parseMargin(this.getAttr("margin", "1em 0"));
    const width = this.getAttr("width", "unset", isValidUnit);
    const height = this.getAttr("height", "1px", isValidUnit);
    const borderRadius = this.getAttr("border-radius", "0px", isValidUnit);

    const singleBorder = ["dotted", "dashed"].includes(variant);

    const style = document.createElement("style");
    style.textContent = `
    .fancy-hr {
      border${singleBorder ? "-top" : ""}: ${height} ${variant} ${color};
      ${singleBorder ? "border-bottom: 0;" : ""}
      border-radius: ${borderRadius};
      margin: ${margin};
      width: ${width};
      background-color: ${variant === "solid" ? color : "transparent"}}
    }`;

    const hr = document.createElement("hr");
    hr.setAttribute("class", "fancy-hr");
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(hr);
  }
}

window.customElements.define("fancy-hr", FancyHR);
