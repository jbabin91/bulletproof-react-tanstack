module.exports = {
  env: { browser: true, es2022: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  ignorePatterns: [
    'dist',
    '*.gen.ts',
    'mockServiceWorker.js',
    'playwright-report',
  ],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:@tanstack/eslint-plugin-query/recommended',
      ],
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        project: [
          './tsconfig.json',
          './tsconfig.app.json',
          './tsconfig.e2e.json',
          './tsconfig.spec.json',
        ],
        sourceType: 'module',
        tsconfigRootDir: __dirname,
      },
      rules: {
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { fixStyle: 'inline-type-imports', prefer: 'type-imports' },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-misused-promises': [
          'error',
          { checksVoidReturn: { attributes: false } },
        ],
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/restrict-template-expressions': 'off',
      },
    },
    {
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:tailwindcss/recommended',
      ],
      files: ['*.jsx', '*.tsx'],
      rules: {
        'react/jsx-sort-props': [
          'error',
          {
            callbacksLast: true,
            ignoreCase: true,
            noSortAlphabetically: false,
            reservedFirst: true,
            shorthandFirst: true,
            shorthandLast: false,
          },
        ],
        'react/no-unknown-property': 'off',
        'react/prop-types': 'off',
        'tailwindcss/no-custom-classname': 'off',
      },
      settings: {
        react: { version: 'detect' },
      },
    },
    {
      extends: [
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
        'plugin:vitest/legacy-recommended',
      ],
      files: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
      rules: {},
    },
    {
      extends: ['plugin:playwright/recommended'],
      files: ['**/e2e/**/*.ts', '**/e2e/**/*.tsx'],
      rules: {
        '@typescript-eslint/await-thenable': 'off',
      },
    },
  ],
  plugins: ['import', 'simple-import-sort', 'sort-keys-fix'],
  reportUnusedDisableDirectives: true,
  root: true,
  rules: {
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': ['error', { 'prefer-inline': true }],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/no-null': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
};
