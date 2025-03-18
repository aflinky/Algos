const func = require('../reverseInParentheses');

describe('Reverse In Parentheses', () => {
  test('Case: 1', () => {
    expect(func('meow')).toBe('meow');
  });

  test('Case: 2', () => {
    expect(func('(meow)')).toBe('woem');
  });

  test('Case: 3', () => {
    expect(func('m(oe)w')).toBe('meow');
  });

  test('Case: 4', () => {
    expect(func('foo(bar(baz))blim')).toBe('foobazrabblim');
  });

  test('Case: 5', () => {
    expect(func('foo((bar(baz)))blim')).toBe('foobarzabblim');
  });
  
  test('Case: 6', () => {
    expect(func('foo((bar)(baz))blim')).toBe('foobazbarblim');
  });
})