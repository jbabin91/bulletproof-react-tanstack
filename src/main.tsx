import '@/styles/globals.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from '@/app';
import { Providers } from '@/providers';
import { enableMocking } from '@/tests/mocks';

await enableMocking().then(() => {
  ReactDOM.createRoot(document.querySelector('#app')!).render(
    <React.StrictMode>
      <Providers>
        <App />
      </Providers>
    </React.StrictMode>,
  );
});
