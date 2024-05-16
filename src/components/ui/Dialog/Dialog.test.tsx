import { useRef } from 'react';
import { expect } from 'vitest';

import { useDisclosure } from '@/hooks/useDisclosure';
import { rtlRender, screen, userEvent, waitFor } from '@/tests/test-utils';

import { Button } from '../Button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog';

const openButtonText = 'Open';
const cancelButtonText = 'Cancel';
const titleText = 'Modal Title';

function TestDialog() {
  const { close, open, isOpen } = useDisclosure();
  const cancelButtonRef = useRef(null);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(isOpen) => {
        if (isOpen) {
          open();
        } else {
          close();
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline">{openButtonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{titleText}</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit">Submit</Button>
          <Button ref={cancelButtonRef} variant="outline" onClick={close}>
            {cancelButtonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

test('should handle basic dialog flow', async () => {
  rtlRender(<TestDialog />);

  expect(screen.queryByText(titleText)).not.toBeInTheDocument();

  await userEvent.click(screen.getByRole('button', { name: openButtonText }));

  expect(await screen.findByText(titleText)).toBeInTheDocument();

  await userEvent.click(screen.getByRole('button', { name: cancelButtonText }));

  await waitFor(() =>
    expect(screen.queryByText(titleText)).not.toBeInTheDocument(),
  );
});
