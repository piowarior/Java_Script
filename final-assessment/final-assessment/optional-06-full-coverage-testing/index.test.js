import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('should return 0 if a is not a number', () => {
  assert.strictEqual(sum('1', 2), 0);
});

test('should return 0 if b is not a number', () => {
  assert.strictEqual(sum(1, '2'), 0);
});

test('should return 0 if both are not numbers', () => {
  assert.strictEqual(sum('1', '2'), 0);
});

test('should return 0 if a is negative', () => {
  assert.strictEqual(sum(-1, 2), 0);
});

test('should return 0 if b is negative', () => {
  assert.strictEqual(sum(1, -2), 0);
});

test('should return correct sum if valid positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('should return correct sum for zero values', () => {
  assert.strictEqual(sum(0, 0), 0);
});