module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    // ----------------------------------
    // Adding more eslint rules as errors
    // ----------------------------------

    // Disallow Unused Variables
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [2, { vars: 'all' }],
    // require using arrow functions as callbacks
    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': 2,
    // require using template literals instead of string concatenation
    // http://eslint.org/docs/rules/prefer-template
    'prefer-template': 2,
    // require using of const declaration for variables that are never modified after declared
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': 2,
    // disallow modifying variables that are declared using const
    // https://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 2,
    // require let or const instead of var
    // https://eslint.org/docs/rules/no-var
    'no-var': 2,
    // Force type-safe equality operators
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: 2,

    // ------------------------------------
    // Adding more eslint rules as warnings
    // ------------------------------------

    // Imports must be sorted
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    'simple-import-sort/sort': 'warn',
    // require at least one whitespace after comments( // and /*)
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [1, 'always'],
    // Require Following Curly Brace Conventions
    // https://eslint.org/docs/rules/curly
    curly: [1, 'all'],
    // Require empty lines after class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': [
      1,
      'always',
      { exceptAfterSingleLine: true },
    ],
    // Require CamelCase
    // https://eslint.org/docs/rules/camelcase
    camelcase: 1,

    // ---------------------------------------
    // Tweaking node/recommended configuration
    // ---------------------------------------

    // disallow unsupported ECMAScript features on the specified version
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features.md
    'node/no-unsupported-features/es-syntax': 0,
    // disallow import declarations which import extraneous modules
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md
    'node/no-extraneous-import': 2,
    // disallow import declarations which import non-existence modules
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md
    'node/no-missing-import': 2,
    // disallow import declarations which import private modules
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
    'node/no-unpublished-import': 2,

    // -------------------------------------------------------------
    // Overhiding react/recommended to (temporarily) relax the rules
    // -------------------------------------------------------------

    // prevent missing props validation in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 1,
    // prevent missing React when using JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': 1,
    // prevent direct mutation of this.state
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 1,

    // ---------------------------------
    // Adding more react rules as errors
    // ---------------------------------

    // prevent usage of Array index in keys
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 2,

    // -----------------------------------
    // Adding more react rules as warnings
    // -----------------------------------

    // enforce component methods order
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-comp': 1,
  },
  plugins: ['babel', 'import', 'node', 'react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
