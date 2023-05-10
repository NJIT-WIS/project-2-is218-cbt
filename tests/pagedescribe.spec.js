const { test, expect } = require('@playwright/test')
const { chromium } = require('playwright')
const path = require('path')

const config = require(path.join(process.cwd(), 'playwright.config.js'))
const { home } = require(path.join(process.cwd(), 'tests', 'pages.json'))

const TIMEOUT = 30000
async function checkPageDescription (pageUrl, expectedDescription) {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    console.log(pageUrl) // Log the page URL
    await page.goto(pageUrl, { timeout: TIMEOUT })
    await page.waitForTimeout(2000) // Add a short delay
    const description = await page.$eval(
        'meta[name="description"]',
        (el) => el.getAttribute('content')
    )
    await browser.close()
    expect(description).toBe(expectedDescription)
}

home.forEach((one) => {
    test(`Test if "${one.path}" has the description`, async ({}) => {
        const pageUrl = `${config.use.baseURL}${one.path}`
        console.log(one.description)
        const expectedDescription = one.description
        await checkPageDescription(pageUrl, expectedDescription)
    })
})