const func = require('../dec-to-bin');

describe('Decimal to Binary', () => {
  test('0', () => {
    expect(func(0)).toBe('0000');
  });
  
  test('1', () => {
    expect(func(1)).toBe('0001');
  });

  test('5', () => {
    expect(func(5)).toBe('0101');
  });

  test('11', () => {
    expect(func(11)).toBe('1011');
  });

  test('100', () => {
    expect(func(100)).toBe('01100100');
  });

  test('1000', () => {
    expect(func(1000)).toBe('001111101000');
  });
})
