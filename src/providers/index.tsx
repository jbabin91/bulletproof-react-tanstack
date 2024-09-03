import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { Spinner } from '@/components/ui';
import { TanstackQueryProvider } from '@/providers/TanstackQueryProvider';
import { TanstackRouterProvider } from '@/providers/TanstackRouterProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <ThemeProvider>
        <HelmetProvider>
          <TanstackQueryProvider>
            <TanstackRouterProvider />
            {children}
          </TanstackQueryProvider>
        </HelmetProvider>
      </ThemeProvider>
    </Suspense>
  );
}
