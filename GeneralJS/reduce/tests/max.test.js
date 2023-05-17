const func = require('../max');

describe('Max (with reduce)', () => {
  test('[1, 3, 3, 4, 5]', () => {
    expect(func([1, 3, 3, 4, 5])).toBe(5);
  });

  test('[17]', () => {
    expect(func([17])).toBe(17);
  });
  
  test('[-1, 1]', () => {
    expect(func([-1, 1])).toBe(1);
  });
  
  test('[-1, 20, 1, 19, 15]', () => {
    expect(func([-1, 20, 1, 19, 15])).toBe(20);
  });
})
