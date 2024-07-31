import { describe, it, expect } from 'vitest';
import {
  getRandomElement,
  kebabise,
} from '../utils';

describe('Util functions', () => {
  describe('getRandomElement', () => {
    it('throws error if array has no members', () => {
      expect.assertions(1);
      try {
        getRandomElement([]);
      } catch(err) {
        expect(err).toEqual(new Error('Input must be an array with members'));
      }
    });

    it('takes a random element from a supplied array', () => {
      const arr = Array.from({ length: 1000 })
        .map((_, idx) => idx);

      const cases = Array.from({ length: 5 })
        .map(() => getRandomElement(arr));

      expect(cases.every((x) => typeof x === 'number')).toBe(true);
      expect(new Set(cases).size).toBe(cases.length);
    });
  });

  describe('kebabise()', () => {
    it.for([
      [ 'broccoli', 'broccoli' ],
      [ 'Broccoli', 'broccoli' ],
      [ 'Leafy Kale', 'leafy-kale' ],
      [ 'Leafy  Kale', 'leafy-kale' ],
      [ 'amuseable Mars bar', 'amuseable-mars-bar' ],
      [ 'Amuseable mars Bar', 'amuseable-mars-bar' ],
    ])(
      'turns the case of strings into kebab-case', ([ input, output ]) => {
        expect(kebabise(input)).toBe(output);
      }
    )
  });
});
