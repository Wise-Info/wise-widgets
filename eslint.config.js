import globals from 'globals';
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import vuePlugin from 'eslint-plugin-vue';

import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  // Base configuration
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  // JavaScript configuration
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-console': ['warn', { allow: ['debug', 'info', 'warn', 'error'] }],
    },
  },

  // TypeScript configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      // parserOptions: {
      //   project: "./tsconfig.json",
      // },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...tsPlugin.configs['recommended-requiring-type-checking'].rules,
      'import/no-unresolved': [2, { ignore: ['^#.+$', '^@.+$'] }],
    },
  },
  // Vue configuration
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: 'vue-eslint-parser',
    },
    plugins: {
      vue: vuePlugin,
    },
    rules: {
      ...vuePlugin.configs.recommended.rules,
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
