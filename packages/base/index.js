/* eslint-disable unicorn/prefer-module */
module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: [
    'html',
    'unicorn',
    'import',
    'jsonc',
  ],
  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:unicorn/recommended'],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.mjs',
          '.ts',
          '.d.ts',
        ],
      },
    },
  },
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'quotes': ['error', 'double'],
        'quote-props': ['error', 'always'],
        'comma-dangle': ['error', 'never'],
      },
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'description',
              'keywords',
              'license',
              'repository',
              'funding',
              'author',
              'type',
              'files',
              'exports',
              'main',
              'module',
              'unpkg',
              'bin',
              'scripts',
              'husky',
              'lint-staged',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'devDependencies',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
        ],
      },
    },
  ],
  rules: {
    // Import rules
    'import/newline-after-import': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-absolute-path': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'off',
    'import/order': 'error',
    'import/first': 'error',

    // Arrays
    'array-element-newline': ['error', { multiline: true, minItems: 4 }],
    'array-bracket-newline': ['error', { multiline: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': 'error',

    // Basics
    'indent': ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'space-before-function-paren': ['error', 'never'],
    'quote-props': ['error', 'consistent-as-needed'],
    'curly': ['error', 'multi-or-nest', 'consistent'],
    'object-curly-spacing': ['error', 'always'],
    'prefer-exponentiation-operator': 'error',
    'no-cond-assign': ['error', 'always'],
    'func-call-spacing': ['off', 'never'],
    'block-spacing': ['error', 'always'],
    'comma-style': ['error', 'last'],
    'block-scoped-var': 'error',
    'quotes': ['error', 'single'],
    'no-multi-spaces': 'error',
    'eqeqeq': ['error', 'smart'],
    'consistent-return': 'error',
    'complexity': ['error', 10],
    'semi': ['error', 'always'],
    'no-multi-str': 'error',
    'no-alert': 'error',
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],

    // ES6
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'template-curly-spacing': ['error', 'never'],
    'prefer-rest-params': 'error',
    'prefer-template': 'error',
    'prefer-spread': 'error',
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['/', '#'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],

    // Unicorn
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          Ref: false,
          res: false,
        },
      },
    ],
  },
};
