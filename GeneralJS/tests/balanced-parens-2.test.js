const func = require('../balanced-parens-2');

describe('Balanced Parens 2', () => {
  test('()', () => {
    expect(func('()')).toBe(true);
  });

  test('(', () => {
    expect(func('(')).toBe(false);
  });

  test(')', () => {
    expect(func(')')).toBe(false);
  });

  test('}[]', () => {
    expect(func('}[]')).toBe(false);
  });

  test(')kasdjflkdas', () => {
    expect(func(')kasdjflkdas')).toBe(false);
  });

  test('[', () => {
    expect(func('[')).toBe(false);
  });

  test('((())[]{})', () => {
    expect(func('((())[]{})')).toBe(true);
  });

  test(' var hubble = function() { telescopes.awesome();', () => {
    expect(func(' var hubble = function() { telescopes.awesome();')).toBe(false);
  });

  test(' var wow  = { yo: thisIsAwesome() }', () => {
    expect(func(' var wow  = { yo: thisIsAwesome() }')).toBe(true);
  });

  test('[](){}', () => {
    expect(func('[](){}')).toBe(true);
  });

  test('[({})]', () => {
    expect(func('[({})]')).toBe(true);
  });

  test('[(]{)}', () => {
    expect(func('[(]{)}')).toBe(false);
  });

  test('hey', () => {
    expect(func('hey')).toBe(true);
  });
})
