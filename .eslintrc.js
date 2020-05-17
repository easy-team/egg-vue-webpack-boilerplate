module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    "comma-dangle": [2, "never"],
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
