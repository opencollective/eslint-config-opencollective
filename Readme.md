## How to use

`npm install --save-dev eslint babel-eslint eslint-plugin-babel eslint-plugin-import eslint-plugin-node eslint-plugin-react eslint-config-opencollective`

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
