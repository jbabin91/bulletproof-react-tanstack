import { createFileRoute } from '@tanstack/react-router';

import { Head } from '@/components/seo';

export const Route = createFileRoute('/_auth/login')({
  component: Login,
});

function Login() {
  return (
    <>
      <Head description="Login Page" title="Login" />
      <div>Hello /_auth/login!</div>
    </>
  );
}
