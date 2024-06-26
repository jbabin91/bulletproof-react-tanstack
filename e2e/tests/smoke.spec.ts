import { expect, test } from '@playwright/test';

import {
  createComment,
  createDiscussion,
} from '../../src/tests/data-generators';

test('smoke', async ({ page }) => {
  const discussion = createDiscussion();
  const comment = createComment();

  await page.goto('/');
  await page.getByRole('button', { name: 'Get started' }).click();
  await page.waitForURL('/dashboard');

  // create discussion:
  await page.getByRole('link', { name: 'Discussions' }).click();
  await page.waitForURL('/discussions');

  await page.getByRole('button', { name: 'Create Discussion' }).click();
  await page.getByLabel('Title').click();
  await page.getByLabel('Title').fill(discussion.title);
  await page.getByLabel('Body').click();
  await page.getByLabel('Body').fill(discussion.body);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Discussion Created')).toBeVisible();

  // visit discussion page:
  await page.getByRole('link', { name: 'View' }).click();

  await expect(
    page.getByRole('heading', { name: discussion.title }),
  ).toBeVisible();
  await expect(page.getByText(discussion.body)).toBeVisible();

  // update discussion:
  await page.getByRole('button', { name: 'Update Discussion' }).click();
  await page.getByLabel('Title').click();
  await page.getByLabel('Title').fill(`${discussion.title} - updated`);
  await page.getByLabel('Body').click();
  await page.getByLabel('Body').fill(`${discussion.body} - updated`);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Discussion Updated')).toBeVisible();

  await expect(
    page.getByRole('heading', { name: `${discussion.title} - updated` }),
  ).toBeVisible();
  await expect(page.getByText(`${discussion.body} - updated`)).toBeVisible();

  // create comment:
  await page.getByRole('button', { name: 'Create Comment' }).click();
  await page.getByLabel('Body').click();
  await page.getByLabel('Body').fill(comment.body);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText(comment.body)).toBeVisible();
  await expect(page.getByText('Comment Created')).toBeVisible();

  // delete comment:
  await page.getByRole('button', { name: 'Delete Comment' }).click();
  await expect(
    page.getByText('Are you sure you want to delete this comment?'),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Delete Comment' }).click();
  await expect(page.getByText('Comment Deleted')).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'No Comments Found' }),
  ).toBeVisible();
  await expect(page.getByText(comment.body)).toBeHidden();

  // go back to discussions:
  await page.getByRole('link', { name: 'Discussions' }).click();
  await page.waitForURL('/discussions');

  // delete discussion:
  await page.getByRole('button', { name: 'Delete Discussion' }).click();
  await page.getByRole('button', { name: 'Delete Discussion' }).click();
  await expect(page.getByText('Discussion Deleted')).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'No Entries Found' }),
  ).toBeVisible();
});
