import { http, HttpResponse } from 'msw';

import { env } from '@/configs';
import { db } from '@/testing/mocks/db';
import { networkDelay } from '@/testing/mocks/utils';

export const teamsHandlers = [
  http.get(`${env.VITE_API_URL}/teams`, async () => {
    await networkDelay();

    try {
      const result = db.team.getAll();
      return HttpResponse.json({ data: result });
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || 'Server Error' },
        { status: 500 },
      );
    }
  }),
];
