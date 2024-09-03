import { http, HttpResponse } from 'msw';

import { env } from '@/configs';
import { db, persistDb } from '@/testing/mocks/db';
import { networkDelay, requireAuth, sanitizeUser } from '@/testing/mocks/utils';

type CreateCommentBody = {
  body: string;
  discussionId: string;
};

export const commentsHandlers = [
  http.get(`${env.VITE_API_URL}/comments`, async ({ request, cookies }) => {
    await networkDelay();

    try {
      const { error } = requireAuth(cookies);
      if (error) {
        return HttpResponse.json({ message: error }, { status: 401 });
      }
      const url = new URL(request.url);
      const discussionId = url.searchParams.get('discussionId') ?? '';
      const page = Number(url.searchParams.get('page') ?? 1);

      const total = db.comment.count({
        where: {
          discussionId: {
            equals: discussionId,
          },
        },
      });

      const totalPages = Math.ceil(total / 10);

      const comments = db.comment
        .findMany({
          skip: 10 * (page - 1),
          take: 10,
          where: {
            discussionId: {
              equals: discussionId,
            },
          },
        })
        .map(({ authorId, ...comment }) => {
          const author = db.user.findFirst({
            where: {
              id: {
                equals: authorId,
              },
            },
          });
          return {
            ...comment,
            author: author ? sanitizeUser(author) : {},
          };
        });
      return HttpResponse.json({
        data: comments,
        meta: {
          page,
          total,
          totalPages,
        },
      });
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || 'Server Error' },
        { status: 500 },
      );
    }
  }),

  http.post(`${env.VITE_API_URL}/comments`, async ({ request, cookies }) => {
    await networkDelay();

    try {
      const { user, error } = requireAuth(cookies);
      if (error) {
        return HttpResponse.json({ message: error }, { status: 401 });
      }
      const data = (await request.json()) as CreateCommentBody;
      const result = db.comment.create({
        authorId: user?.id,
        ...data,
      });
      await persistDb('comment');
      return HttpResponse.json(result);
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || 'Server Error' },
        { status: 500 },
      );
    }
  }),

  http.delete(
    `${env.VITE_API_URL}/comments/:commentId`,
    async ({ params, cookies }) => {
      await networkDelay();

      try {
        const { user, error } = requireAuth(cookies);
        if (error) {
          return HttpResponse.json({ message: error }, { status: 401 });
        }
        const commentId = params.commentId as string;
        const result = db.comment.delete({
          where: {
            id: {
              equals: commentId,
            },
            ...(user?.role === 'USER' && {
              authorId: {
                equals: user.id,
              },
            }),
          },
        });
        await persistDb('comment');
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
