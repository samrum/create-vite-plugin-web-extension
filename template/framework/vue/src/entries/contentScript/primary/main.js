import { createApp } from "vue";
import renderContent from "../renderContent";
import App from "./App.vue";

renderContent(import.meta.CURRENT_CONTENT_SCRIPT_CSS_URL, (appRoot) => {
  createApp(App).mount(appRoot);
});
