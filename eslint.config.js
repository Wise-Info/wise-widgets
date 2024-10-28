import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import pluginPrettierRecommendedConfigs from 'eslint-plugin-prettier/recommended';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    rules: {
      // 'import/extensions': 'off',
      // 'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.js'] }],
      // 'import/no-unresolved': [2, { ignore: ['^#.+$'] }],
      // 'import/prefer-default-export': 'off',
      'no-console': ['warn', { allow: ['debug', 'info', 'warn', 'error'] }],
    },
  },

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  pluginJs.configs.recommended,

  ...tseslint.configs.recommended,

  ...pluginVue.configs['flat/essential'],

  pluginPrettierRecommendedConfigs,

  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
];
