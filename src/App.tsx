import { Toaster } from '@/components/ui';
import { TailwindIndicator } from '@/components/utils';
import { Providers } from '@/providers';

export function App() {
  return (
    <Providers>
      <Toaster closeButton richColors />
      <TailwindIndicator />
    </Providers>
  );
}
