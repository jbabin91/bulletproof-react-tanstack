import { toast } from 'sonner';

import { Icons } from '@/components/Icons';
import { Button, ConfirmationDialog } from '@/components/ui';
import { Authorization, Roles } from '@/modules/auth';

import { useDeleteComment } from '../api/delete-comment';

export function DeleteComment({
  discussionId,
  id,
}: {
  discussionId: string;
  id: string;
}) {
  const deleteComment = useDeleteComment({
    discussionId,
    mutationConfig: {
      onSuccess: () => {
        toast.success('Comment Deleted');
      },
    },
  });

  return (
    <Authorization allowedRoles={[Roles.Admin]}>
      <ConfirmationDialog
        body="Are you sure you want to delete this comment?"
        confirmButton={
          <Button
            isLoading={deleteComment.isPending}
            variant="destructive"
            onClick={() => deleteComment.mutate({ commentId: id })}
          >
            Delete Comment
          </Button>
        }
        icon="danger"
        title="Delete Comment"
        triggerButton={
          <Button
            icon={<Icons.Trash className="size-4" />}
            variant="destructive"
          >
            Delete Comment
          </Button>
        }
      />
    </Authorization>
  );
}
