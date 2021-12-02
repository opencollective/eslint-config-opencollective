## How to use

`npm install --save-dev eslint @babel/core @babel/eslint-parser eslint-plugin-babel eslint-plugin-import eslint-plugin-node eslint-plugin-react eslint-plugin-simple-import-sort eslint-config-opencollective`

Then in your ESLint config:

```
{
  "extends": [
    "opencollective"
  ]
}

```

You may also add in your package.json:

```
  "scripts": {
    "lint": "eslint \"src/**/*.js\"",
    "lint:fix": "npm run lint -- --fix",
    "lint:quiet": "npm run lint -- --quiet"
  },
```
