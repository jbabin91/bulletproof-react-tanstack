import { api } from '@/libs/api-client';

export function logout(): Promise<void> {
  return api.post('/auth/logout');
}
