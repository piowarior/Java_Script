import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum function should return correct addition result', () => {
  const result = sum(2, 3);
  assert.strictEqual(result, 5);
});

test('sum function should handle negative numbers', () => {
  const result = sum(-1, -1);
  assert.strictEqual(result, -2);
});

test('sum function should handle zero', () => {
  const result = sum(0, 0);
  assert.strictEqual(result, 0);
});