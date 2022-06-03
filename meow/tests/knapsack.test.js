const func = require('../knapsack');

describe('Knapsack', () => {
  test('[{ weight: 1, value: 3 }, { weight: 2, value: 4 }, { weight: 3, value: 5 }], 3', () => {
    expect(func([{ weight: 1, value: 3 }, { weight: 2, value: 4 }, { weight: 3, value: 5 }], 3)).toBe(7);
  });

  test('[{ weight: 1, value: 3 }, { weight: 2, value: 4 }, { weight: 3, value: 5 }], 5', () => {
    expect(func([{ weight: 1, value: 3 }, { weight: 2, value: 4 }, { weight: 3, value: 5 }], 5)).toBe(9);
  });
  
  test('[{ weight: 5, value: 10 }, { weight: 4, value: 40 }, { weight: 6, value: 30 }, { weight: 3, value: 50 }], 10', () => {
    expect(func([{ weight: 5, value: 10 }, { weight: 4, value: 40 }, { weight: 6, value: 30 }, { weight: 3, value: 50 }], 10)).toBe(90);
  });
})