module.exports = {
  'extends': [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
  ],
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
  },
  'rules': {

    // -------------------------
    // Base file formating rules
    // -------------------------

    // disallow trailing whitespace at the end of lines
    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 1,
    // require newline at the end of files
    // https://eslint.org/docs/rules/eol-last
    'eol-last': 1,

    // ----------------------------------
    // Adding more eslint rules as errors
    // ----------------------------------

    // Disallow Unused Variables
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [2, { 'vars': 'all' }],
    // require space before/after arrow function's arrow
    // https://github.com/eslint/eslint/blob/master/docs/rules/arrow-spacing.md
    'arrow-spacing': [2, { 'before': true, 'after': true }],
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
    // disallow multiple empty lines (max 2 lines)
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': [2, { 'max': 2 }],
    // one true brace style
    // http://eslint.org/docs/rules/brace-style
    'brace-style': [2, '1tbs'],
    // enforce consistent spacing before and after keywords
    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': [2, { 'before': true, 'after': true }],
    // require let or const instead of var
    // https://eslint.org/docs/rules/no-var
    'no-var': 2,

    // ------------------------------------
    // Adding more eslint rules as warnings
    // ------------------------------------

    // require semicolons instead of ASI
    // https://eslint.org/docs/rules/semi
    'babel/semi': [1, 'always'],
    // enforce the consistent use of single quotes
    // https://eslint.org/docs/rules/quotes
    'babel/quotes': [1, 'single', { 'avoidEscape': true }],
    // enforce consistent spacing inside braces
    // https://eslint.org/docs/rules/object-curly-spacing
    'babel/object-curly-spacing': [1, 'always'],
    // require trailing commas
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [1, 'always-multiline'],
    // require at least one whitespace after comments( // and /*)
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [1, 'always'],

    // -------------------------------------------------------------
    // Overhiding react/recommended to (temporarily) relax the rules
    // -------------------------------------------------------------

    // prevent missing props validation in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 1,
    // detect missing 'key' prop
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': 1,
    // prevent missing React when using JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': 1,
    // prevent direct mutation of this.state
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 1,

    // ---------------------------------
    // Adding more react rules as errors
    // ---------------------------------

    // prevent missing parentheses around multiline JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    'react/jsx-wrap-multilines': 2,

    // -----------------------------------
    // Adding more react rules as warnings
    // -----------------------------------

    // enforce the consistent use of double quotes in JSX attributes
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': [1, 'prefer-double'],
    // enforce component methods order
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-comp': 1,
    // validate JSX indentation (2 spaces)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-indent': [1, 2],
    // validate props indentation in JSX (2 spaces)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-indent-props': [1, 2],
    // validate whitespace in and around the JSX opening and closing brackets
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
    'react/jsx-tag-spacing': 1,
    // validate closing bracket location in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    'react/jsx-closing-bracket-location': [1, 'props-aligned'],
    // validate closing tag location in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
    'react/jsx-closing-tag-location': 1,
    // disallow spaces inside of curly braces in JSX attributes and expressions
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    'react/jsx-curly-spacing': 1,
    // disallow spaces around equal signs in JSX attributes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    'react/jsx-equals-spacing': 1,
    // configure the position of the first property
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    'react/jsx-first-prop-new-line': 1,

    // avoid complains about es6 imports and exports
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md
    'node/no-unsupported-features/es-syntax': ['error', {'ignores': ['modules']}],

  },
  'plugins': [
    'babel',
    'import',
    'node',
    'react',
  ],
  'settings': {
    'react': {
      'pragma': 'React',
      'version': '16.4.1',
    },
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
};
