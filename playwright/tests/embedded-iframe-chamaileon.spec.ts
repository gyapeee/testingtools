import { test, expect } from '@playwright/test';

test('Embedded iframe test on Chamaileon', async ({ page }) => {

  // Go to https://sdk-playground.chamaileon.io/emaileditor#home
  await page.goto('https://sdk-playground.chamaileon.io/emaileditor#home');
  

  // Click a:has-text("Block Libraries")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://sdk-playground.chamaileon.io/emaileditor#block-libraries' }*/),
    page.locator('a:has-text("Block Libraries")').click()
  ]);
  
  // Click button:has-text("Block")
  await page.locator('button:has-text("Block")').click();
  
  // Click button:has-text("Open editor") >> nth=0
  await page.locator('button:has-text("Open editor")').first().click();
  
  // Click text=Drag and drop elements into the editor area Content TEXT IMAGE BUTTON DIVIDER SO >> button
  await page.frameLocator('#editor-wrapper iframe >> nth=0').locator('.close-btn-wrapper').click();
  
  // Click button:has-text("OK")
  await page.frameLocator('#editor-wrapper iframe >> nth=0').locator('button:has-text("OK")').click();
  
  // Click .text-center.singleElement.shadowed.element-icon-fullwidth > .container
  await page.frameLocator('#editor-wrapper iframe').locator('//div[@drag-object="fullwidth"]').click();
});