import { test, expect } from "@playwright/test";

test("Embedded iframe test on Chamaileon", async ({ page }) => {
  // Go to https://sdk-playground.chamaileon.io/emaileditor#home
  await page.goto("https://sdk-playground.chamaileon.io/emaileditor#home");

  // Click a:has-text("Block Libraries")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://sdk-playground.chamaileon.io/emaileditor#block-libraries' }*/),
    page.locator('a:has-text("Block Libraries")').click(),
  ]);

  // Click button:has-text(" New Library ")
  await page.locator('button:has-text(" New Library ")').click();

  // Click button:has-text("Open editor") >> nth=0
  await page.locator('button:has-text("Open editor")').first().click();

  // Click text=Drag and drop elements into the editor area Content TEXT IMAGE BUTTON DIVIDER SO >> button
  await page
    .frameLocator("#editor-wrapper iframe >> nth=0")
    .locator(".close-btn-wrapper")
    .click();

  // Click button:has-text("OK")
  await page
    .frameLocator("#editor-wrapper iframe >> nth=0")
    .locator('button:has-text("OK")')
    .click();

  // Click text=New Block Our PortfolioOur Portfolio PERFECTLY SIMPLE DESIGNPERFECTLY SIMPLE DES >> button
  await page
    .frameLocator("#editor-wrapper iframe >> nth=0")
    .locator("text=Home >> nth=1")
    .click();

  // Click text=New Block Our PortfolioOur Portfolio PERFECTLY SIMPLE DESIGNPERFECTLY SIMPLE DES >> button >> nth=2
  await page
    .frameLocator("#editor-wrapper iframe >> nth=0")
    .locator(".v-speed-dial--direction-bottom button")
    .click();

  // saveButton canvas-floating-btn v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--small
  await page
    .frameLocator("#editor-wrapper iframe >> nth=0")
    .locator(".saveButton")
    .click();

  await page
    .frameLocator("#editor-wrapper iframe >> nth=0")
    .locator('"Save to..."')
    .click();

  // Click div[role="option"] div:has-text("Block Library 0") >> nth=0
  await page
    .frameLocator("#editor-wrapper iframe >> nth=0")
    .locator('div[role="option"] div:has-text("Block Library 0")')
    .first()
    .click();

  // Click button:has-text("SAVE")
  await page
    .frameLocator("#editor-wrapper iframe >> nth=0")
    .locator('button:has-text("SAVE")')
    .click();

  // Click text=Blocks
  await page
    .frameLocator("#editor-wrapper iframe >> nth=0")
    .locator("text=Blocks")
    .click();

  // Click #thumbnail-0-cover
  await page
    .frameLocator("#editor-wrapper iframe >> nth=0")
    .frameLocator("iframe")
    .locator('"Site"')
    .click();
});
