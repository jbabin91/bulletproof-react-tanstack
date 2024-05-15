import { http, HttpResponse } from 'msw';

import { env } from '@/configs/env';

import { db } from '../db';

export const teamsHandlers = [
  http.get(`${env.VITE_APP_API_URL}/teams`, () => {
    try {
      const result = db.team.getAll();
      return HttpResponse.json(result);
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || 'Server Error' },
        { status: 500 },
      );
    }
  }),
];
