import logo from "./../assets/logo.svg";
import "./style.css";

const imageUrl = new URL(logo, import.meta.url).href;

document.querySelector("#app").innerHTML = `
  <img src="${imageUrl}" height="45" />
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
