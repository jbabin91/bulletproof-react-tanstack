import { queryOptions, useQuery } from '@tanstack/react-query';

import { api } from '@/libs/api-client';
import { type QueryConfig } from '@/libs/react-query';

import { type Discussion } from '../types';

export function getDiscussion({
  discussionId,
}: {
  discussionId: string;
}): Promise<Discussion> {
  return api.get(`/discussions/${discussionId}`);
}

export function getDiscussionQueryOptions(discussionId: string) {
  return queryOptions({
    queryFn: () => getDiscussion({ discussionId }),
    queryKey: ['discussions', discussionId],
  });
}

type UseDiscussionOptions = {
  discussionId: string;
  queryConfig?: QueryConfig<typeof getDiscussionQueryOptions>;
};

export function useDiscussion({
  discussionId,
  queryConfig,
}: UseDiscussionOptions) {
  return useQuery({
    ...getDiscussionQueryOptions(discussionId),
    ...queryConfig,
  });
}
