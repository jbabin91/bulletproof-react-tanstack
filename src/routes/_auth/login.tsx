import {
  createFileRoute,
  Link,
  useLayoutEffect,
  useRouter,
} from '@tanstack/react-router';
import { z } from 'zod';

import reactLogo from '@/assets/react.svg';
import { Head } from '@/components/seo';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/ui';
import { loginInputSchema } from '@/modules/auth';

export const Route = createFileRoute('/_auth/login')({
  component: Login,
  validateSearch: z.object({
    redirect: z.string().optional().catch(''),
  }),
});

function Login() {
  const router = useRouter();
  const { auth, isAuthenticated } = Route.useRouteContext({
    select: ({ auth }) => ({ auth, isAuthenticated: auth.isAuthenticated }),
  });
  const search = Route.useSearch();
  const login = auth.useLogin({
    onSuccess: () => {
      router.history.push('/dashboard');
    },
  });

  useLayoutEffect(() => {
    if (isAuthenticated && search.redirect) {
      router.history.push(search.redirect);
    }
  }, [isAuthenticated, router.history, search.redirect]);

  return (
    <>
      <Head description="Log in to your account" title="Login" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Link to="/">
            <img alt="Workflow" className="size-12 w-auto" src={reactLogo} />
          </Link>
        </div>
        <h1 className="mt-3 text-center text-3xl font-extrabold">
          Log in to your account
        </h1>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <div>
            <Form
              schema={loginInputSchema}
              onSubmit={(values) => {
                login.mutate(values);
                router.invalidate();
              }}
            >
              {(form) => (
                <>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john.doe@example.com"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-between">
                    <Button isLoading={login.isPending}>Login</Button>
                    <Button variant="link">
                      <Link className="text-sm font-medium" to="/register">
                        Register
                      </Link>
                    </Button>
                  </div>
                </>
              )}
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
