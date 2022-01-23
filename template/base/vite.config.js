import { defineConfig } from "vite";
import webExtension from "@samrum/vite-plugin-web-extension";
import manifest from "./src/manifest";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      webExtension({
        manifest: {
          author: pkg.author,
          description: pkg.description,
          name: pkg.displayName ?? pkg.name,
          version: pkg.version,
          ...manifest,
        },
      }),
    ],
  };
});
