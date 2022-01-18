import { createApp } from "vue";
import renderContent from "../renderContent";
import Primary from "./Primary.vue";

renderContent(import.meta.CURRENT_CONTENT_SCRIPT_CSS_URL, (appRoot) => {
  createApp(Primary).mount(appRoot);
});
