import browser from "webextension-polyfill";

if (import.meta.hot) {
  // Enable HMR
}

browser.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});
