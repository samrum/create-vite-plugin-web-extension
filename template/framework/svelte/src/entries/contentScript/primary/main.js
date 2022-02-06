import renderContent from "../renderContent";
import App from "./App.svelte";

renderContent(import.meta.CURRENT_CONTENT_SCRIPT_CSS_URL, (appRoot) => {
  new App({
    target: appRoot,
  });
});
