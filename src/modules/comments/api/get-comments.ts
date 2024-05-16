import { queryOptions, useQuery } from '@tanstack/react-query';

import { api } from '@/libs/api-client';
import { type QueryConfig } from '@/libs/react-query';

import { type Comment } from '../types';

export function getComments({
  discussionId,
}: {
  discussionId: string;
}): Promise<Comment[]> {
  return api.get('/comments', {
    params: {
      discussionId,
    },
  });
}

export function getCommentsQueryOptions(discussionId: string) {
  return queryOptions({
    queryFn: () => getComments({ discussionId }),
    queryKey: ['comments', discussionId],
  });
}

type UseCommentsOptions = {
  discussionId: string;
  queryConfig?: Awaited<QueryConfig<typeof getComments>>;
};

export function useComments({ discussionId, queryConfig }: UseCommentsOptions) {
  const { ...restConfig } = queryConfig ?? {};

  return useQuery({
    ...getCommentsQueryOptions(discussionId),
    ...restConfig,
  });
}
