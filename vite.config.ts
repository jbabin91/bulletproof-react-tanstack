/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      external: ['fsevents'],
      output: {
        experimentalMinChunkSize: 3500,
      },
    },
  },
  optimizeDeps: { exclude: ['fsevents'] },
  plugins: [react(), tsconfigPaths()],
  preview: {
    port: 3000,
  },
  server: {
    port: 3000,
  },
  test: {
    coverage: {
      include: ['src/**'],
    },
    environment: 'jsdom',
    exclude: ['**/node_modules/**', '**/e2e/**'],
    globals: true,
    setupFiles: './src/testing/setup-tests.ts',
  },
});
