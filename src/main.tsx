import '@/styles/globals.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/App.tsx';
import { TailwindIndicator } from '@/components/utils';
import { Providers } from '@/providers';

createRoot(document.querySelector('#app')!).render(
  <StrictMode>
    <Providers>
      <App />
      <TailwindIndicator />
    </Providers>
  </StrictMode>,
);
