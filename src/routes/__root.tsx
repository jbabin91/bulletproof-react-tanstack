import { createRootRoute, Outlet } from '@tanstack/react-router';
import * as React from 'react';

import { ModeToggle } from '@/components/ModeToggle';
import { Link } from '@/components/ui';
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
      <nav className="flex justify-between p-2">
        <div className="flex gap-2 p-2">
          <Link className="[&.active]:font-bold" to="/">
            Home
          </Link>
          <Link className="[&.active]:font-bold" to="/about">
            About
          </Link>
        </div>
        <div>
          <ModeToggle />
        </div>
      </nav>
      <hr />
      <main>
        <Outlet />
      </main>
      <TanstackQueryDevtools />
      <TanstackRouterDevtools />
    </React.Fragment>
  );
}
