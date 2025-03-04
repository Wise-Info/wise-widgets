import path from 'node:path';
import fs from 'node:fs';
import { defineConfig, type Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

function injectVersion(): Plugin {
  return {
    name: 'inject-version',
    transformIndexHtml() {
      const packageJsonPath = path.resolve(__dirname, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
      const version = packageJson.version || 'unknown';

      return [
        {
          tag: 'meta',
          attrs: { name: 'version', content: version },
          injectTo: 'head',
        },
        {
          tag: 'script',
          children: `console.info('Wise-Widgets Version : ${version}');`,
          injectTo: 'head',
        },
      ];
    },
  };
}

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
  plugins: [vue(), vueDevTools(), injectVersion()],
  resolve: {
    alias: {
      '@wiseinfo/wise-widgets': path.resolve(__dirname, './components'),
      '@': path.resolve(__dirname, './docs-src'),
      '@components': path.resolve(__dirname, './docs-src/components/index.ts'),
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
