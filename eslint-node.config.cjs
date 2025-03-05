const mainConfig = require('./eslint-main.config.cjs');
const tseslint = require('typescript-eslint');
module.exports = tseslint.config(
  // Main config
  ...mainConfig,
);
