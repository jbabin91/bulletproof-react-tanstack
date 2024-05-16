import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/libs/api-client';
import { type MutationConfig } from '@/libs/react-query';

import { getCommentsQueryOptions } from './get-comments';

export function deleteComment({ commentId }: { commentId: string }) {
  return api.delete(`/comments/${commentId}`);
}

type UseDeleteCommentOptions = {
  discussionId: string;
  mutationConfig?: MutationConfig<typeof deleteComment>;
};

export function useDeleteComment({
  discussionId,
  mutationConfig,
}: UseDeleteCommentOptions) {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig ?? {};

  return useMutation({
    mutationFn: deleteComment,
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: getCommentsQueryOptions(discussionId).queryKey,
      });
      onSuccess?.(...args);
    },
    ...restConfig,
  });
}
