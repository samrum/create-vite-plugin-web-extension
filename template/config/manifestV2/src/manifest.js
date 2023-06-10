import pkg from "../package.json";

export function getManifest() {
  return {
    author: pkg.author,
    background: {
      scripts: ["src/entries/background/main.js"],
      persistent: true,
    },
    browser_action: {
      default_icon: {
        16: "icons/16.png",
        19: "icons/19.png",
        32: "icons/32.png",
        38: "icons/38.png",
      },
      default_popup: "src/entries/popup/index.html",
    },
    content_scripts: [
      {
        js: ["src/entries/contentScript/primary/main.js"],
        matches: ["*://*/*"],
      },
    ],
    description: pkg.description,
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
    manifest_version: 2,
    name: pkg.displayName ?? pkg.name,
    options_ui: {
      chrome_style: false,
      open_in_tab: true,
      page: "src/entries/options/index.html",
    },
    permissions: ["*://*/*"],
    version: pkg.version,
  };
}
