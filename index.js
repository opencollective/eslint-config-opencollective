module.exports = {
  // I want to use babel-eslint for parsing!
  "parser": "babel-eslint",
  "env": {
    // I write for browser
    "browser": true,
    // in CommonJS
    "node": true
  },
  "rules": {
    "no-unused-vars": [2, {"vars": "all"}],
    // No error for unused react
    "react/jsx-uses-react": 1,
    // Disallow undeclared variables for jsx
    "react/jsx-no-undef": 2,
    // Parenthesis around JSX
    "react/wrap-multilines": 2,
    // Disallow Unused Variables
    "no-unused-vars": 2,
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
    "no-multiple-empty-lines": [2, {"max": 2}]
  },
  "plugins": [
    "react"
  ],
  "ecmaFeatures": {
    "jsx": true
  }
};
