import { createFileRoute } from '@tanstack/react-router';

import { Head } from '@/components/seo';

export const Route = createFileRoute('/_app/profile')({
  component: Profile,
});

function Profile() {
  return (
    <>
      <Head title="Profile" />
      <div>Hello /_app/profile!</div>
    </>
  );
}
