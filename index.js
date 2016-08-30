module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],

  // I want to use babel-eslint for parsing!
  "parser": "babel-eslint",
  "env": {
    // I write for browser
    "browser": true,
    // in CommonJS
    "node": true,
    // using es6 syntax
    "es6": true
  },
  "rules": {
    // Disallow Unused Variables
    "no-unused-vars": [2, {"vars": "all"}],
    // No error for unused react
    "react/jsx-uses-react": 1,
    // Prevent variables used in JSX to be marked incorrectly as unused
    "react/jsx-uses-vars": 1,
    // Disallow undeclared variables for jsx
    "react/jsx-no-undef": 2,
    // Parenthesis around JSX
    "react/wrap-multilines": 2,
    // require space before/after arrow function's arrow
    // https://github.com/eslint/eslint/blob/master/docs/rules/arrow-spacing.md
    "arrow-spacing": [2, { "before": true, "after": true }],
    // suggest using arrow functions as callbacks
    "prefer-arrow-callback": 2,
    // suggest using template literals instead of string concatenation
    // http://eslint.org/docs/rules/prefer-template
    "prefer-template": 2,
    // suggest using of const declaration for variables that are never modified after declared
    "prefer-const": 2,
    // disallow modifying variables that are declared using const
    "no-const-assign": 2,
    // Max 2 lines
    "no-multiple-empty-lines": [2, {"max": 2}],
    // One true brace style: http://eslint.org/docs/rules/brace-style
    "brace-style": [2, "1tbs"],
    // consistent spacing before and after keywords
    "keyword-spacing": [2, { "before": true, "after": true }],
    // only let and const allowed. No var.
    "no-var": 2
  },
  "plugins": [
    "import",
    "react"
  ],
  "settings": {
    "react": {
      "pragma": "React",
      "version": "14.8"
    }
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  }
};
