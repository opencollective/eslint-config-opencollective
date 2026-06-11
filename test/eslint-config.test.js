const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { ESLint } = require('eslint');

const fixturesDir = join(__dirname, 'fixtures');

const readFixture = name => readFileSync(join(fixturesDir, name), 'utf8');

const lintWithConfig = async (config, filePath, code) => {
  const eslint = new ESLint({
    baseConfig: config,
    overrideConfigFile: true,
  });

  const [result] = await eslint.lintText(code, { filePath });
  return result.messages;
};

describe('eslint-config-opencollective', () => {
  it('loads the node config without errors', () => {
    const config = require('../eslint-node.config.cjs');
    assert.ok(Array.isArray(config));
    assert.ok(config.length > 0);
  });

  it('loads the react config without errors', () => {
    const config = require('../eslint-react.config.cjs');
    assert.ok(Array.isArray(config));
    assert.ok(config.length > 0);
  });

  it('enforces no-var in the node config', async () => {
    const config = require('../eslint-node.config.cjs');
    const messages = await lintWithConfig(
      config,
      join(fixturesDir, 'invalid-no-var.js'),
      readFixture('invalid-no-var.js'),
    );

    assert.ok(messages.some(message => message.ruleId === 'no-var'));
  });

  it('accepts valid TypeScript in the node config', async () => {
    const config = require('../eslint-node.config.cjs');
    const messages = await lintWithConfig(
      config,
      join(fixturesDir, 'valid-node.ts'),
      readFixture('valid-node.ts'),
    );

    const errors = messages.filter(message => message.severity === 2);
    assert.equal(errors.length, 0);
  });

  it('enforces react/no-array-index-key in the react config', async () => {
    const config = require('../eslint-react.config.cjs');
    const messages = await lintWithConfig(
      config,
      join(fixturesDir, 'invalid-react.jsx'),
      readFixture('invalid-react.jsx'),
    );

    assert.ok(messages.some(message => message.ruleId === 'react/no-array-index-key'));
  });
});
