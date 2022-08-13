/* eslint-disable unicorn/prefer-module */
module.exports = {
  extends: ['@techassi/eslint-config-base', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      files: [
        '**/pages/**/*.{js,ts,vue}',
        '**/layouts/**/*.{js,ts,vue}',
        '**/app.{js,ts,vue}',
        '**/error.{js,ts,vue}',
      ],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
};