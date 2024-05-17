import { createFileRoute } from '@tanstack/react-router';

import { Head } from '@/components/seo';

export const Route = createFileRoute('/_app/users')({
  component: Users,
});

function Users() {
  return (
    <>
      <Head title="Users" />
      <div>Hello /_app/users!</div>
    </>
  );
}
