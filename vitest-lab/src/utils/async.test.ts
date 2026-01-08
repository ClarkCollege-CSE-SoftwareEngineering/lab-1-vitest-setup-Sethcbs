import { describe, it, expect } from 'vitest';
import { slugify, truncate, capitalize, countWords } from './strings';

it.each([
  ['Hello World', 'hello-world'],
  ['foo bar baz', 'foo-bar-baz'],
  ['Test 123', 'test-123'],
])('slugify("%s") returns "%s"', (input, expected) => {
  expect(slugify(input)).toBe(expected);
});
