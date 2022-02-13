const func = require('../median');

describe('Median', () => {
  test('[7]', () => {
    expect(func([7])).toBe(7);
  });

  test('[5, 7]', () => {
    expect(func([5, 7])).toBe(6);
  });
  
  test('[7, 5]', () => {
    expect(func([7, 5])).toBe(6);
  });

  test('[1, 6, 3, 5, 8, 9, 4, 10, 2]', () => {
    expect(func([1, 6, 3, 5, 8, 9, 4, 10, 2])).toBe(5);
  });

  test('[1, 6, 3, 5, 8, 9, 4, 10, 2, 7]', () => {
    expect(func([1, 6, 3, 5, 8, 9, 4, 10, 2, 7])).toBe(5.5);
  });
})
