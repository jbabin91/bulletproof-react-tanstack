import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';

import {
  TanStackQueryDevtools,
  TanStackRouterDevtools,
} from '@/components/utils';
import { type AuthContext } from '@/modules/auth';

export const Route = createRootRouteWithContext<{
  auth: AuthContext;
}>()({
  component: RootLayout,
});

function RootLayout() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
      <TanStackQueryDevtools />
    </>
  );
}
