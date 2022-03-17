const func = require('../two-sum');

describe('Two Sum', () => {
  test('([1, 3, 3, 4, 7], 6)', () => {
    expect(func([1, 3, 3, 4, 7], 6)).toBe(true);
  });
  
  test('([1, 3, 3, 4, 7], 10)', () => {
    expect(func([1, 3, 3, 4, 7], 10)).toBe(true);
  });
  
  test('([1, 3, 3, 4, 7], 11)', () => {
    expect(func([1, 3, 3, 4, 7], 11)).toBe(true);
  });
  
  test('([1, 3, 3, 4, 7], 40)', () => {
    expect(func([1, 3, 3, 4, 7], 11)).toBe(false);
  });
  
  test('([1, 3, 3, 4, 7], 0)', () => {
    expect(func([1, 3, 3, 4, 7], 0)).toBe(false);
  });
  
  test('([-1, 1, 3, 4, 7], 0)', () => {
    expect(func([-1, 1, 3, 4, 7], 0)).toBe(true);
  });
  
  test('([1, 7], 7)', () => {
    expect(func([1, 7], 7)).toBe(false);
  });
})
