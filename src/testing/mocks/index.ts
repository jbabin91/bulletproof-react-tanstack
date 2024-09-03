import { env } from '@/configs';

export const enableMocking = async () => {
  if (env.VITE_ENABLE_API_MOCKING) {
    const { worker } = await import('./browser');
    const { initializeDb } = await import('./db');
    await initializeDb();
    return worker.start({
      onUnhandledRequest(req, print) {
        const url = new URL(req.url);
        const excludedRoutes = ['node_modules', 'assets', 'src', 'vite.svg'];

        const isExcluded = excludedRoutes.some((route) => {
          return url.pathname.includes(route) || url.host.includes(route);
        });

        if (isExcluded) {
          return;
        }

        print.warning();
      },
    });
  }
};
