const func = require('../countAndSay');

describe('Count and Say', () => {
  test('1', () => {
    expect(func(1)).toBe('1');
  });

  test('2', () => {
    expect(func(2)).toBe('11');
  });

  test('3', () => {
    expect(func(3)).toBe('21');
  });

  test('4', () => {
    expect(func(4)).toBe('1211');
  });

  test('5', () => {
    expect(func(5)).toBe('111221');
  });

  test('10', () => {
    expect(func(10)).toBe('13211311123113112211');
  });

})