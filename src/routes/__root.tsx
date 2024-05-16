import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from '@tanstack/react-router';

import { ModeToggle } from '@/components/ModeToggle';
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
      <div className="mx-auto flex min-w-min max-w-screen-xl justify-between p-2">
        <div className="flex gap-2 p-2">
          <Link className="[&.active]:font-bold" to="/">
            Home
          </Link>{' '}
          <Link className="[&.active]:font-bold" to="/about">
            About
          </Link>
        </div>
        <ModeToggle />
      </div>
      <hr />
      <main className="mx-auto min-w-min max-w-screen-lg">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
      <TanStackQueryDevtools />
    </>
  );
}
