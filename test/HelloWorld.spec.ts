import { test, expect } from './baseFixureCoverage.ts';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4173/');
  await page.getByRole('button', { name: 'count is' }).click();
  await expect(page.getByRole('button')).toContainText('count is 1');
});