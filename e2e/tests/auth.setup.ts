import { test as setup } from '@playwright/test';

import { createUser } from '../../src/tests/data-generators';

const authFile = 'e2e/.auth/user.json';

setup('authenticate', async ({ page }) => {
  const user = createUser();

  await page.goto('/');
  await page.getByRole('button', { name: 'Get started' }).click();
  await page.waitForURL('/login');
  await page.getByRole('button', { name: 'Sign up' }).click();

  // registration:
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill(user.firstName);
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill(user.lastName);
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill(user.email);
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(user.password);
  await page.getByLabel('Team Name').click();
  await page.getByLabel('Team Name').fill(user.teamName);
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.waitForURL('/dashboard');

  // log out:
  await page.getByRole('button', { name: 'Open user menu' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.waitForURL('/login');

  // log in:
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill(user.email);
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(user.password);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForURL('/dashboard');

  await page.context().storageState({ path: authFile });
});
