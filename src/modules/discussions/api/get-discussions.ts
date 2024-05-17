import { queryOptions, useQuery } from '@tanstack/react-query';

import { api } from '@/libs/api-client';
import { type QueryConfig } from '@/libs/react-query';

import { type Discussion } from '../types';

export function getDiscussions(): Promise<Discussion[]> {
  return api.get('/discussions');
}

export function getDiscussionsQueryOptions() {
  return queryOptions({
    queryFn: getDiscussions,
    queryKey: ['discussions'],
  });
}

type UseDiscussionsOptions = {
  queryConfig?: QueryConfig<typeof getDiscussionsQueryOptions>;
};

export function useDiscussions({ queryConfig }: UseDiscussionsOptions) {
  return useQuery({
    ...getDiscussionsQueryOptions(),
    ...queryConfig,
  });
}
