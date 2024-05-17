import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

import { api } from '@/libs/api-client';
import { type MutationConfig } from '@/libs/react-query';

import { type Discussion } from '../types';
import { getDiscussionsQueryOptions } from './get-discussions';

export const updateDiscussionInputSchema = z.object({
  body: z.string().min(1, 'Required'),
  title: z.string().min(1, 'Required'),
});

export type UpdateDiscussionInput = z.infer<typeof updateDiscussionInputSchema>;

export function updateDiscussion({
  data,
  discussionId,
}: {
  data: UpdateDiscussionInput;
  discussionId: string;
}): Promise<Discussion> {
  return api.patch(`/discussions/${discussionId}`, data);
}

type UseUpdateDiscussionOptions = {
  mutationConfig?: MutationConfig<typeof updateDiscussion>;
};

export function useUpdateDiscussion({
  mutationConfig,
}: UseUpdateDiscussionOptions) {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig ?? {};

  return useMutation({
    mutationFn: updateDiscussion,
    onSuccess: (data, ...args) => {
      queryClient.invalidateQueries({
        queryKey: getDiscussionsQueryOptions().queryKey,
      });
      onSuccess?.(data, ...args);
    },
    ...restConfig,
  });
}
