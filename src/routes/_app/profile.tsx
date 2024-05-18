import { createFileRoute } from '@tanstack/react-router';

import { ContentLayout } from '@/components/layout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { useUser } from '@/modules/auth';
import { UpdateProfile } from '@/modules/users';

export const Route = createFileRoute('/_app/profile')({
  component: Profile,
});

function Entry({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
      <dt className="text-sm font-medium">{label}</dt>
      <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">{value}</dd>
    </div>
  );
}

function Profile() {
  const user = useUser();

  if (!user.data) return null;

  return (
    <ContentLayout title="Profile">
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <div>
            <CardTitle>User Information</CardTitle>
            <CardDescription>Personal details of the user.</CardDescription>
          </div>
          <div>
            <UpdateProfile />
          </div>
        </CardHeader>
        <CardContent>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <Entry label="First Name" value={user.data.firstName} />
              <Entry label="Last Name" value={user.data.lastName} />
              <Entry label="Email Address" value={user.data.email} />
              <Entry label="Role" value={user.data.role} />
              <Entry label="Bio" value={user.data.bio} />
            </dl>
          </div>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
