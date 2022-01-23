export default {
  action: {
    default_icon: {
      16: "icons/16.png",
      19: "icons/19.png",
      32: "icons/32.png",
      38: "icons/38.png",
    },
    default_popup: "src/popup/index.html",
  },
  background: {
    service_worker: "src/background/main.js",
  },
  content_scripts: [
    {
      js: ["src/contentScript/primary/main.js"],
      matches: ["*://*/*"],
    },
  ],
  host_permissions: ["*://*/*"],
  icons: {
    16: "icons/16.png",
    19: "icons/19.png",
    32: "icons/32.png",
    38: "icons/38.png",
    48: "icons/48.png",
    64: "icons/64.png",
    96: "icons/96.png",
    128: "icons/128.png",
    256: "icons/256.png",
    512: "icons/512.png",
  },
  manifest_version: 3,
  options_ui: {
    page: "src/options/index.html",
    open_in_tab: true,
  },
};
