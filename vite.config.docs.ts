import path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/wise-widgets/' : './',
  root: './docs-src',
  server: {
    open: true,
    port: 4000,
    cors: false,
  },
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: { docs: './docs-src/index.html' },
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
