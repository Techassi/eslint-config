/* eslint-disable unicorn/prefer-module */
module.exports = {
  overrides: [
    {
      files: ['*.tsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
  extends: ['plugin:solid/typescript', '@techassi/eslint-config-ts'],
};