# eslint-config-opencollective

[![npm version](https://badge.fury.io/js/eslint-config-opencollective.svg)](https://www.npmjs.com/package/eslint-config-opencollective)
[![License](https://img.shields.io/github/license/opencollective/eslint-config-opencollective)](https://github.com/opencollective/eslint-config-opencollective/blob/main/LICENSE)

Shared ESLint configuration used across Open Collective projects.

## Installation

First, add the ESLint scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "npm run lint -- --fix",
    "lint:quiet": "npm run lint -- --quiet"
  }
}
```

Then choose your project type:

### Node.js Projects

1. Install dependencies:

```bash
npm install --save-dev eslint @typescript-eslint/parser eslint-plugin-import eslint-plugin-n eslint-plugin-simple-import-sort eslint-config-opencollective
```

2. Create `.eslintrc.cjs` in your project root:

```js
import openCollectiveConfig from 'eslint-config-opencollective/eslint-node.config.cjs';

module.exports = {
  ...openCollectiveConfig,
  // Add your custom rules here
};
```

### React Projects

1. Install dependencies:

```bash
npm install --save-dev eslint @typescript-eslint/parser eslint-plugin-import eslint-plugin-n eslint-plugin-react eslint-plugin-simple-import-sort eslint-config-opencollective
```

2. Create `.eslintrc.cjs` in your project root:

```js
import openCollectiveConfig from 'eslint-config-opencollective/eslint-react.config.cjs';

module.exports = {
  ...openCollectiveConfig,
  // Add your custom rules here
};
```

## Publishing

To publish a new version:

1. Update the version in `package.json`:

```bash
npm version patch # for bug fixes
npm version minor # for new features
npm version major # for breaking changes
```

2. Push the changes and the new tag:

```bash
git push --follow-tags
```

3. Publish to npm:

```bash
npm publish
```
