/*
 * File: .eslintrc.js
 * Project: chrome-extension-typescript-starter
 * File Created: Saturday, 2021-10-16 15:40:55
 * Author: ReedSun (reedsun@shanjing-inc.com)
 * -----
 * Last Modified: Monday, 2021-10-25 14:31:55
 * Modified By: ReedSun (reedsun@shanjing-inc.com)
 * -----
 * Copyright 2013 - 2021, Qingdao Shanjing Information Technology Co., Ltd.
 */
const orderingRule = require('@typescript-eslint/eslint-plugin/dist/rules/member-ordering');

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      },
    },
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  root: true,
  rules: {
    '@typescript-eslint/member-ordering': [
      2,
      {
        default: {
          memberTypes: orderingRule.defaultOrder,
          order: 'alphabetically',
        },
      },
    ],
    'object-shorthand': 2,
    'prefer-template': 2,
    'sort-keys': 2,
  },
};
