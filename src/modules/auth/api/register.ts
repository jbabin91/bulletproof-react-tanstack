import { z } from 'zod';

import { api } from '@/libs/api-client';

import { type UserResponse } from '../types';

export const registerInputSchema = z
  .object({
    email: z.string().min(1, 'Required'),
    firstName: z.string().min(1, 'Required'),
    lastName: z.string().min(1, 'Required'),
    password: z.string().min(1, 'Required'),
  })
  .and(
    z
      .object({
        teamId: z.string().min(1, 'Required'),
        teamName: z.string().optional(),
      })
      .or(
        z.object({
          teamId: z.string().optional(),
          teamName: z.string().min(1, 'Required'),
        }),
      ),
  );

export type RegisterInput = z.infer<typeof registerInputSchema>;

export function registerWithEmailAndPassword(
  data: RegisterInput,
): Promise<UserResponse> {
  return api.post('/auth/register', data);
}
