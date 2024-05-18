import { zodResolver } from '@hookform/resolvers/zod';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { useLayoutEffect, useState } from 'react';
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
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
} from '@/components/ui';
import { registerInputSchema } from '@/modules/auth';
import { useTeams } from '@/modules/teams';

const fallback = '/dashboard';

export const Route = createFileRoute('/_auth/register')({
  component: Register,
  validateSearch: z.object({
    redirect: z.string().optional().catch(''),
  }),
});

function Register() {
  const router = useRouter();
  const { auth, isAuthenticated } = Route.useRouteContext({
    select: ({ auth }) => ({ auth, isAuthenticated: auth.isAuthenticated }),
  });
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const registering = auth.useRegister({
    onSettled: () => navigate({ to: search.redirect ?? fallback }),
  });
  const [chooseTeam, setChooseTeam] = useState(false);

  const teamsQuery = useTeams({
    queryConfig: {
      enabled: chooseTeam,
    },
  });

  useLayoutEffect(() => {
    if (isAuthenticated && search.redirect) {
      router.history.push(search.redirect);
    }
  }, [isAuthenticated, router.history, search.redirect]);

  const form = useForm<z.infer<typeof registerInputSchema>>({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    },
    resolver: zodResolver(registerInputSchema),
    shouldUnregister: true,
  });

  async function handleRegister(values: z.infer<typeof registerInputSchema>) {
    registering.mutate(values);
    await router.invalidate();
  }

  return (
    <>
      <Head description="Register page" title="Register" />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Enter your information below to register to your account.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleRegister)}>
            <CardContent className="grid gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <div className="flex items-center space-x-2">
                <Switch
                  checked={chooseTeam}
                  id="choose-team"
                  onCheckedChange={(value) => {
                    setChooseTeam(value);
                  }}
                />
                <Label htmlFor="choose-team">Join Existing Team</Label>
              </div>
              {chooseTeam && teamsQuery.data ? (
                <FormField
                  control={form.control}
                  name="teamId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Team</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a team" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {teamsQuery?.data.length > 0 ? (
                            teamsQuery?.data?.map((team) => (
                              <SelectItem key={team.id} value={team.id}>
                                {team.name}
                              </SelectItem>
                            ))
                          ) : (
                            <SelectItem value="0">No Options</SelectItem>
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : (
                <FormField
                  control={form.control}
                  name="teamName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Team Name</FormLabel>
                      <FormControl>
                        <Input placeholder="ACME Inc." type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button
                className="w-full"
                isLoading={registering.isPending}
                type="submit"
              >
                Sign up
              </Button>
              <div className="text-center text-sm">
                Already have an account?{' '}
                <Button
                  variant="link"
                  onClick={() => navigate({ to: '/login' })}
                >
                  Sign in
                </Button>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </>
  );
}
