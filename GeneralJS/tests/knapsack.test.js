const func = require('../knapsack');

describe('Knapsack', () => {
  test('[{ weight: 1, value: 3 }, { weight: 2, value: 4 }, { weight: 3, value: 5 }], 3', () => {
    expect(func([{ weight: 1, value: 3 }, { weight: 2, value: 4 }, { weight: 3, value: 5 }], 3)).toBe(7);
  });

  test('[{ weight: 1, value: 3 }, { weight: 2, value: 4 }, { weight: 3, value: 5 }], 5', () => {
    expect(func([{ weight: 1, value: 3 }, { weight: 2, value: 4 }, { weight: 3, value: 5 }], 5)).toBe(9);
  });
  
  test('[{ weight: 10, value: 5 }, { weight: 40, value: 4 }, { weight: 30, value: 6 }, { weight: 50, value: 3 }], 10', () => {
    expect(func([{ weight: 10, value: 5 }, { weight: 40, value: 4 }, { weight: 30, value: 6 }, { weight: 50, value: 3 }], 10)).toBe(90);
  });
})