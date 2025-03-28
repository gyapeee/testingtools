// playwright.config.js
// @ts-check
const { devices } = require("@playwright/test");

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  //repeatEach: 15,
  reporter: [['html', { outputFolder: 'playwright-report' }]], // Enables HTML report
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1, // Retry tests twice on CI, once locally
  workers: process.env.CI ? 32 : 16, // Limit the number of workers on CI, use default locally
  use: {
    headless: true,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: "chrome",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
};

module.exports = config;
