const func = require('../nthFibonnaci');

describe('Nth Fibonacci', () => {
  test('1', () => {
    expect(func(1)).toBe(1);
  });
  
  test('2', () => {
    expect(func(2)).toBe(1);
  });
  
  test('3', () => {
    expect(func(3)).toBe(2);
  });
  
  test('4', () => {
    expect(func(4)).toBe(3);
  });
  
  test('5', () => {
    expect(func(5)).toBe(5);
  });
  
  test('6', () => {
    expect(func(6)).toBe(8);
  });
  
  test('7', () => {
    expect(func(7)).toBe(13);
  });
  
  test('8', () => {
    expect(func(8)).toBe(21);
  });
  
  test('9', () => {
    expect(func(9)).toBe(34);
  });
  
  test('10', () => {
    expect(func(10)).toBe(55);
  });
})