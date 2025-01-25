import path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  root: './docs-src',
  server: {
    open: true,
    port: 4000,
  },
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: { docs: './docs-src/index.html' },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('/docs-src/components/')) {
            return 'docs-components';
          }
          if (id.includes('/docs-src/modules/')) {
            const name = id
              .split('/docs-src/modules/')[1]
              .split('/')[0]
              .replace(/(?<!^)([A-Z])/g, '-$1')
              .toLowerCase();
            return `docs-${name}`;
          }
        },
      },
    },
  },

  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@wiseinfo/wise-widgets': path.resolve(__dirname, './components'),
      '@': path.resolve(__dirname, './docs-src'),
      '@components': path.resolve(__dirname, './docs-src/components'),
      '@routers': path.resolve(__dirname, './docs-src/routers.ts'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@use '@/styles/variables.scss' as *;`,
      },
    },
  },
});
