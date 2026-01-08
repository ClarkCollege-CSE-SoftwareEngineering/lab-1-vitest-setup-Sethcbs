import { describe, it, expect } from 'vitest';
import { slugify, truncate, capitalize, countWords } from './strings';

describe('string utilities', () => {
  describe('slugify', () => {
    it('converts a simple string to a slug', () => {
      expect(slugify('Hello World')).toBe('hello-world');
    });

    it('handles multiple spaces', () => {
      expect(slugify('Hello    World')).toBe('hello-world');
    });

    it('removes special characters', () => {
      expect(slugify('Hello, World!')).toBe('hello-world');
    });

    it('handles leading and trailing spaces', () => {
      expect(slugify('  Hello World  ')).toBe('hello-world');
    });

    it('handles already lowercase strings', () => {
      expect(slugify('hello world')).toBe('hello-world');
    });

    it('handles strings with numbers', () => {
      expect(slugify('abc 123 come with me')).toBe('abc-123-come-with-me');
    }); 
  });

  describe('truncate', () => {
    it('returns the original string if shorter than maxLength', () => {
      expect(truncate('Hello', 10)).toBe('Hello');
    });

    it('truncates and adds default suffix', () => {
      expect(truncate('Hello World', 8)).toBe('Hello...');
    });

    it('uses custom suffix', () => {
      expect(truncate('Hello World', 9, '…')).toBe('Hello Wo…');
    });

    it('handles exact length strings', () => {
      expect(truncate('Hello', 5)).toBe('Hello');
    });

    it('only adds one copy of suffix if the string length is negative', () => {
      expect(truncate('',-2)).toBe('...');
    });
  });

  describe('capitalize', () => {
    it('capitalizes a lowercase word', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('handles already capitalized words', () => {
      expect(capitalize('HELLO')).toBe('Hello');
    });

    it('returns empty string for empty input', () => {
      expect(capitalize('')).toBe('');
    });

    it('properly captitalizes the first word only when given a mix of lower and upper case words', () => {
      expect(capitalize('HeLlO woRlD!')).toBe('Hello world!');
    });
  });

  describe('countWords', () => {
    it('counts words in a simple sentence', () => {
      expect(countWords('Hello world')).toBe(2);
    });

    it('handles multiple spaces between words', () => {
      expect(countWords('Hello    world')).toBe(2);
    });

    it('returns zero for empty string', () => {
      expect(countWords('')).toBe(0);
    });

    it('returns zero for whitespace-only string', () => {
      expect(countWords('   ')).toBe(0);
    });


    it('counts special characters', () => {
      expect(countWords('. ! , ')).toBe(3);
    });
  });
});
