import pkg from "../package.json";

export function getManifest() {
  return {
    action: {
      default_icon: {
        16: "icons/16.png",
        19: "icons/19.png",
        32: "icons/32.png",
        38: "icons/38.png",
      },
      default_popup: "src/entries/popup/index.html",
    },
    author: pkg.author,
    background: {
      service_worker: "src/entries/background/main.js",
    },
    content_scripts: [
      {
        js: ["src/entries/contentScript/primary/main.js"],
        matches: ["*://*/*"],
      },
    ],
    description: pkg.description,
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
    name: pkg.displayName ?? pkg.name,
    options_ui: {
      page: "src/entries/options/index.html",
      open_in_tab: true,
    },
    version: pkg.version,
  };
}
