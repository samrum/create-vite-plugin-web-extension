import { type Page } from "@playwright/test";
import { test, expect } from "./fixtures.ts";

async function testPage({
  page,
  extensionId,
  pageType,
}: {
  page: Page;
  extensionId: string;
  pageType: string;
}) {
  await page.goto(
    `chrome-extension://${extensionId}/src/entries/${pageType}/index.html`
  );

  await expect(page.locator("img")).toHaveJSProperty("width", 29);

  await expect(page.locator("h1")).toHaveText(
    pageType[0].toUpperCase() + pageType.slice(1)
  );

  await expect(page.getByRole("button")).toHaveText("Clicks: 0");
  await page.getByRole("button").click();
  await expect(page.getByRole("button")).toHaveText("Clicks: 1");
}

test("content script", async ({ page }) => {
  await page.goto("https://example.com");

  const logo = page.locator(".logo");

  await expect(logo).toBeVisible();
  await expect(logo).toHaveCSS("z-index", "99999");
  await expect(logo.locator("img")).toHaveJSProperty("width", 33);
});

test("popup page", async ({ page, extensionId }) => {
  await testPage({
    page,
    extensionId,
    pageType: "popup",
  });
});

test("options page", async ({ page, extensionId }) => {
  await testPage({
    page,
    extensionId,
    pageType: "options",
  });
});
