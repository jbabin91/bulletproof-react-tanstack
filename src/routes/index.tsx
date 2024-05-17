import { createFileRoute } from '@tanstack/react-router';

import viteLogo from '/vite.svg';
import reactLogo from '@/assets/react.svg';
import { Icons } from '@/components/Icons';
import { Head } from '@/components/seo';
import { Button } from '@/components/ui';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <>
      <Head description="Bulletproof React Tanstack Landing Page" />
      <div className="flex items-center">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="block">Bulletproof React Tanstack</span>
          </h2>
          <div className="flex justify-center space-x-6">
            <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
              <img alt="Vite logo" className="logo" src={viteLogo} />
            </a>
            <a href="https://react.dev" rel="noreferrer" target="_blank">
              <img alt="React logo" className="logo react" src={reactLogo} />
            </a>
            <Icons.TanStack className="size-24 self-center p-5" />
          </div>
          <p>Showcasing Best Practices For Building React Applications</p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Button icon={<Icons.Home />}>Get started</Button>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="https://github.com/jbabin91/bulletproof-react-tanstack"
                rel="noreferrer"
                target="_blank"
              >
                <Button icon={<Icons.GitHub />} variant="outline">
                  Github Repo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
