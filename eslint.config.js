/* eslint-disable import/no-extraneous-dependencies */
import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginTs from 'typescript-eslint';
import pluginImport from 'eslint-plugin-import';
import pluginVue from 'eslint-plugin-vue';
import pluginPrettierRecommendedConfigs from 'eslint-plugin-prettier/recommended';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  pluginJs.configs.recommended,

  ...pluginTs.configs.recommended,

  pluginImport.flatConfigs.recommended,

  ...pluginVue.configs['flat/recommended'],

  pluginPrettierRecommendedConfigs,

  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    rules: {
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.js'] }],
      'import/no-unresolved': [2, { ignore: ['^#.+$', '^@.+$'] }],
      'import/prefer-default-export': 'off',
      'no-console': ['warn', { allow: ['debug', 'info', 'warn', 'error'] }],
    },
  },

  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: pluginTs.parser,
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/valid-define-props': 'off',
    },
  },
];
