import path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: ['/components/index.ts'],
      name: 'WiseWidgets',
    },
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        exports: 'named',
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './components'),
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
