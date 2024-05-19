import { expect, test } from '@playwright/test';

test('profile', async ({ page }) => {
  // update user:
  await page.goto('/dashboard');
  await page.getByRole('button', { name: 'Open user menu' }).click();
  await page.getByRole('menuitem', { name: 'Profile' }).click();
  await page.getByRole('button', { name: 'Update Profile' }).click();
  await page.getByLabel('Bio').click();
  await page.getByLabel('Bio').fill('My bio');
  await page.getByRole('button', { name: 'Save changes' }).click();
  await expect(page.getByText('Profile Updated')).toBeVisible();
  await expect(page.getByText('My bio')).toBeVisible();
});
