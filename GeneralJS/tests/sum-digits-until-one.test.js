const func = require('../sum-digits-until-one');

describe('Sum Digits Until One', () => {
  test('1', () => {
    expect(func(1)).toBe(1);
  });
  
  test('49', () => {
    expect(func(49)).toBe(4);
  });
  
  test('439230', () => {
    expect(func(439230)).toBe(3);
  });
});