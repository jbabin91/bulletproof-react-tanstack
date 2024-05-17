import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/libs/api-client';
import { type MutationConfig } from '@/libs/react-query';

import { getDiscussionsQueryOptions } from './get-discussions';

export function deleteDiscussion({ discussionId }: { discussionId: string }) {
  return api.delete(`/discussions/${discussionId}`);
}

type UseDeleteDiscussionOptions = {
  mutationConfig?: MutationConfig<typeof deleteDiscussion>;
};

export function useDeleteDiscussion({
  mutationConfig,
}: UseDeleteDiscussionOptions) {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig ?? {};

  return useMutation({
    mutationFn: deleteDiscussion,
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: getDiscussionsQueryOptions().queryKey,
      });
      onSuccess?.(...args);
    },
    ...restConfig,
  });
}
