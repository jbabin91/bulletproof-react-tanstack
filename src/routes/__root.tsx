import { createRootRoute, Outlet } from '@tanstack/react-router';
import * as React from 'react';

import {
  TanstackQueryDevtools,
  TanstackRouterDevtools,
} from '@/components/utils';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
      <TanstackQueryDevtools />
      <TanstackRouterDevtools />
    </React.Fragment>
  );
}
