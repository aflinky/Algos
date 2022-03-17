const func = require('../balanced-parens');

describe('Balanced Parens', () => {
  test('()', () => {
    expect(func('()')).toBe(true);
  });

  test('(', () => {
    expect(func('(')).toBe(false);
  });

  test(')', () => {
    expect(func(')')).toBe(false);
  });

  test(')(', () => {
    expect(func(')(')).toBe(false);
  });

  test('(()()())', () => {
    expect(func('(()()())')).toBe(true);
  });

  test('(()(((()))))', () => {
    expect(func('(()(((()))))')).toBe(true);
  });

  test('(()(((()))))', () => {
    expect(func('(()((()))))')).toBe(false);
  });

  test('(()(((()))))', () => {
    expect(func('(()((()()))))')).toBe(false);
  });
})
