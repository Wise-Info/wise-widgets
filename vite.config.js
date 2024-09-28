/* eslint-disable import/no-extraneous-dependencies */
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  root: fileURLToPath(new URL('./demos/index.html', import.meta.url)),
  server: {
    open: true,
    port: 4000,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  css: {
    sourceMap: true,
    preprocessorOptions: {
      scss: {
      },
    },
  },
});
