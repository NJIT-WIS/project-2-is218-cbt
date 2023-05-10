const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');

const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { home } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;

async function checkEmailInputElement (pageUrl) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(pageUrl, { timeout: TIMEOUT });

    const emailInput = await page.$('input[id="mce-EMAIL"]')

    if (emailInput) {
        const outerHTML = await emailInput.evaluate((el) => el.outerHTML)
        console.log('Email input outer HTML:', outerHTML)
    } else {
        console.log('Email input not found')
    }

    await browser.close()
    expect(emailInput).not.toBeNull()
}

home.forEach((one) => {
    test(`Verify email input element on "${one.path}"`, async ({}) => {
        console.log(one.path)
        const pageUrl = `${config.use.baseURL}${one.path}`
        await checkEmailInputElement(pageUrl)
    });
});