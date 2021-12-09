const func = require('../coinChange2');

describe('Coin Change 2', () => {
  test('5, [1, 2, 5]', () => {
    expect(func(5, [1, 2, 5])).toBe(4);
  });

  test('10, [1, 2, 5]', () => {
    expect(func(10, [1, 2, 5])).toBe(10);
  });

  test('500, [1, 2, 5]', () => {
    expect(func(500, [1, 2, 5])).toBe(12701);
  });

  test('3, [2]', () => {
    expect(func(3, [2])).toBe(0);
  });

  test('10, [10]', () => {
    expect(func(10, [10])).toBe(1);
  });

  test('10, [5]', () => {
    expect(func(10, [5])).toBe(1);
  });

  test('10, []', () => {
    expect(func(10, [])).toBe(0);
  });

  test('0, [10]', () => {
    expect(func(0, [10])).toBe(1);
  });

  test('100, [99,1]', () => {
    expect(func(100, [99,1])).toBe(2);
  });
})