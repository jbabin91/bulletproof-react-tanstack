import { createFileRoute, Outlet } from '@tanstack/react-router';

import { Head } from '@/components/seo';

export const Route = createFileRoute('/_app/discussions')({
  component: Discussions,
});

function Discussions() {
  return (
    <>
      <Head title="Discussions" />
      <div>Hello /_app/discussions!</div>
      <Outlet />
    </>
  );
}
