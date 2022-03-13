const func = require('../meeting-rooms');

describe('Meeting Rooms', () => {
  test('[[0, 30], [5, 10], [15, 20]]', () => {
    expect(func([[0, 30], [5, 10], [15, 20]])).toBe(2);
  });
  
  test('[[9, 10], [1, 9]]', () => {
    expect(func([[9, 10], [1, 9]])).toBe(1);
  });

  test('[[7, 10], [2, 4]]', () => {
    expect(func([[7, 10], [2, 4]])).toBe(1);
  });
  
  test('[[7, 10], [2, 4], [2, 3], [1, 5], [2, 6]]', () => {
    expect(func([[7, 10], [2, 4], [2, 3], [1, 5], [2, 6]])).toBe(4);
  });
  
  test('[[2, 3], [100, 800], [2, 7], [2, 4], [7, 10], [1, 5], [2, 6]]', () => {
    expect(func([[2, 3], [100, 800], [2, 7], [2, 4], [7, 10], [1, 5], [2, 6]])).toBe(5);
  });
})