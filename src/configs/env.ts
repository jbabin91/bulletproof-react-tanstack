import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  client: {
    VITE_APP_API_URL: z
      .string()
      .url()
      .default('https://api.bulletproofapp.com'),
    VITE_APP_ENABLE_API_MOCKING: z
      .preprocess((val) => val === 'true', z.boolean())
      .default(false),
  },
  clientPrefix: 'VITE_APP_',
  emptyStringAsUndefined: true,
  runtimeEnv: {
    VITE_APP_API_URL: import.meta.env.VITE_APP_API_URL,
    VITE_APP_ENABLE_API_MOCKING: import.meta.env.VITE_APP_ENABLE_API_MOCKING,
  },
  server: {},
});
