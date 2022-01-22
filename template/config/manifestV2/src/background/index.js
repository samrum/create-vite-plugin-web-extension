import browser from "webextension-polyfill";

// Enable HMR
if (import.meta.hot) {
}

browser.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});
