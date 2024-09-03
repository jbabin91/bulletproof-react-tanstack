import { env } from '@/configs';

export const enableMocking = async () => {
  if (env.VITE_ENABLE_API_MOCKING) {
    const { worker } = await import('./browser');
    const { initializeDb } = await import('./db');
    await initializeDb();
    return worker.start();
  }
};
