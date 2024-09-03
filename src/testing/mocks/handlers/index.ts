import { http, HttpResponse } from 'msw';

import { env } from '@/configs';
import { authHandlers } from '@/testing/mocks/handlers/auth';
import { commentsHandlers } from '@/testing/mocks/handlers/comments';
import { discussionsHandlers } from '@/testing/mocks/handlers/discussions';
import { teamsHandlers } from '@/testing/mocks/handlers/teams';
import { usersHandlers } from '@/testing/mocks/handlers/users';
import { networkDelay } from '@/testing/mocks/utils';

export const handlers = [
  ...authHandlers,
  ...commentsHandlers,
  ...discussionsHandlers,
  ...teamsHandlers,
  ...usersHandlers,
  http.get(`${env.VITE_API_URL}/healthcheck`, async () => {
    await networkDelay();
    return HttpResponse.json({ ok: true });
  }),
];
