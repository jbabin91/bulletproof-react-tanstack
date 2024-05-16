import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { useState } from 'react';

import { NotFound } from '@/components/NotFound';
import { queryConfig } from '@/libs/react-query';
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

export function TanStackProviders() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
