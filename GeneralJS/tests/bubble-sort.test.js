const func = require('../bubble-sort');

describe('Bubble Sort', () => {
  test('[7]', () => {
    expect(func([7])).toStrictEqual([7]);
  });

  test('[5, 7]', () => {
    expect(func([5, 7])).toStrictEqual([5, 7]);
  });
  
  test('[7, 5]', () => {
    expect(func([7, 5])).toStrictEqual([5, 7]);
  });

  test('[100, 0, -20, 5000, 7]', () => {
    expect(func([100, 0, -20, 5000, 7])).toStrictEqual([-20, 0, 7, 100, 5000]);
  });

  test('[1, 6, 3, 5, 8, 9, 4, 10, 2]', () => {
    expect(func([1, 6, 3, 5, 8, 9, 4, 10, 2])).toStrictEqual([1, 2, 3, 4, 5, 6, 8, 9, 10]);
  });

  test('[1, 6, 3, 5, 8, 9, 4, 10, 2, 7]', () => {
    expect(func([1, 6, 3, 5, 8, 9, 4, 10, 2, 7])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
})
