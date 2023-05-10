const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');

const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
async function checkAlt(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });
  const imageElements = await page.$$('img');
  const imagesWithAlt = await Promise.all(imageElements.map(async (img) => {
    const alt = await img.getAttribute('alt');
    return alt !== null && alt !== undefined && alt !== '';
  }));
  await browser.close();
  return imagesWithAlt.every(value => value);
}

pages.forEach((page) => {
    test(`Test if "${page.path}" has alt attribute for every img element`, async ({}) => {
        const pageUrl = `${config.use.baseURL}${page.path}`;
        const allImagesHaveAlt = await checkAlt(pageUrl);
        expect(allImagesHaveAlt).toBeTruthy();
    });
});