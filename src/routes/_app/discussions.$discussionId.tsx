import { createFileRoute } from '@tanstack/react-router';

import { Head } from '@/components/seo';

export const Route = createFileRoute('/_app/discussions/$discussionId')({
  component: Discussion,
});

function Discussion() {
  return (
    <>
      <Head title="Discussion" />
      <div>Hello /_app/discussions/$discussionId!</div>
    </>
  );
}
