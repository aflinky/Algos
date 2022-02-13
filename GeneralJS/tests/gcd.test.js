const func = require('../gcd');

describe('GCD', () => {
  test('(10, 8)', () => {
    expect(func(10, 8)).toBe(2);
  });

  test('(8, 10)', () => {
    expect(func(10, 8)).toBe(2);
  });

  test('(147, 105)', () => {
    expect(func(147, 105)).toBe(21);
  });

  test('(10, 9)', () => {
    expect(func(10, 9)).toBe(1);
  });
})
