import path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
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
    },
  },

  plugins: [vue()],
  resolve: {
    alias: {
      '@wiseinfo/wise-widgets': path.resolve(__dirname, './components'),
      '@': path.resolve(__dirname, './docs-src'),
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
