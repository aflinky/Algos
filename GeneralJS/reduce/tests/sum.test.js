const func = require('../sum');

describe('Sum (with reduce)', () => {
  test('[1, 3, 3, 4, 5]', () => {
    expect(func([1, 2, 3, 4, 5])).toBe(15);
  });

  test('[17]', () => {
    expect(func([17])).toBe(17);
  });
  
  test('[-1, 1]', () => {
    expect(func([-1, 1])).toBe(0);
  });
  
  test('[-1, 20, 1]', () => {
    expect(func([-1, 20, 1])).toBe(20);
  });
})
