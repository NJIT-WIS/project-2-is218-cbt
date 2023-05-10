// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('Test Image Alt attribute', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000')
    })

    test('Check if all images have an alt attribute', async ({ page }) => {
        const imageElements = await page.$$('img')

        // Iterate through image elements and check if they have an alt attribute
        for (let i = 0; i < imageElements.length; i++) {
            const altText = await imageElements[i].getAttribute('alt')
            await expect(altText).toBeTruthy()
        }
    })
})