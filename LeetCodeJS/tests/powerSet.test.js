const func = require('../powerSet');

describe('PowerSet', () => {
  test('[1,2,3]', () => {
    const subsets = [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]];
    expect(func([1,2,3])).toEqual(expect.arrayContaining(subsets));
  });
  
  test('[0]', () => {
    const subsets = [[], [0]];
    expect(func([0])).toEqual(expect.arrayContaining(subsets));
  });
})