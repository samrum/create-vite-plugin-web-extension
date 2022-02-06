import { createApp } from "vue";
import renderContent from "../renderContent";
import Primary from "./App.vue";

renderContent(
  import.meta.CURRENT_CONTENT_SCRIPT_CSS_URL,
  (appRoot: HTMLElement) => {
    createApp(Primary).mount(appRoot);
  }
);
