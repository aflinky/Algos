const func = require('../water-container');

describe('Water Container', () => {
  test('[1, 8, 6, 2, 5, 4, 8, 3, 7]', () => {
    expect(func([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  test('[5, 4]', () => {
    expect(func([5, 4])).toBe(4);
  });

  test('[1, 3, 2, 5, 25, 24, 5]', () => {
    expect(func([1, 3, 2, 5, 25, 24, 5])).toBe(24);
  });

  test('[1, 2, 4, 3]', () => {
    expect(func([1, 2, 4, 3])).toBe(4);
  });

  test('[1, 8, 8, 1, 1, 1]', () => {
    expect(func([1, 8, 8, 1, 1, 1])).toBe(8);
  });

  test('[1, 1, 1, 1, 1, 1]', () => {
    expect(func([1, 1, 1, 1, 1, 1])).toBe(5);
  });

})