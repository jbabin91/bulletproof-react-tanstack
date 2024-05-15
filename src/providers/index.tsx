import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';

import { ErrorFallback } from '@/components/ErrorFallback';
import { Toaster } from '@/components/ui';

import { TanStackProviders } from './TanStackProviders';
import { ThemeProvider } from './ThemeProvider';

export function Providers() {
  return (
    <Suspense>
      <ThemeProvider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <HelmetProvider>
            <TanStackProviders />
            <Toaster />
          </HelmetProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </Suspense>
  );
}
