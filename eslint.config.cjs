const simpleImportSort = require('eslint-plugin-simple-import-sort');
const tsParser = require('@typescript-eslint/parser');
const react = require('eslint-plugin-react');
const importPlugin = require('eslint-plugin-import');
const tseslint = require('typescript-eslint'); // eslint-disable-line n/no-unpublished-require
const eslint = require('@eslint/js'); // eslint-disable-line n/no-unpublished-require
const { fixupConfigRules } = require('@eslint/compat'); // eslint-disable-line n/no-unpublished-require
const globals = require('globals'); // eslint-disable-line n/no-unpublished-require
const { FlatCompat } = require('@eslint/eslintrc'); // eslint-disable-line n/no-unpublished-require

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all,
});

module.exports = tseslint.config(
  // Legacy plugins
  ...fixupConfigRules(compat.extends('plugin:n/recommended')),
  // Main config
  {
    files: ['**/*.(ts|tsx|js|jsx|cjs)'],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    extends: [eslint.configs.recommended, importPlugin.configs.recommended],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: tsParser,
    },
    rules: {
      'prefer-arrow-callback': 2,
      'prefer-template': 2,
      'prefer-const': 2,
      'no-const-assign': 2,
      'no-var': 2,
      eqeqeq: 2,
      'spaced-comment': [1, 'always'],
      curly: [1, 'all'],

      'lines-between-class-members': [
        1,
        'always',
        {
          exceptAfterSingleLine: true,
        },
      ],
      camelcase: 1,
      'n/no-missing-import': 0,
      'react/prop-types': 1,
      'react/react-in-jsx-scope': 1,
      'react/no-direct-mutation-state': 1,
      'react/no-array-index-key': 2,
      'react/sort-comp': 1,
      'simple-import-sort/imports': [
        2,
        {
          groups: [
            ['^\\u0000'],
            [
              '^(_http_agent|_http_client|_http_common|_http_incoming|_http_outgoing|_http_server|_stream_duplex|_stream_passthrough|_stream_readable|_stream_transform|_stream_wrap|_stream_writable|_tls_common|_tls_wrap|assert|assert/strict|async_hooks|buffer|child_process|cluster|console|constants|crypto|dgram|diagnostics_channel|dns|dns/promises|domain|events|fs|fs/promises|http|http2|https|inspector|inspector/promises|module|net|os|path|path/posix|path/win32|perf_hooks|process|punycode|querystring|readline|readline/promises|repl|stream|stream/consumers|stream/promises|stream/web|string_decoder|sys|timers|timers/promises|tls|trace_events|tty|url|util|util/types|v8|vm|wasi|worker_threads|zlib)(/|$)',
            ],
            ['^@?\\w'],
            ['^[^.]'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ],
        },
      ],
      'no-unused-vars': 0,
    },
  },
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
  },
  // TypeScript
  {
    files: ['**/*.{ts,tsx}'],
    extends: [...tseslint.configs.recommended, importPlugin.configs.typescript],
  },
);
