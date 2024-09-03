import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  client: {
    VITE_API_URL: z.string(),
    VITE_APP_URL: z.string().optional().default('http://localhost:3000'),
    VITE_ENABLE_API_MOCKING: z
      .string()
      .refine((s) => s === 'true' || s === 'false')
      .transform((s) => s === 'true')
      .optional(),
    VITE_MOCK_API_PORT: z.string().optional().default('8080'),
  },
  clientPrefix: 'VITE_',
  emptyStringAsUndefined: true,
  runtimeEnv: import.meta.env,
});

// const createEnv = () => {
//   const EnvSchema = z.object({
//     API_URL: z.string(),
//     APP_MOCK_API_PORT: z.string().optional().default('8080'),
//     APP_URL: z.string().optional().default('http://localhost:3000'),
//     ENABLE_API_MOCKING: z
//       .string()
//       .refine((s) => s === 'true' || s === 'false')
//       .transform((s) => s === 'true')
//       .optional(),
//   });

//   const envVars = Object.entries(import.meta.env).reduce<
//     Record<string, string>
//   >((acc, curr) => {
//     const [key, value] = curr;
//     if (key.startsWith('VITE_APP_')) {
//       acc[key.replace('VITE_APP_', '')] = value;
//     }
//     return acc;
//   }, {});

//   const parsedEnv = EnvSchema.safeParse(envVars);

//   if (!parsedEnv.success) {
//     throw new Error(
//       `Invalid env provided.
// The following variables are missing or invalid:
// ${Object.entries(parsedEnv.error.flatten().fieldErrors)
//   .map(([k, v]) => `- ${k}: ${v}`)
//   .join('\n')}
// `,
//     );
//   }

//   return parsedEnv.data;
// };

// export const env = createEnv();
