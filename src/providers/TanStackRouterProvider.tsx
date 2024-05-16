import { createRouter, RouterProvider } from '@tanstack/react-router';

import { NotFound } from '@/components/NotFound';
import { useAuth } from '@/modules/auth';
import { routeTree } from '@/routeTree.gen';

const router = createRouter({
  context: {
    auth: undefined!,
  },
  defaultNotFoundComponent: NotFound,
  routeTree,
});

declare module '@tanstack/react-router' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Register {
    router: typeof router;
  }
}

export function TanStackRouterProvider() {
  const auth = useAuth();
  return <RouterProvider context={{ auth }} router={router} />;
}
