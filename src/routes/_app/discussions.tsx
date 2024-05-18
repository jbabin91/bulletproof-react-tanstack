import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/discussions')({
  component: DiscussionsLayout,
});

function DiscussionsLayout() {
  return <Outlet />;
}
