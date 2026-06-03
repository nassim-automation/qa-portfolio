import { test, expect } from '@playwright/test';

test('Form submission works', async ({ page }) => {
  await page.goto('https://example.com/form');

  await page.fill('#name', 'Nassim');
  await page.fill('#email', 'test@example.com');

  await page.click('button[type=submit]');

  const success = page.locator('.success');
  await expect(success).toBeVisible();
});
