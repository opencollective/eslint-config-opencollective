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

  it('registers the n plugin rules in the node config', async () => {
    const config = require('../eslint-node.config.cjs');
    const eslint = new ESLint({ baseConfig: config, overrideConfigFile: true });
    const filePath = join(fixturesDir, 'valid-node.ts');
    const { rules } = await eslint.calculateConfigForFile(filePath);

    const nRules = Object.keys(rules).filter(ruleId => ruleId.startsWith('n/'));
    assert.ok(nRules.length > 0, 'expected the n plugin rules to be registered');

    // Guards against a silent regression of the eslint-plugin-n interop in
    // eslint-main.config.cjs, which would disable every n/ rule at once.
    const noDeprecatedApi = rules['n/no-deprecated-api'];
    assert.ok(noDeprecatedApi, 'expected n/no-deprecated-api to be configured');
    assert.notEqual(noDeprecatedApi[0], 0, 'expected n/no-deprecated-api to be enabled');
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
