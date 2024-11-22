/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    lib: {
      entry: ['/components/index.ts'],
      name: 'WiseWidgets',
    },
    rollupOptions: {
      output: {
        exports: 'named',
      },
    },
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import '/components/styles/variables';
        @import '/components/styles/mixins';
      `,
      },
    },
  },
});
