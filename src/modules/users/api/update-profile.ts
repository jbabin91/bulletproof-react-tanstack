import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';

import { api } from '@/libs/api-client';
import { type MutationConfig } from '@/libs/react-query';
import { useUser } from '@/modules/auth';

export const updateProfileInputSchema = z.object({
  bio: z.string(),
  email: z.string().min(1, 'Required').email('Invalid email'),
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
});

export type UpdateProfileInput = z.infer<typeof updateProfileInputSchema>;

export function updateProfile({ data }: { data: UpdateProfileInput }) {
  return api.patch('/profile', data);
}

type UsesUpdateProfileOptions = {
  mutationConfig?: MutationConfig<typeof updateProfile>;
};

export function useUpdateProfile({ mutationConfig }: UsesUpdateProfileOptions) {
  const { refetch: refetchUser } = useUser();

  const { onSuccess, ...restConfig } = mutationConfig ?? {};

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: (...args) => {
      refetchUser();
      onSuccess?.(...args);
    },
    ...restConfig,
  });
}
