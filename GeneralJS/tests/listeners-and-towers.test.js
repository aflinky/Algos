const func = require('../listeners-and-towers');

describe('Listeners and Towers', () => {
  test('[1, 11, 5, 20], [4, 8, 15]', () => {
    expect(func([1, 11, 5, 20], [4, 8, 15])).toBe(5);
  });
  
  test('[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]', () => {
    expect(func([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toBe(0);
  });
  
  test('[10], [1, 20]', () => {
    expect(func([10], [1, 20])).toBe(10);
  });
  
  test('[1, 20], [10]', () => {
    expect(func([1, 20], [10])).toBe(10);
  });
  
  test('[1, 2], [10]', () => {
    expect(func([1, 2], [10])).toBe(8);
  });
  
  test('[2, 1], [10]', () => {
    expect(func([2, 1], [10])).toBe(8);
  });
  
  test('[20, 30], [10]', () => {
    expect(func([20, 30], [10])).toBe(10);
  });
  
  test('[30, 20], [10]', () => {
    expect(func([30, 20], [10])).toBe(10);
  });
})
