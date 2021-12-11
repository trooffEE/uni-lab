module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/strongly-recommended',
    '@vue/typescript',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      'legacyDecorators': true
    },
    project: './tsconfig.json',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
    'import',
  ],
  rules: {
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'comma',
          requireLast: true
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/semi': ['error', 'never'],
    indent: ['error', 2],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          ['internal', 'unknown'],
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            'pattern': '@/**',
            'group': 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'object'],
      },
    ],
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': 2,
    'object-curly-spacing': ['error', 'always'],
    semi: 'off',
    'sort-keys': ['error', 'asc', { natural: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    },
  ],
};
