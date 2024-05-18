import { createFileRoute } from '@tanstack/react-router';

import { ContentLayout } from '@/components/layout';
import { CreateDiscussion, DiscussionsList } from '@/modules/discussions';

export const Route = createFileRoute('/_app/discussions/')({
  component: Discussions,
});

function Discussions() {
  return (
    <ContentLayout title="Discussions">
      <div>
        <div className="flex justify-end">
          <CreateDiscussion />
        </div>
        <div className="mt-4">
          <DiscussionsList />
        </div>
      </div>
    </ContentLayout>
  );
}
