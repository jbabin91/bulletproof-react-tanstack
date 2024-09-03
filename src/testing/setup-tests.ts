import { afterAll, afterEach, beforeAll, beforeEach, vi } from 'vitest';

import { initializeDb, resetDb } from '@/testing/mocks/db';
import { server } from '@/testing/mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
beforeEach(() => {
  const ResizeObserverMock = vi.fn(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    unobserve: vi.fn(),
  }));

  vi.stubGlobal('ResizeObserver', ResizeObserverMock);

  window.btoa = (str: string) => Buffer.from(str, 'binary').toString('base64');
  window.atob = (str: string) => Buffer.from(str, 'base64').toString('binary');

  initializeDb();
});
afterEach(() => {
  server.resetHandlers();
  resetDb();
});
