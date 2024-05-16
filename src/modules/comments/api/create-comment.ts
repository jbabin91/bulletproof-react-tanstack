import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

import { api } from '@/libs/api-client';
import { type MutationConfig } from '@/libs/react-query';

import { type Comment } from '../types';
import { getCommentsQueryOptions } from './get-comments';

export const createCommentInputSchema = z.object({
  body: z.string().min(1, 'Required'),
  discussionId: z.string().min(1, 'Required'),
});

export type CreateCommentInput = z.infer<typeof createCommentInputSchema>;

export function createComment({
  data,
}: {
  data: CreateCommentInput;
}): Promise<Comment> {
  return api.post('/comments', data);
}

type UseCreateCommentOptions = {
  discussionId: string;
  mutationConfig?: MutationConfig<typeof createComment>;
};

export function useCreateComment({
  mutationConfig,
  discussionId,
}: UseCreateCommentOptions) {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig ?? {};

  return useMutation({
    mutationFn: createComment,
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: getCommentsQueryOptions(discussionId).queryKey,
      });
      onSuccess?.(...args);
    },
    ...restConfig,
  });
}
