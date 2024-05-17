import { createFileRoute, Link, useRouter } from '@tanstack/react-router';
import { useLayoutEffect, useState } from 'react';
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
  const [chooseTeam, setChooseTeam] = useState(false);
  const search = Route.useSearch();
  const registering = auth.useRegister({
    onSuccess: () => {
      router.history.push('/dashboard');
    },
  });

  useLayoutEffect(() => {
    if (isAuthenticated && search.redirect) {
      router.history.push(search.redirect);
    }
  }, [isAuthenticated, router.history, search.redirect]);

  const teamsQuery = useTeams({
    queryConfig: {
      enabled: chooseTeam,
    },
  });

  return (
    <>
      <Head description="Register your account" title="Register" />
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Link to="/">
            <img alt="Workflow" className="size-12 w-auto" src={reactLogo} />
          </Link>
        </div>
        <h1 className="mt-3 text-center text-3xl font-extrabold">
          Register your account
        </h1>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <div>
            <Form
              options={{
                shouldUnregister: true,
              }}
              schema={registerInputSchema}
              onSubmit={(values) => {
                registering.mutate(values);
                router.invalidate();
              }}
            >
              {(form) => (
                <>
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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

                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={chooseTeam}
                      id="choose-team"
                      onCheckedChange={setChooseTeam}
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
                            <Input
                              placeholder="ACME Inc."
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  <div className="flex justify-between">
                    <Button isLoading={registering.isPending}>Register</Button>
                    <Button variant="link">
                      <Link className="text-sm font-medium" to="/login">
                        Log In
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
