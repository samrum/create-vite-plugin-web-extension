import browser from "webextension-polyfill";

// if (import.meta.hot) {
//   // @ts-expect-error - Enable HMR (Manifest V2 only)
//   import("/@vite/client");
// }

browser.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});
