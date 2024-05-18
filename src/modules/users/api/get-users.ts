import { queryOptions, useQuery } from '@tanstack/react-query';

import { api } from '@/libs/api-client';
import { type QueryConfig } from '@/libs/react-query';

import { type User } from '../types';

export function getUsers(): Promise<User[]> {
  return api.get('/users');
}

export function getUsersQueryOptions() {
  return queryOptions({
    queryFn: getUsers,
    queryKey: ['users'],
  });
}

type UseUsersOptions = {
  queryConfig?: QueryConfig<typeof getUsersQueryOptions>;
};

export function useUsers({ queryConfig }: UseUsersOptions = {}) {
  return useQuery({
    ...getUsersQueryOptions(),
    ...queryConfig,
  });
}
