import { createFileRoute } from '@tanstack/react-router';

import { ContentLayout } from '@/components/layout';
import { Authorization, Roles, useUser } from '@/modules/auth';
import { UsersList } from '@/modules/users';

export const Route = createFileRoute('/_app/users')({
  component: Users,
});

function Users() {
  const user = useUser();

  if (!user.data) return null;

  return (
    <ContentLayout title="Users">
      <Authorization
        allowedRoles={[Roles.Admin]}
        forbiddenFallback={<div>Only admins can view this.</div>}
      >
        <UsersList />
      </Authorization>
    </ContentLayout>
  );
}
