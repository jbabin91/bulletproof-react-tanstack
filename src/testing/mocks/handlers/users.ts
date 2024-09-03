import { http, HttpResponse } from 'msw';

import { env } from '@/configs';
import { db, persistDb } from '@/testing/mocks/db';
import {
  networkDelay,
  requireAdmin,
  requireAuth,
  sanitizeUser,
} from '@/testing/mocks/utils';

type ProfileBody = {
  email: string;
  firstName: string;
  lastName: string;
  bio: string;
};

export const usersHandlers = [
  http.get(`${env.VITE_API_URL}/users`, async ({ cookies }) => {
    await networkDelay();

    try {
      const { user, error } = requireAuth(cookies);
      if (error) {
        return HttpResponse.json({ message: error }, { status: 401 });
      }
      const result = db.user
        .findMany({
          where: {
            teamId: {
              equals: user?.teamId,
            },
          },
        })
        .map((user) => sanitizeUser(user));

      return HttpResponse.json({ data: result });
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || 'Server Error' },
        { status: 500 },
      );
    }
  }),

  http.patch(
    `${env.VITE_API_URL}/users/profile`,
    async ({ request, cookies }) => {
      await networkDelay();

      try {
        const { user, error } = requireAuth(cookies);
        if (error) {
          return HttpResponse.json({ message: error }, { status: 401 });
        }
        const data = (await request.json()) as ProfileBody;
        const result = db.user.update({
          data,
          where: {
            id: {
              equals: user?.id,
            },
          },
        });
        await persistDb('user');
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
    `${env.VITE_API_URL}/users/:userId`,
    async ({ cookies, params }) => {
      await networkDelay();

      try {
        const { user, error } = requireAuth(cookies);
        if (error) {
          return HttpResponse.json({ message: error }, { status: 401 });
        }
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
        await persistDb('user');
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
