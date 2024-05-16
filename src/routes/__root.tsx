import { createRootRoute, Link, Outlet } from '@tanstack/react-router';

import { ModeToggle } from '@/components/ModeToggle';
import { TanStackRouterDevtools } from '@/components/utils';

export const Route = createRootRoute({
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
    </>
  );
}
