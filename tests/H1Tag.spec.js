const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');

const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
async function checkH1(pageUrl) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(pageUrl, { timeout: TIMEOUT });
    const h1Elements = await page.$$('h1');
    await browser.close();
    return h1Elements.length > 0;
}

pages.forEach((page) => {
    test(`Page "${page.path}" should have at least one h1 tag`, async ({}) => {
        const pageUrl = `${config.use.baseURL}${page.path}`
        const hasH1 = await checkH1(pageUrl)
        expect(hasH1).toBeTruthy()
    });
});