import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';

import { ErrorFallback } from '@/components/ErrorFallback';
import { FullPageSpinner } from '@/components/FullPageSpinner';
import { Toaster } from '@/components/ui';
import { AuthLoader } from '@/modules/auth';

import { TanStackQueryProvider } from './TanStackQueryProvider';
import { TanStackRouterProvider } from './TanStackRouterProvider';
import { ThemeProvider } from './ThemeProvider';

export function Providers() {
  return (
    <Suspense>
      <ThemeProvider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <HelmetProvider>
            <TanStackQueryProvider>
              <AuthLoader renderLoading={FullPageSpinner}>
                <TanStackRouterProvider />
              </AuthLoader>
            </TanStackQueryProvider>
            <Toaster />
          </HelmetProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </Suspense>
  );
}
