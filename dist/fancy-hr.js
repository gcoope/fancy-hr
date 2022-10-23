(()=>{"use strict";var t,e,n,r,o={};function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){if(e&&("object"===c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){var e="function"==typeof Map?new Map:void 0;return a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return f(t,arguments,s(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),p(r,t)},a(t)}function f(t,e,n){return f=l()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&p(o,n.prototype),o},f.apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function d(t){return["solid","dotted","dashed","double"].includes(t)}function y(t){var e=(new Option).style;return e.color=t,!!e.color}function b(t){return null!==t&&("0"===t||!!t.match(/(\d*\.?\d+)\s?(px|em|rem|%|vh|vw|vmin|vmax+)/gim))}o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var h=(e=(t=Object).getPrototypeOf||function(t){return t.__proto__},n=t.setPrototypeOf||function(t,e){return t.__proto__=e,t},r="object"===("undefined"==typeof Reflect?"undefined":c(Reflect))?Reflect.construct:function(t,e,r){var o,c=[null];return c.push.apply(c,e),o=t.bind.apply(t,c),n(new o,r.prototype)},function(t){var o=e(t);return n(t,n((function(){return r(o,arguments,e(this).constructor)}),o))})(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(a,t);var e,n,r,o,c=(e=a,n=l(),function(){var t,r=s(e);if(n){var o=s(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return i(this,t)});function a(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(t=c.call(this)).attachShadow({mode:"open"}),t}return r=a,o=[{key:"getAttr",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=this.getAttribute(t);return null===r?e:null===n||n(r)?r:e}},{key:"connectedCallback",value:function(){var t=this.getAttr("color","#000000",y),e=this.getAttr("variant","solid",d),n=function(t){var e="0.5em 0";if(null===t)return e;var n=t.split(" ");return 2===n.length?n.every((function(t){return b(t)||"auto"===t}))?t:e:b(t)||"auto"===t?"".concat(t," ").concat(t):e}(this.getAttr("margin","1em 0")),r=this.getAttr("width","unset",b),o=this.getAttr("height","1px",b),c=this.getAttr("border-radius","0px",b),u=["dotted","dashed"].includes(e),i=document.createElement("style");i.textContent="\n    .fancy-hr {\n      border".concat(u?"-top":"",": ").concat(o," ").concat(e," ").concat(t,";\n      ").concat(u?"border-bottom: 0;":"","\n      border-radius: ").concat(c,";\n      margin: ").concat(n,";\n      width: ").concat(r,";\n      background-color: ").concat("solid"===e?t:"transparent","}\n    }");var a=document.createElement("hr");a.setAttribute("class","fancy-hr"),this.shadowRoot.appendChild(i),this.shadowRoot.appendChild(a)}}],o&&u(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),a}(a(HTMLElement)));window.customElements.define("fancy-hr",h)})();