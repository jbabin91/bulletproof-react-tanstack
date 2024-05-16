import { api } from '@/libs/api-client';

import { type AuthUser } from '../types';

export function getUser(): Promise<AuthUser> {
  return api.get('/auth/me');
}
