import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import webExtension from "@samrum/vite-plugin-web-extension";
import path from "path";
import manifest from "./src/manifest";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      preact(),
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
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  };
});
