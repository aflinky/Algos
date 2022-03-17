const func = require('../min-window-substring');

describe('Minimum Window Substring', () => {
  test("'ADOBECODEBANC', 'ABC'", () => {
    expect(func('ADOBECODEBANC', 'ABC')).toBe('BANC');
  });

  test("'a', 'a'", () => {
    expect(func('a', 'a')).toBe('a');
  });

  test("'a', 'aa'", () => {
    expect(func('a', 'aa')).toBe('');
  });

  test("'abb', 'bb'", () => {
    expect(func('abb', 'bb')).toBe('bb');
  });

  test("'abab', 'bb'", () => {
    expect(func('abab', 'bb')).toBe('bab');
  });
  
  test("'abba', 'bb'", () => {
    expect(func('abba', 'bb')).toBe('bb');
  });
})