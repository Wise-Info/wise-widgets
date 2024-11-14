/* eslint-disable import/no-extraneous-dependencies */
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

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
      input: {
        docs: './docs-src/index.html',
      },
    },
  },
  preview: {
    open: true,
    port: 4040,
  },
  resolve: {
    alias: {
      '@wiseinfo/wise-widgets': fileURLToPath(new URL('./components/index.ts', import.meta.url)),
      '@': fileURLToPath(new URL('./docs-src', import.meta.url)),
      '@components': fileURLToPath(new URL('./docs-src/components/index.ts', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    vueDevTools(),
    createSvgIconsPlugin({
      iconDirs: [fileURLToPath(new URL('./docs-src/assets/svg', import.meta.url))],
      symbolId: '[dir]-[name]',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '/docs-src/styles/variables';
        `,
      },
    },
  },
});
