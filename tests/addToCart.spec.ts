import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.locator('li').filter({ hasText: 'Radiant Tee' }).getByLabel('S', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Radiant Tee' }).getByLabel('Purple').click();
  await page.locator('li').filter({ hasText: 'Radiant Tee' }).getByRole('button').click();
  //await page.getByRole('alert').locator('div').first().click({
  //  button: 'right'
  //});
  await expect(page.getByRole('alert').locator('div').first()).toBeVisible();
  await expect(page.getByRole('alert')).toContainText('You added Radiant Tee to your shopping cart.');
}); 