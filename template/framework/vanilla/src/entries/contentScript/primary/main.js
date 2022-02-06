import renderContent from "../renderContent";
import logo from "~/assets/logo.svg";
import "./style.css";

renderContent(import.meta.CURRENT_CONTENT_SCRIPT_CSS_URL, (appRoot) => {
  const logoImageUrl = new URL(logo, import.meta.url).href;

  appRoot.innerHTML = `
    <div class="logo">
      <img src="${logoImageUrl}" height="50" />
    </div>
  `;
});
