import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { spawn } from "child_process";
import { readdir } from "fs/promises";

async function getDirectories(path) {
  try {
    return (await readdir(path, { withFileTypes: true }))
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
  } catch (e) {
    return [];
  }
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const playgroundDir = join(__dirname, "../playground");
const builds = await getDirectories(playgroundDir);

const supportedCommands = ["build", "dev", "install"];

const inputCommand = process.argv[2] ?? "build";

if (!supportedCommands.includes(inputCommand)) {
  throw new Error(`Supported commands: ${supportedCommands.join(", ")}`);
}

let pnpmCommand = "build";
switch (inputCommand) {
  case "build":
    pnpmCommand = "build --mode development";
    break;
  case "dev":
    pnpmCommand = "dev --clearScreen false";
    break;
  default:
    pnpmCommand = inputCommand;
}

for (const build of builds) {
  spawn(`cd ${join(playgroundDir, build)} && pnpm ${pnpmCommand}`, {
    stdio: "inherit",
    shell: true,
  });
}
