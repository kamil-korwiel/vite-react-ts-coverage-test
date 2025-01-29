import { test, expect } from './baseFixureCoverage.ts';

test('test', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle("Mealdrop - find your next meal");
});