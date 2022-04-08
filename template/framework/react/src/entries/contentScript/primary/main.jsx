import "../enableDevHmr";
import React from "react";
import ReactDOM from "react-dom";
import renderContent from "../renderContent";
import App from "./App";

renderContent(import.meta.PLUGIN_WEB_EXT_CHUNK_CSS_PATHS, (appRoot) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    appRoot
  );
});
