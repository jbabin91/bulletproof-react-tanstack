import { http, HttpResponse } from 'msw';

import { env } from '@/configs/env';

import { db, persistDb } from '../db';
import { requireAdmin, requireAuth, sanitizeUser } from '../utils';

type DiscussionBody = {
  title: string;
  body: string;
};

export const discussionsHandlers = [
  http.get(`${env.VITE_APP_API_URL}/discussions`, ({ cookies }) => {
    try {
      const user = requireAuth(cookies);
      const result = db.discussion
        .findMany({
          where: {
            teamId: {
              equals: user?.teamId,
            },
          },
        })
        .map(({ authorId, ...discussion }) => {
          const author = db.user.findFirst({
            where: {
              id: {
                equals: authorId,
              },
            },
          });
          return {
            ...discussion,
            author: author ? sanitizeUser(author) : {},
          };
        });
      return HttpResponse.json(result);
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || 'Server Error' },
        { status: 500 },
      );
    }
  }),
  http.get(
    `${env.VITE_APP_API_URL}/discussions/:discussionId`,
    ({ params, cookies }) => {
      try {
        const user = requireAuth(cookies);
        const discussionId = params.discussionId as string;
        const discussion = db.discussion.findFirst({
          where: {
            id: {
              equals: discussionId,
            },
            teamId: {
              equals: user?.teamId,
            },
          },
        });

        if (!discussion) {
          return HttpResponse.json(
            { message: 'Discussion not found' },
            { status: 404 },
          );
        }

        const author = db.user.findFirst({
          where: {
            id: {
              equals: discussion.authorId,
            },
          },
        });

        // delete discussion.authorId;

        const result = {
          ...discussion,
          author: author ? sanitizeUser(author) : {},
        };

        return HttpResponse.json(result);
      } catch (error: any) {
        return HttpResponse.json(
          { message: error?.message || 'Server Error' },
          { status: 500 },
        );
      }
    },
  ),
  http.post(
    `${env.VITE_APP_API_URL}/discussions`,
    async ({ request, cookies }) => {
      try {
        const user = requireAuth(cookies);
        const data = (await request.json()) as DiscussionBody;
        requireAdmin(user);
        const result = db.discussion.create({
          authorId: user?.id,
          teamId: user?.teamId,
          ...data,
        });
        persistDb('discussion');
        return HttpResponse.json(result);
      } catch (error: any) {
        return HttpResponse.json(
          { message: error?.message || 'Server Error' },
          { status: 500 },
        );
      }
    },
  ),
  http.patch(
    `${env.VITE_APP_API_URL}/discussions/:discussionId`,
    async ({ request, params, cookies }) => {
      try {
        const user = requireAuth(cookies);
        const data = (await request.json()) as DiscussionBody;
        const discussionId = params.discussionId as string;
        requireAdmin(user);
        const result = db.discussion.update({
          data,
          where: {
            id: {
              equals: discussionId,
            },
            teamId: {
              equals: user?.teamId,
            },
          },
        });
        persistDb('discussion');
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
    `${env.VITE_APP_API_URL}/discussions/:discussionId`,
    ({ cookies, params }) => {
      try {
        const user = requireAuth(cookies);
        const discussionId = params.discussionId as string;
        requireAdmin(user);
        const result = db.discussion.delete({
          where: {
            id: {
              equals: discussionId,
            },
          },
        });
        persistDb('discussion');
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
