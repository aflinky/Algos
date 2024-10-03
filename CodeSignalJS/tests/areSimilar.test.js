const func = require('../areSimilar');

describe('Are Similar', () => {
  test('Case: 1', () => {
    expect(func([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  test('Case: 2', () => {
    expect(func([1, 3, 2], [1, 2, 3])).toBe(true);
  });

  test('Case: 3', () => {
    expect(func([1, 2, 3], [1, 2, "3"])).toBe(false);
  });

  test('Case: 4', () => {
    expect(func([1, 2, 3], [1, 2, 2])).toBe(false);
  });
  
  test('Case: 5', () => {
    expect(func([1, 2, 3], [3, 1, 2])).toBe(false);
  });
})