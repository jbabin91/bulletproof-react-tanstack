import { Icons } from '@/components/Icons';

import { Button } from '../Button';
import {
  Dialog,
  DialogClose,
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
}: ConfirmationDialogProps) {
  return (
    <Dialog>
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
          <DialogClose asChild>
            <Button variant="outline">{cancelButtonText}</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
