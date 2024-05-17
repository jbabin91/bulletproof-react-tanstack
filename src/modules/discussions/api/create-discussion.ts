import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

import { api } from '@/libs/api-client';
import { type MutationConfig } from '@/libs/react-query';

import { type Discussion } from '../types';
import { getDiscussionsQueryOptions } from './get-discussions';

export const createDiscussionInputSchema = z.object({
  body: z.string().min(1, 'Required'),
  title: z.string().min(1, 'Required'),
});

export type CreateDiscussionInput = z.infer<typeof createDiscussionInputSchema>;

export function createDiscussion({
  data,
}: {
  data: CreateDiscussionInput;
}): Promise<Discussion> {
  return api.post('/discussions', data);
}

type UseCreateDiscussionOptions = {
  mutationConfig?: MutationConfig<typeof createDiscussion>;
};

export function useCreateDiscussion({
  mutationConfig,
}: UseCreateDiscussionOptions = {}) {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig ?? {};

  return useMutation({
    mutationFn: createDiscussion,
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: getDiscussionsQueryOptions().queryKey,
      });
      onSuccess?.(...args);
    },
    ...restConfig,
  });
}
