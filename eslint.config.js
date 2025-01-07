import globals from 'globals';

import js from '@eslint/js';

import tseslint from "typescript-eslint";

import vuePlugin from 'eslint-plugin-vue';

import importPlugin from 'eslint-plugin-import';

import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  // Base configuration
  {
    ignores: ['node_modules/**', 'dist/**'],
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-console': ['warn', { allow: ['debug', 'info', 'warn', 'error'] }],
    },
  },
  // JavaScript configuration
  js.configs.recommended,
  // TypeScript configuration
  ...tseslint.configs.recommended,
  // Vue configuration
  ...vuePlugin.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      }
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/valid-define-props': 'off',
    },
  },
  // Import plugin configuration
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      'import/extensions': 'off',
      'import/no-unresolved': [2, { ignore: ['^#.+$', '^@.+$'] }],
      'import/prefer-default-export': 'off',
    },
  },
  // Prettier plugin configuration
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  // Disable formatting rules that might conflict with Prettier
  prettierConfig,
];
