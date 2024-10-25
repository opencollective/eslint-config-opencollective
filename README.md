## How to use

`npm install --save-dev eslint @typescript-eslint/parser eslint-plugin-import eslint-plugin-n eslint-plugin-react eslint-plugin-simple-import-sort eslint-config-opencollective`

Then in your ESLint config:

```
import openCollectiveConfig from 'eslint-config-opencollective';

module.exports = {
  ...openCollectiveConfig,
  // Add your own configuration here
};

```

You may also add in your package.json:

```
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "npm run lint -- --fix",
    "lint:quiet": "npm run lint -- --quiet"
  },
```
