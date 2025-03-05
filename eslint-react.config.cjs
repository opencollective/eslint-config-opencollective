const mainConfig = require('./eslint-main.config.cjs');
const tsParser = require('@typescript-eslint/parser');
const react = require('eslint-plugin-react');
const tseslint = require('typescript-eslint');
const globals = require('globals');

module.exports = tseslint.config(
  // React
  {
    files: ['**/*.{jsx,tsx,js,ts,cjs,mjs}'],
    plugins: { react },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: tsParser,
    },
    settings: {
      react: {
        version: 'detect',
        defaultVersion: '18.0',
      },
    },
    rules: {
      'react/prop-types': 1,
      'react/react-in-jsx-scope': 1,
      'react/no-direct-mutation-state': 1,
      'react/no-array-index-key': 2,
      'react/sort-comp': 1,
    },
  },
  // Main config
  ...mainConfig,
);
