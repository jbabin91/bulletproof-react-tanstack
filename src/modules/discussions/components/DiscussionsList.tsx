import { Link } from '@tanstack/react-router';

import { Button, Table } from '@/components/ui';
import { Spinner } from '@/components/ui/Spinner';
import { formatDate } from '@/utils/format';

import { useDiscussions } from '../api/get-discussions';
import { DeleteDiscussion } from './DeleteDiscussion';

export function DiscussionsList() {
  const discussions = useDiscussions({
    queryConfig: {
      refetchInterval: () => 1000,
    },
  });

  if (discussions.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!discussions.data) return null;

  return (
    <Table
      columns={[
        {
          field: 'title',
          title: 'Title',
        },
        {
          Cell({ entry: { createdAt } }) {
            return <span>{formatDate(Number.parseInt(createdAt))}</span>;
          },
          field: 'createdAt',
          title: 'Created At',
        },
        {
          Cell({ entry: { id } }) {
            return (
              <Button>
                <Link
                  params={{
                    discussionId: id,
                  }}
                  preload="intent"
                  to="/discussions/$discussionId"
                >
                  View
                </Link>
              </Button>
            );
          },
          field: 'id',
          title: '',
        },
        {
          Cell({ entry: { id } }) {
            return <DeleteDiscussion id={id} />;
          },
          field: 'id',
          title: '',
        },
      ]}
      data={discussions.data}
    />
  );
}
