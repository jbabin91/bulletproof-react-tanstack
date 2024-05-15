import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';

import { ErrorFallback } from '@/components/ErrorFallback';
import { Toaster } from '@/components/ui';

import { ThemeProvider } from './ThemeProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <ThemeProvider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <HelmetProvider>
            {children}
            <Toaster />
          </HelmetProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </Suspense>
  );
}
