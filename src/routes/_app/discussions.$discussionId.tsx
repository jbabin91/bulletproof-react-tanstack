import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { ErrorBoundary } from 'react-error-boundary';

import { ContentLayout } from '@/components/layout';
import { Card, CardContent } from '@/components/ui';
import { MarkdownPreview } from '@/components/ui/MarkdownPreview';
import { Spinner } from '@/components/ui/Spinner';
import { Comments } from '@/modules/comments';
import {
  getDiscussionQueryOptions,
  UpdateDiscussion,
} from '@/modules/discussions';
import { formatDate } from '@/utils/format';

export const Route = createFileRoute('/_app/discussions/$discussionId')({
  component: Discussion,
  loader: ({ context: { queryClient }, params: { discussionId } }) => {
    return queryClient.ensureQueryData(getDiscussionQueryOptions(discussionId));
  },
});

function Discussion() {
  const discussionId = Route.useParams().discussionId;
  const { data: discussion, isLoading } = useSuspenseQuery(
    getDiscussionQueryOptions(discussionId),
  );

  if (isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <ContentLayout title={discussion.title}>
      <span className="text-sm font-bold">
        {formatDate(Number.parseInt(discussion.createdAt))}
      </span>
      {discussion.author ? (
        <span className="ml-2 text-sm font-bold">
          by {discussion.author.firstName} {discussion.author.lastName}
        </span>
      ) : null}
      <div className="mt-5 flex flex-col space-y-10">
        <div className="flex justify-end">
          <UpdateDiscussion discussionId={discussionId} />
        </div>
        <Card>
          <CardContent className="mt-6">
            <MarkdownPreview value={discussion.body} />
          </CardContent>
        </Card>
        <ErrorBoundary
          fallback={
            <div>Failed to load comments. Try to refresh the page.</div>
          }
        >
          <Comments discussionId={discussionId} />
        </ErrorBoundary>
      </div>
    </ContentLayout>
  );
}
