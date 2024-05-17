import { createFileRoute } from '@tanstack/react-router';

import { Head } from '@/components/seo';

export const Route = createFileRoute('/_auth/register')({
  component: Register,
});

function Register() {
  return (
    <>
      <Head description="Register Page" title="Register" />
      <div>Hello /_auth/register!</div>
    </>
  );
}
