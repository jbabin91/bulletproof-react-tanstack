import { env } from '@/configs/env';

import { initializeDb } from './db';

export const enableMocking = async () => {
  if (env.VITE_APP_ENABLE_API_MOCKING) {
    const { worker } = await import('./browser');
    initializeDb();
    return worker.start({
      onUnhandledRequest(request, print) {
        if (request.url.startsWith('/api/')) {
          print.warning();
        }
        return;
      },
    });
  }
};
