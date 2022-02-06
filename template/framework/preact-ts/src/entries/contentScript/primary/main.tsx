import { render } from "preact";
import renderContent from "../renderContent";
import App from "./App";

renderContent(import.meta.CURRENT_CONTENT_SCRIPT_CSS_URL, (appRoot) => {
  render(<App />, appRoot);
});
