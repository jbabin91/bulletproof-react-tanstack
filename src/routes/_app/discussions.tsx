import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/discussions')({
  component: Discussions,
});

function Discussions() {
  return (
    <div>
      <div>Hello /_app/discussions!</div>
      <Outlet />
    </div>
  );
}
