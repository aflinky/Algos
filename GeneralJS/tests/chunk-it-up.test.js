const func = require('../chunk-it-up');

describe('Chunk it up', () => {
  test('["a", "b", "c", "d"], 2', () => {
    expect(func(["a", "b", "c", "d"], 2)).toStrictEqual([["a", "b"], ["c", "d"]]);
  });
  
  test('[0, 1, 2, 3, 4, 5], 3', () => {
    expect(func([0, 1, 2, 3, 4, 5], 3)).toStrictEqual([[0, 1, 2], [3, 4, 5]]);
  });
  
  test('[0, 1, 2, 3, 4, 5], 2', () => {
    expect(func([0, 1, 2, 3, 4, 5], 2)).toStrictEqual([[0, 1], [2, 3], [4, 5]]);
  });
  
  test('[0, 1, 2, 3, 4, 5], 4', () => {
    expect(func([0, 1, 2, 3, 4, 5], 4)).toStrictEqual([[0, 1, 2, 3], [4, 5]]);
  });
  
  test('[0, 1, 2, 3, 4, 5, 6], 3', () => {
    expect(func([0, 1, 2, 3, 4, 5, 6], 3)).toStrictEqual([[0, 1, 2], [3, 4, 5], [6]]);
  });
  
  test('[0, 1, 2, 3, 4, 5, 6, 7, 8], ', () => {
    expect(func([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).toStrictEqual([[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
  });
  
  test('[0, 1, 2, 3, 4, 5, 6, 7, 8], ', () => {
    expect(func([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)).toStrictEqual([[0, 1], [2, 3], [4, 5], [6, 7], [8]]);
  });
  
  test('[1, 2, 3], 0', () => {
    expect(func([1, 2, 3], 0)).toStrictEqual([]);
  });
  
  test('[1], 2', () => {
    expect(func([1], 2)).toStrictEqual([[1]]);
  });
})
