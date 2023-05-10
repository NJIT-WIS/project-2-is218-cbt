// @ts-check
const { test, expect } = require('@playwright/test')

test('Test H2 Tag', async ({ page }) => {
    await page.goto('http://localhost:3000')
    const h2Tag = await page.$('h2')
    expect(h2Tag).not.toBeNull()
})