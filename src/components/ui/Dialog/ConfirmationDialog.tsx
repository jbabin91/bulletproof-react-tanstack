import { useEffect, useRef } from 'react';

import { Icons } from '@/components/Icons';
import { useDisclosure } from '@/hooks/useDisclosure';

import { Button } from '../Button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog';

export type ConfirmationDialogProps = {
  triggerButton: React.ReactElement;
  confirmButton: React.ReactElement;
  title: string;
  body?: string;
  cancelButtonText?: string;
  icon?: 'danger' | 'info';
  isDone?: boolean;
};

export function ConfirmationDialog({
  triggerButton,
  confirmButton,
  title,
  body = '',
  cancelButtonText = 'Cancel',
  icon = 'danger',
  isDone = false,
}: ConfirmationDialogProps) {
  const { close, open, isOpen } = useDisclosure();
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    if (isDone) {
      close();
    }
  }, [close, isDone]);

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
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex">
          <DialogTitle className="flex items-center gap-2">
            {' '}
            {icon === 'danger' ? (
              <Icons.CircleAlert
                aria-hidden="true"
                className="size-6 text-red-600"
              />
            ) : null}
            {icon === 'info' ? (
              <Icons.Info aria-hidden="true" className="size-6 text-blue-600" />
            ) : null}
            {title}
          </DialogTitle>
        </DialogHeader>
        <div>{body ? <div className="mt-2">{body}</div> : null}</div>
        <DialogFooter>
          {confirmButton}
          <Button ref={cancelButtonRef} variant="outline" onClick={close}>
            {cancelButtonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
