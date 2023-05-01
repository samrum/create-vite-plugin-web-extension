import util from "util";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { exec as execCallback, spawn } from "child_process";

const exec = util.promisify(execCallback);

const __dirname = dirname(fileURLToPath(import.meta.url));

const frameworks = ["vanilla", "vue", "svelte", "react", "preact"];

const manifestVersions = ["2", "3", "2+3"];

const builds = [];

(async () => {
  const { stdout } = await exec("pnpm build");
  console.log(stdout);

  await exec("mkdir -p playground && rm -rf playground/*");

  for (const framework of frameworks) {
    for (const manifest of manifestVersions) {
      const manifestFilename = manifest.replace("+", "-");
      const flags = [
        `--manifest=${manifest}`,
        `--framework=${framework}`,
        `--force`,
      ];

      builds.push([`${framework}-v${manifestFilename}`, ...flags]);

      builds.push([`${framework}-v${manifestFilename}-ts`, ...flags, `--ts`]);
    }
  }

  for (const buildArgs of builds) {
    spawn(`cd playground && node ../create.cjs ${buildArgs.join(" ")}`, { shell: true });

    console.log(
      resolve(`${__dirname}/../playground/${buildArgs[0]}`)
    );
  }
})();
