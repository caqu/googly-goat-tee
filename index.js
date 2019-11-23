/* eslint-disable */
class GooglyGoatTee extends HTMLElement {
  connectedCallback() {
    const menuContainer = document.createElement("div");
    const menuItem1 = document.createElement("div");
    menuItem1.innerHTML = '""""""""""""""""';
    menuContainer.appendChild(menuItem1);
    this.attachShadow({ mode: "open" }).appendChild(menuContainer);
  }
}
console.log("googly-nose loaded, registering...");
customElements.define("googly-goat-tee", GooglyGoatTee);

export default GooglyGoatTee;
