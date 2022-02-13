import "../../enableDevHmr";
import React from "react";
import ReactDOM from "react-dom";
import renderContent from "../renderContent";
import App from "./App";

renderContent(import.meta.CURRENT_CONTENT_SCRIPT_CSS_URL, (appRoot) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    appRoot
  );
});
