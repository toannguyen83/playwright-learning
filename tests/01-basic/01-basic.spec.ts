import { expect, test } from '@playwright/test'

test('basic operations such as getting elements and assertions', async ({
  page
}) => {
  await page.goto('https://playwright.dev')
  const centerTitle = page.locator('header')
  await expect(centerTitle).toContainText(
    'Playwright enables reliable end-to-end testing for modern web apps.'
  )
})
