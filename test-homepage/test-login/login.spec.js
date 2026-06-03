import { test, expect } from '@playwright/test';

test('Login works correctly', async ({ page }) => {
  await page.goto('https://example.com/login');

  await page.fill('#email', 'email@test.com');
  await page.fill('#password', 'password123');

  await page.click('button[type=submit]');

  await expect(page).toHaveURL(/dashboard/);
});
