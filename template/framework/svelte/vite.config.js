import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import webExtension from "@samrum/vite-plugin-web-extension";
import { readFileSync } from "fs";
import manifest from "./src/manifest.js";
const pkg = JSON.parse(readFileSync("./package.json", "utf-8"));

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      svelte(),
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
