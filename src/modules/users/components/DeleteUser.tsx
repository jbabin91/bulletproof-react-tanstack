import { toast } from 'sonner';

import { Button, ConfirmationDialog } from '@/components/ui';
import { useUser } from '@/modules/auth';

import { useDeleteUser } from '../api/delete-user';

export function DeleteUser({ id }: { id: string }) {
  const user = useUser();
  const deleteUser = useDeleteUser({
    mutationConfig: {
      onSuccess: () => {
        toast.success('User Deleted');
      },
    },
  });

  if (user.data?.id === id) return null;

  return (
    <ConfirmationDialog
      body="Are you sure you want to delete this user?"
      confirmButton={
        <Button
          isLoading={deleteUser.isPending}
          variant="destructive"
          onClick={() => deleteUser.mutate({ userId: id })}
        >
          Delete User
        </Button>
      }
      icon="danger"
      title="Delete User"
      triggerButton={<Button variant="destructive">Delete</Button>}
    />
  );
}
