import browser from "webextension-polyfill";

export default async function renderContent(
  cssPath,
  render = (_appRoot) => {}
) {
  const appContainer = document.createElement("div");
  const shadowRoot = appContainer.attachShadow({
    mode: import.meta.env.DEV ? "open" : "closed",
  });
  const appRoot = document.createElement("div");

  if (import.meta.hot) {
    // @ts-expect-error - for HMR, styles need to be rendered inside shadow root
    const { addStyleTarget } = await import("/@vite/client");

    addStyleTarget(shadowRoot);
  } else {
    const styleEl = document.createElement("link");
    styleEl.setAttribute("rel", "stylesheet");
    styleEl.setAttribute("href", browser.runtime.getURL(cssPath));
    shadowRoot.appendChild(styleEl);
  }

  shadowRoot.appendChild(appRoot);
  document.body.appendChild(appContainer);

  render(appRoot);
}
