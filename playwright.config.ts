import { defineConfig, devices } from "@playwright/test";
import path from "path";
import { fileURLToPath } from "url";
import { TestOptions, getDirectories } from "./tests/e2e/fixtures.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const playgroundDir = path.join(__dirname, "playground");
const playgroundBuilds = await getDirectories(playgroundDir);

export default defineConfig<TestOptions>({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? "dot" : "list",
  use: {
    trace: "on-first-retry",
  },

  projects: playgroundBuilds.map((playgroundBuild) => ({
    name: playgroundBuild,
    use: {
      ...devices["Desktop Chrome"],
      extensionPath: path.join(`${playgroundDir}/${playgroundBuild}/dist`),
    },
  })),
});
