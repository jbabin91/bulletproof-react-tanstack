/// <reference types="vitest" />
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: ['fsevents', 'node:fs/promises'],
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        experimentalMinChunkSize: 3500,
        manualChunks: {
          lucide: ['lucide-react'],
          msw: ['@mswjs/data'],
          nanoid: ['nanoid'],
          radix: [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-aspect-ratio',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-label',
            '@radix-ui/react-menubar',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-progress',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slider',
            '@radix-ui/react-slot',
            '@radix-ui/react-switch',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toggle',
            '@radix-ui/react-toggle-group',
            '@radix-ui/react-tooltip',
          ],
          react: ['react', 'react-dom'],
          tanstack: ['@tanstack/react-router', '@tanstack/react-query'],
        },
      },
    },
  },
  optimizeDeps: { exclude: ['fsevents', 'node:fs/promises'] },
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
