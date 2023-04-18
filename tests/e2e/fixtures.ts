import {
  Page,
  Worker,
  test as base,
  chromium,
  type BrowserContext,
} from "@playwright/test";
import { readdir } from "fs/promises";

export type TestOptions = {
  context: BrowserContext;
  extensionId: string;
  extensionPath: string;
  extensionManifestVersion: number;
};

export const test = base.extend<TestOptions>({
  extensionPath: ["unset", { option: true }],
  context: async ({ extensionPath }, use) => {
    const context = await chromium.launchPersistentContext("", {
      headless: false,
      args: [
        `--headless=new`, // the new headless arg for chrome v109+. Use '--headless=chrome' as arg for browsers v94-108.
        `--disable-extensions-except=${extensionPath}`,
        `--load-extension=${extensionPath}`,
      ],
    });
    await use(context);
    await context.close();
  },
  extensionManifestVersion: async ({ extensionPath }, use) => {
    const manifestVersion = (extensionPath.match(/\d/g) ?? [3]).pop();

    await use(Number(manifestVersion));
  },
  extensionId: async ({ context, extensionManifestVersion }, use) => {
    let backgroundScript: Page | Worker | null = null;

    if (extensionManifestVersion === 2) {
      let [background] = context.backgroundPages();
      if (!background)
        background = await context.waitForEvent("backgroundpage");

      backgroundScript = background;
    }

    if (extensionManifestVersion === 3) {
      let [background] = context.serviceWorkers();
      if (!background) background = await context.waitForEvent("serviceworker");

      backgroundScript = background;
    }

    const extensionId = backgroundScript?.url().split("/")[2] ?? "";
    await use(extensionId);
  },
});

export const expect = test.expect;

export async function getDirectories(path: string): Promise<string[]> {
  try {
    return (await readdir(path, { withFileTypes: true }))
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
  } catch (e: unknown) {
    return [];
  }
}
