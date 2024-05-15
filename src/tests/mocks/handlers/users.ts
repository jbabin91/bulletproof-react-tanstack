import { http, HttpResponse } from 'msw';

import { env } from '@/configs/env';

import { db, persistDb } from '../db';
import { requireAdmin, requireAuth, sanitizeUser } from '../utils';

type ProfileBody = {
  email: string;
  firstName: string;
  lastName: string;
  bio: string;
};

export const usersHandlers = [
  http.get(`${env.VITE_APP_API_URL}/users`, ({ cookies }) => {
    try {
      const user = requireAuth(cookies);
      const result = db.user
        .findMany({
          where: {
            teamId: {
              equals: user?.teamId,
            },
          },
        })
        .map((user) => sanitizeUser(user));

      return HttpResponse.json(result);
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || 'Server Error' },
        { status: 500 },
      );
    }
  }),
  http.patch(
    `${env.VITE_APP_API_URL}/users/profile`,
    async ({ request, cookies }) => {
      try {
        const user = requireAuth(cookies);
        const data = (await request.json()) as ProfileBody;
        const result = db.user.update({
          data,
          where: {
            id: {
              equals: user?.id,
            },
          },
        });
        persistDb('user');
        return HttpResponse.json(result);
      } catch (error: any) {
        return HttpResponse.json(
          { message: error?.message || 'Server Error' },
          { status: 500 },
        );
      }
    },
  ),
  http.delete(
    `${env.VITE_APP_API_URL}/users/:userId`,
    ({ cookies, params }) => {
      try {
        const user = requireAuth(cookies);
        const userId = params.userId as string;
        requireAdmin(user);
        const result = db.user.delete({
          where: {
            id: {
              equals: userId,
            },
            teamId: {
              equals: user?.teamId,
            },
          },
        });
        persistDb('user');
        return HttpResponse.json(result);
      } catch (error: any) {
        return HttpResponse.json(
          { message: error?.message || 'Server Error' },
          { status: 500 },
        );
      }
    },
  ),
];
