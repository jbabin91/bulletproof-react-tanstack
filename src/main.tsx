import '@/styles/globals.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Providers } from '@/providers';
import { enableMocking } from '@/tests/mocks';

enableMocking().then(() => {
  ReactDOM.createRoot(document.querySelector('#app')!).render(
    <React.StrictMode>
      <Providers />
    </React.StrictMode>,
  );
});
