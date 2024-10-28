import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig({
  root: 'demos-src',
  server: {
    open: true,
    port: 4000,
  },
  build: {
    outDir: '../demos',
    rollupOptions: {
      input: {
        demos: 'demos-src/index.html',
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./demos-src', import.meta.url)),
      '@wiseinfo/wise-widgets': fileURLToPath(new URL('./components', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    vueDevTools(),
    createSvgIconsPlugin({
      iconDirs: [fileURLToPath(new URL('./demos-src/assets/svg', import.meta.url))],
      symbolId: '[dir]-[name]',
    }),
  ],
  css: {
    // sourceMap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '/demos-src/styles/variables';
        `,
      },
    },
  },
});
