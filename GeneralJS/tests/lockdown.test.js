const func = require('../lockdown');

describe('Lockdown', () => {
  test('Case 1', () => {
    const add = function(a, b, c) { return a + b + c }
    const secureFunc = func(add, 'lolol');
    expect(secureFunc('lolol', 1, 2, 3)).toBe(6);
    expect(secureFunc('wrong', 1, 2, 3)).toBe(401);
  });
  
  test('Case 2', () => {
    const multiply = function(a, b) { return a * b }
    const secureFunc = func(multiply, 'meow');
    expect(secureFunc('wrong', 1, 2)).toBe(401);
    expect(secureFunc('meow', 1, 2)).toBe(2);
  });
})
