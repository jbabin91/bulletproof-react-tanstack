import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

import viteLogo from '/vite.svg';
import reactLogo from '@/assets/react.svg';
import { ModeToggle } from '@/components/ModeToggle';
import { Button } from '@/components/ui';

export const Route = createFileRoute('/')({
  component: IndexComponent,
});

function IndexComponent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center">
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img alt="Vite logo" className="logo" src={viteLogo} />
        </a>
        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <img alt="React logo" className="logo react" src={reactLogo} />
        </a>
      </div>
      <h1 className="text-5xl font-semibold">Vite + React</h1>
      <div className="p-[2em]">
        <div className="flex justify-center gap-2">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <ModeToggle />
        </div>
        <p className="mt-2">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-[#888]">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}