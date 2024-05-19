import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
  useRouter,
} from '@tanstack/react-router';
import type React from 'react';

import { Icons } from '@/components/Icons';
import { ModeToggle } from '@/components/ModeToggle';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui';
import { Roles, useAuthorization } from '@/modules/auth';

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
  },
  component: AppLayout,
});

function Logo() {
  return (
    <>
      <Link
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
        to="/"
      >
        <Icons.Package2 className="size-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
    </>
  );
}

type SideNavigationItem = {
  name: string;
  to: string;
  icon: React.ReactNode;
};

function AppLayout() {
  const router = useRouter();
  const navigate = Route.useNavigate();
  const { auth } = Route.useRouteContext({
    select: ({ auth }) => ({ auth }),
  });
  const logout = auth.useLogout({
    onSettled: () => navigate({ to: '/login' }),
  });
  const { checkAccess } = useAuthorization();

  const navigationLinks = [
    {
      icon: (
        <Icons.Home
          aria-hidden="true"
          className="mr-4 size-6 shrink-0 text-primary group-hover:text-primary/40"
        />
      ),
      name: 'Dashboard',
      to: '/dashboard',
    },
    {
      icon: (
        <Icons.Folder
          aria-hidden="true"
          className="mr-4 size-6 shrink-0 group-hover:text-primary/40"
        />
      ),
      name: 'Discussions',
      to: '/discussions',
    },
    checkAccess({ allowedRoles: [Roles.Admin] }) && {
      icon: (
        <Icons.Users
          aria-hidden="true"
          className="mr-4 size-6 shrink-0 group-hover:text-primary/40"
        />
      ),
      name: 'Users',
      to: '/users',
    },
  ].filter(Boolean) as SideNavigationItem[];

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Logo />
          {navigationLinks.map((item) => (
            <Link
              key={item.name}
              className="text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
              to={item.to}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="shrink-0 md:hidden"
              size="icon"
              variant="outline"
            >
              <Icons.Menu className="size-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Logo />
              {navigationLinks.map((item) => (
                <Link
                  key={item.name}
                  className="text-muted-foreground hover:text-foreground [&.active]:text-foreground"
                  to={item.to}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full" size="icon" variant="secondary">
                <Icons.CircleUser className="size-5" />
                <span className="sr-only">Open user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate({ to: '/profile' })}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={async () => {
                  logout.mutate({});
                  await router.invalidate();
                }}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}
