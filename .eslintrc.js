'use strict';
// https://github.com/vuejs/eslint-plugin-vue/issues/186#issuecomment-329426553
module.exports = {
  plugins: ["html", "vue"],
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    'vue/require-prop-types': 0,
    'vue/require-default-prop': 0,
    'no-console': 0,
    'comma-dangle': [2, "never"],
    'valid-jsdoc': 'off',
    'eol-last': 'off',
    'array-bracket-spacing': 'off',
    'no-unused-vars': 0,
    'no-else-return': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
      },
    ],
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    jquery: true,
    es6: true,
  },
  globals: {
    EASY_ENV_IS_PROD: true,
    EASY_ENV_IS_NODE: true,
    EASY_ENV_IS_BROWSER: true,
    EASY_ENV_IS_DEV: true,
  },
};
