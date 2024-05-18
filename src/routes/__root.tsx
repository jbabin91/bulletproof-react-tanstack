import { type QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';

import {
  TanStackQueryDevtools,
  TanStackRouterDevtools,
} from '@/components/utils';
import { type AuthContext } from '@/modules/auth';

export const Route = createRootRouteWithContext<{
  auth: AuthContext;
  queryClient: QueryClient;
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
