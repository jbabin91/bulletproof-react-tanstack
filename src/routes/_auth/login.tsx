import { zodResolver } from '@hookform/resolvers/zod';
import {
  createFileRoute,
  useLayoutEffect,
  useRouter,
} from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Head } from '@/components/seo';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/ui';
import { loginInputSchema } from '@/modules/auth';

const fallback = '/dashboard';

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
  const navigate = Route.useNavigate();
  const login = auth.useLogin({
    onSettled: () => navigate({ to: search.redirect ?? fallback }),
  });

  useLayoutEffect(() => {
    if (isAuthenticated && search.redirect) {
      router.history.push(search.redirect);
    }
  }, [isAuthenticated, router.history, search.redirect]);

  const form = useForm<z.infer<typeof loginInputSchema>>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginInputSchema),
  });

  async function handleLogin(values: z.infer<typeof loginInputSchema>) {
    login.mutate(values);
    await router.invalidate();
  }

  return (
    <>
      <Head description="Login page" title="Login" />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)}>
            <CardContent className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="m@example.com"
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
                  <FormItem className="grid gap-2">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button
                className="w-full"
                isLoading={login.isPending}
                type="submit"
              >
                Sign in
              </Button>
              <div className="text-center text-sm">
                Don&apos;t have an account?{' '}
                <Button
                  variant="link"
                  onClick={() => navigate({ to: '/register' })}
                >
                  Sign up
                </Button>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </>
  );
}
