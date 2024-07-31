import { describe, it, expect } from 'vitest';
import { jellycat } from '../index';

describe('Main entry', () => {
  it('returns a random jellycat if simply called by itself', () => {
    const res = jellycat();

    expect(res).toMatchObject({
      description: expect.any(String),
      url: expect.any(String),
      identifier: expect.any(String),
    });
  });

  describe('utility API', () => {
    it('jellycat.description() method returns a random description', () => {
      const description = jellycat.description();
      expect(description).toStrictEqual(expect.any(String));
    });

    it('jellycat.identifier() method returns a random identifier', () => {
      const identifier = jellycat.identifier();
      expect(identifier).toStrictEqual(expect.any(String));
      expect(/^(.+-.+)*$/.test(identifier)).toBe(true);
    });

    it('jellycat.url() method returns a random url', () => {
      const url = jellycat.url();
      expect(url).toStrictEqual(expect.any(String));
    });

    it('jellycat.price() method returns a random price', () => {
      const price = jellycat.price();
      expect(price).toMatchObject({
        gbp: expect.any(Number),
      });
    });
  });
});
