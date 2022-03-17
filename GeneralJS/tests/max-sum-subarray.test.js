const func = require('../max-sum-subarray');

describe('Max Sum Subarary', () => {
  test('([2, 3, 4, 1, 5], 2)', () => {
    expect(func([2, 3, 4, 1, 5], 2)).toBe(7);
  });
  
  test('([2, 1, 5, 1, 3, 2], 3)', () => {
    expect(func([2, 1, 5, 1, 3, 2], 3)).toBe(9);
  });
})
