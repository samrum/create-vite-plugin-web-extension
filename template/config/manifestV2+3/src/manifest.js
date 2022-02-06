const sharedManifest = {
  content_scripts: [
    {
      js: ["src/entries/contentScript/primary/main.js"],
      matches: ["*://*/*"],
    },
  ],
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
  options_ui: {
    page: "src/entries/options/index.html",
    open_in_tab: true,
  },
  permissions: [],
};

const browserAction = {
  default_icon: {
    16: "icons/16.png",
    19: "icons/19.png",
    32: "icons/32.png",
    38: "icons/38.png",
  },
  default_popup: "src/entries/popup/index.html",
};

export const ManifestV2 = {
  ...sharedManifest,
  background: {
    scripts: ["src/entries/background/script.js"],
    persistent: false,
  },
  browser_action: browserAction,
  manifest_version: 2,
  options_ui: {
    ...sharedManifest.options_ui,
    chrome_style: false,
  },
  permissions: [...sharedManifest.permissions, "*://*/*"],
};

export const ManifestV3 = {
  ...sharedManifest,
  action: browserAction,
  background: {
    service_worker: "src/entries/background/serviceWorker.js",
  },
  host_permissions: ["*://*/*"],
  manifest_version: 3,
};
