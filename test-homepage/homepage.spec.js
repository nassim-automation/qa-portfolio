import { test, expect } from '@playwright/test';

test('Homepage loads correctly', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle(/Example/);

  const header = await page.locator('h1');
  await expect(header).toBeVisible();
});
