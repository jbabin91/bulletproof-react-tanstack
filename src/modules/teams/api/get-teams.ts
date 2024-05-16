import { queryOptions, useQuery } from '@tanstack/react-query';

import { api } from '@/libs/api-client';
import { type QueryConfig } from '@/libs/react-query';

import { type Team } from '../types';

export function getTeams(): Promise<Team[]> {
  return api.get('/teams');
}

export function getTeamsQueryOptions() {
  return queryOptions({
    queryFn: getTeams,
    queryKey: ['teams'],
  });
}

type UseTeamsOptions = {
  queryConfig?: QueryConfig<typeof getTeamsQueryOptions>;
};

export function useTeams({ queryConfig = {} }: UseTeamsOptions = {}) {
  return useQuery({
    ...getTeamsQueryOptions(),
    ...queryConfig,
  });
}
