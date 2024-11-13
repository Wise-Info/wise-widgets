/* eslint-disable import/no-extraneous-dependencies */
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

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
      input: {
        demos: 'demos-src/index.html',
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./docs-src', import.meta.url)),
      '@wiseinfo/wise-widgets': fileURLToPath(new URL('./components', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    vueDevTools(),
    createSvgIconsPlugin({
      iconDirs: [fileURLToPath(new URL('/docs-src/assets/svg', import.meta.url))],
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
