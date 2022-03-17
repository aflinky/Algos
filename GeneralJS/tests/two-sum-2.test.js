const func = require('../two-sum-2');

describe('Two Sum (with indices)', () => {
  test('([1, 3, 3, 4, 7], 6)', () => {
    expect(func([1, 3, 3, 4, 7], 6)).toEqual(expect.arrayContaining([1, 2]));
  });
  
  test('([1, 3, 3, 4, 7], 11)', () => {
    expect(func([1, 3, 3, 4, 7], 11)).toEqual(expect.arrayContaining([3, 4]));
  });

  test('([-1, 1, 3, 4, 7], 0)', () => {
    expect(func([-1, 1, 3, 4, 7], 0)).toEqual(expect.arrayContaining([0, 1]));
  });
  
  test('([1, 7, 6], 7)', () => {
    expect(func([1, 7, 6], 7)).toEqual(expect.arrayContaining([0, 2]));
  });
})
