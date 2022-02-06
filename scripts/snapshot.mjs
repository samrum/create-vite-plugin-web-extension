import util from "util";
import { exec as execCallback } from "child_process";

const exec = util.promisify(execCallback);

const frameworks = ["vanilla", "vue", "svelte", "react", "preact"];

const manifestVersions = ["2", "3", "2+3"];

const builds = [];

(async () => {
  await exec("mkdir -p playground");
  // await exec('rm -rf playground/*');

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
    await exec(`cd playground && node ../create.cjs ${buildArgs.join(" ")}`);
  }
})();
