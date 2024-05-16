import { createRouter, RouterProvider } from '@tanstack/react-router';

import { NotFound } from '@/components/NotFound';
import { routeTree } from '@/routeTree.gen';

const router = createRouter({
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
  return <RouterProvider router={router} />;
}
