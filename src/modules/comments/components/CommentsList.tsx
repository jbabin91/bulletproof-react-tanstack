import { Icons } from '@/components/Icons';
import { Card, CardContent } from '@/components/ui';
import { MarkdownPreview } from '@/components/ui/MarkdownPreview';
import { Spinner } from '@/components/ui/Spinner';
import { Authorization, Policies, useUser } from '@/modules/auth';
import { type User } from '@/modules/users';
import { formatDate } from '@/utils/format';

import { useComments } from '../api/get-comments';
import { DeleteComment } from './DeleteComment';

export function CommentsList({ discussionId }: { discussionId: string }) {
  const user = useUser();
  const comments = useComments({ discussionId });

  if (comments.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!comments.data?.length) {
    return (
      <Card
        aria-label="comments"
        className="flex h-40 flex-col items-center justify-center"
        role="list"
      >
        <Icons.ArchiveX className="size-10" />
        <h4 className="text-lg font-semibold">No Comments Found</h4>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="mt-6">
        <ul aria-label="comments" className="flex flex-col space-y-3">
          {comments.data?.map((comment, index) => (
            <li
              key={comment.id}
              aria-label={`comment-${comment.body}-${index}`}
              className="w-full p-4 shadow-sm"
            >
              <Authorization
                policyCheck={Policies['comment:delete'](
                  user.data as User,
                  comment,
                )}
              >
                <div className="flex justify-between">
                  <div>
                    <span className="text-xs font-semibold">
                      {formatDate(Number.parseInt(comment.createdAt))}
                    </span>
                    {comment.author ? (
                      <span className="text-xs font-bold">
                        {' '}
                        by {comment.author.firstName} {comment.author.lastName}
                      </span>
                    ) : null}
                  </div>
                  <DeleteComment discussionId={discussionId} id={comment.id} />
                </div>
              </Authorization>
              <MarkdownPreview value={comment.body} />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
