const func = require('../bin-to-dec');

describe('Binary to Decimal', () => {
  test('0000', () => {
    expect(func('0000')).toBe(0);
  });
  
  test('0001', () => {
    expect(func('0001')).toBe(1);
  });

  test('0101', () => {
    expect(func('0101')).toBe(5);
  });

  test('1011', () => {
    expect(func('1011')).toBe(11);
  });

  test('01100100', () => {
    expect(func('01100100')).toBe(100);
  });

  test('001111101000', () => {
    expect(func('001111101000')).toBe(1000);
  });
})
