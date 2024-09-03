/// <reference types="vitest" />

import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
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
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        experimentalMinChunkSize: 3500,
        manualChunks: {
          lucide: ['lucide-react'],
          radix: ['@radix-ui/react-dropdown-menu', '@radix-ui/react-slot'],
          react: ['react', 'react-dom'],
          tanstack: ['@tanstack/react-router', '@tanstack/react-query'],
        },
      },
    },
  },
  optimizeDeps: { exclude: ['fsevents'] },
  plugins: [
    react(),
    TanStackRouterVite({
      autoCodeSplitting: true,
    }),
    tsconfigPaths(),
  ],
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
