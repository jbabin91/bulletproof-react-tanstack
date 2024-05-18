import { toast } from 'sonner';

import { Icons } from '@/components/Icons';
import { Button, ConfirmationDialog } from '@/components/ui';
import { Authorization, Roles } from '@/modules/auth';

import { useDeleteDiscussion } from '../api/delete-discussion';

export function DeleteDiscussion({ id }: { id: string }) {
  const deleteDiscussion = useDeleteDiscussion({
    mutationConfig: {
      onSuccess: () => {
        toast.success('Discussion Deleted');
      },
    },
  });

  return (
    <Authorization allowedRoles={[Roles.Admin]}>
      <ConfirmationDialog
        body="Are you sure you want to delete this discussion?"
        confirmButton={
          <Button
            isLoading={deleteDiscussion.isPending}
            variant="destructive"
            onClick={() => deleteDiscussion.mutate({ discussionId: id })}
          >
            Delete Discussion
          </Button>
        }
        icon="danger"
        title="Delete Discussion"
        triggerButton={
          <Button
            icon={<Icons.Trash className="size-4" />}
            variant="destructive"
          >
            Delete Discussion
          </Button>
        }
      />
    </Authorization>
  );
}
