const func = require('../knapsack');

describe('Knapsack', () => {
  test('[{ weight: 1, value: 3 }, { weight: 2, value: 4 }, { weight: 3, value: 5 }], 3', () => {
    expect(func([{ weight: 1, value: 3 }, { weight: 2, value: 4 }, { weight: 3, value: 5 }], 3)).toBe(7);
  });

  test('[{ weight: 1, value: 3 }, { weight: 2, value: 4 }, { weight: 3, value: 5 }], 5', () => {
    expect(func([{ weight: 1, value: 3 }, { weight: 2, value: 4 }, { weight: 3, value: 5 }], 5)).toBe(9);
  });

//   test('500, [1, 2, 5]', () => {
//     expect(func(500, [1, 2, 5])).toBe(12701);
//   });

//   test('3, [2]', () => {
//     expect(func(3, [2])).toBe(0);
//   });

//   test('10, [10]', () => {
//     expect(func(10, [10])).toBe(1);
//   });

//   test('10, [5]', () => {
//     expect(func(10, [5])).toBe(1);
//   });

//   test('10, []', () => {
//     expect(func(10, [])).toBe(0);
//   });

//   test('0, [10]', () => {
//     expect(func(0, [10])).toBe(1);
//   });

//   test('100, [99,1]', () => {
//     expect(func(100, [99,1])).toBe(2);
//   });
})