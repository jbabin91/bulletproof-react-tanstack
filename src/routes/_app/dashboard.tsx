import { createFileRoute } from '@tanstack/react-router';

import { ContentLayout } from '@/components/layout';
import { useUser } from '@/modules/auth';
import { Roles } from '@/modules/auth/libs/authorization';

export const Route = createFileRoute('/_app/dashboard')({
  component: Dashboard,
});

function Dashboard() {
  const user = useUser();

  return (
    <ContentLayout title="Dashboard">
      <h1 className="text-xl">
        Welcome <b>{`${user.data?.firstName} ${user.data?.lastName}`}</b>
      </h1>
      <h4 className="my-3">
        Your role is : <b>{user.data?.role}</b>
      </h4>
      <p className="font-medium">In this application you can: </p>
      {user.data?.role === Roles.User ? (
        <ul className="my-4 list-inside list-disc">
          <li>Create comments in discussions</li>
          <li>Delete own comments</li>
        </ul>
      ) : null}
      {user.data?.role === Roles.Admin ? (
        <ul className="my-4 list-inside list-disc">
          <li>Create discussions</li>
          <li>Edit discussions</li>
          <li>Delete discussions</li>
          <li>Comment on discussions</li>
          <li>Delete all comments</li>
        </ul>
      ) : null}
    </ContentLayout>
  );
}
