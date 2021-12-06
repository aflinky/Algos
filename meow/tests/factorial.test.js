const func = require('../factorial');

describe('Factorial', () => {
  test('0', () => {
    expect(func(0)).toBe(1);
  });
  
  test('1', () => {
    expect(func(1)).toBe(1);
  });
  
  test('2', () => {
    expect(func(2)).toBe(2);
  });
  
  test('3', () => {
    expect(func(3)).toBe(6);
  });
  
  test('4', () => {
    expect(func(4)).toBe(24);
  });
  
  test('5', () => {
    expect(func(5)).toBe(120);
  });
  
  test('6', () => {
    expect(func(6)).toBe(720);
  });
  
  test('7', () => {
    expect(func(7)).toBe(5040);
  });
  
  test('8', () => {
    expect(func(8)).toBe(40320);
  });
  
  test('9', () => {
    expect(func(9)).toBe(362880);
  });
  
  test('10', () => {
    expect(func(10)).toBe(3628800);
  });
})