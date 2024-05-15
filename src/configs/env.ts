import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  client: {
    VITE_APP_API_URL: z
      .string()
      .url()
      .default('https://api.bulletproofapp.com'),
    VITE_APP_ENABLE_API_MOCKING: z.string().default('false'),
  },
  clientPrefix: 'VITE_APP_',
  emptyStringAsUndefined: true,
  runtimeEnv: import.meta.env,
  server: {},
});
