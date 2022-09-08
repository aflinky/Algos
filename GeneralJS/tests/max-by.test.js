const func = require('../max-by');

describe('Lockdown', () => {
  const nums = [-1, 1, 5, 2, -7]
  test('Case 1', () => {
    expect(func(nums, Math.abs)).toBe(-7);
  });
  
  test('Case 2', () => {
    expect(func(nums, function(x) {
      return 2 * x - 1000;
    })).toBe(5)
  });
  
  test('Case 3', () => {
    const fraction = n => 1 / n;
    expect(func(nums, fraction)).toBe(1)
  });
})
