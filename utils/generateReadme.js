import getCommand from "./getCommand.js";

const sfcTypeSupportDoc = [
  "",
  "## Type Support for `.vue` Imports in TS",
  "",
  "TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.",
  "",
  "If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471) that is more performant. You can enable it by the following steps:",
  "",
  "1. Disable the built-in TypeScript Extension",
  "    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette",
  "    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`",
  "2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.",
  "",
].join("\n");

export default function generateReadme({
  projectName,
  packageManager,
  needsTypeScript,
  framework,
  manifestVersion,
}) {
  let readme = `# ${projectName}

This template should help get you started developing a ${framework} web extension in Vite.

## Usage Notes
${
  manifestVersion === "2+3"
    ? "Switch between Manifest V2 and Manifest V3 builds using the MANIFEST_VERSION environment variable in `.env`"
    : ""
}

${
  manifestVersion === "2+3" || manifestVersion === "3"
    ? "Hot-Reload during development is currently not supported in Manifest V3. Use watch mode for development."
    : ""
}

Refer to [@samrum/vite-plugin-web-extension](https://github.com/samrum/vite-plugin-web-extension) for more usage notes.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

`;

  let npmScriptsDescriptions = `\`\`\`sh
${getCommand(packageManager, "install")}
\`\`\`

### Compile and Hot-Reload for Development

\`\`\`sh
${getCommand(packageManager, "dev")}
\`\`\`

### Compile and Watch for Development (When Hot-Reload is not available)

\`\`\`sh
${getCommand(packageManager, "watch")}
\`\`\`

### Compile and Minify for Production

\`\`\`sh
${getCommand(packageManager, "build")}
\`\`\`

### Load complited extension in browser

\`\`\`sh
${getCommand(packageManager, "serve:chrome")}
\`\`\`

\`\`\`sh
${getCommand(packageManager, "serve:firefox")}
\`\`\`
`;

  readme += npmScriptsDescriptions;

  return readme;
}
