import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/libs/api-client';
import { type MutationConfig } from '@/libs/react-query';

import { getUsersQueryOptions } from './get-users';

export function deleteUser({ userId }: { userId: string }) {
  return api.delete(`/users/${userId}`);
}

type UseDeleteUserOptions = {
  mutationConfig?: MutationConfig<typeof deleteUser>;
};

export function useDeleteUser({ mutationConfig }: UseDeleteUserOptions) {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig ?? {};

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: getUsersQueryOptions().queryKey,
      });
      onSuccess?.(...args);
    },
    ...restConfig,
  });
}
