// .eslintrc.js
module.exports = {
    parser: 'svelte-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: ['svelte', '@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:svelte/recommended',
    ],
    overrides: [
      {
        files: ['**/*.svelte'],
        processor: 'svelte/svelte',
      },
    ],
    settings: {
      'svelte/typescript': true,
    },
    rules: {
      // Add any custom ESLint rules here
    },
  };
  