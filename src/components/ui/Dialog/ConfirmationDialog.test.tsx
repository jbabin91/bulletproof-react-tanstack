import { rtlRender, screen, userEvent, waitFor } from '@/tests/test-utils';

import { Button } from '../Button';
import { ConfirmationDialog } from './ConfirmationDialog';

test('should handle confirmation flow', async () => {
  const titleText = 'Are you sure?';
  const bodyText = 'Are you sure you want to delete this item?';
  const confirmationButtonText = 'Confirm';
  const openButtonText = 'Open';

  rtlRender(
    <ConfirmationDialog
      body={bodyText}
      confirmButton={<Button>{confirmationButtonText}</Button>}
      icon="danger"
      title={titleText}
      triggerButton={<Button>{openButtonText}</Button>}
    />,
  );

  expect(screen.queryByText(titleText)).not.toBeInTheDocument();

  await userEvent.click(screen.getByRole('button', { name: openButtonText }));

  expect(await screen.findByText(titleText)).toBeInTheDocument();

  expect(screen.getByText(bodyText)).toBeInTheDocument();

  await userEvent.click(screen.getByRole('button', { name: 'Cancel' }));

  await waitFor(() =>
    expect(screen.queryByText(titleText)).not.toBeInTheDocument(),
  );

  expect(screen.queryByText(bodyText)).not.toBeInTheDocument();
});
