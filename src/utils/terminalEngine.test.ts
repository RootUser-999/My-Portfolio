import test from 'node:test';
import assert from 'node:assert/strict';
import { executeTerminalCommand } from './terminalEngine.ts';

test('executeTerminalCommand responds to help command with available actions', () => {
  const lines = executeTerminalCommand('help');
  assert.equal(lines.length, 1);
  assert.ok(lines[0].content.includes('whoami'));
  assert.ok(lines[0].content.includes('projects'));
});

test('executeTerminalCommand returns accurate author profile for whoami', () => {
  const lines = executeTerminalCommand('whoami');
  assert.equal(lines.length, 1);
  assert.ok(lines[0].content.includes('Shahzeb'));
  assert.ok(lines[0].content.includes('Full-Stack Engineer'));
});

test('executeTerminalCommand navigates safely on goto command', () => {
  let navigatedTo = '';
  const lines = executeTerminalCommand('goto projects', (sec) => {
    navigatedTo = sec;
  });
  assert.equal(lines.length, 1);
  assert.equal(navigatedTo, 'projects');
});

test('executeTerminalCommand returns error on unknown commands', () => {
  const lines = executeTerminalCommand('foobar');
  assert.equal(lines.length, 1);
  assert.equal(lines[0].type, 'error');
  assert.ok(lines[0].content.includes('command not found'));
});
