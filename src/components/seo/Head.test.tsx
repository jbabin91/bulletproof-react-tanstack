import { render, waitFor } from '@testing-library/react';

import { Head } from './Head';

test('should add proper page title and meta description', async () => {
  const title = 'Hello World';
  const titleSuffix = ' | Bulletproof React Tanstack';
  const description = 'This is a description';

  render(<Head description={description} title={title} />);
  await waitFor(() => expect(document.title).toBe(`${title}${titleSuffix}`));

  // eslint-disable-next-line testing-library/no-node-access
  const metaDescription = document.querySelector("meta[name='description']");

  expect(metaDescription?.getAttribute('content')).toBe(description);
});
