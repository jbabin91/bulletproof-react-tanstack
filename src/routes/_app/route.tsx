import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_app')({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        search: {
          redirect: location.pathname,
        },
        to: '/login',
      });
    }
    // console.log(context.auth.user);
  },
  component: AppLayout,
});

function AppLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
