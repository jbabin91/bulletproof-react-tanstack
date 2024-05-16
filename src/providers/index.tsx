import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';

import { ErrorFallback } from '@/components/ErrorFallback';
import { FullPageSpinner } from '@/components/FullPageSpinner';
import { Toaster } from '@/components/ui';
import { AuthLoader, AuthProvider } from '@/modules/auth';

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
                <AuthProvider>
                  <TanStackRouterProvider />
                </AuthProvider>
              </AuthLoader>
            </TanStackQueryProvider>
            <Toaster />
          </HelmetProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </Suspense>
  );
}
