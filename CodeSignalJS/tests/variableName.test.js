const func = require('../variableName');

describe('Variable Name', () => {
  test('Case: var_1__Int', () => {
    expect(func('var_1__Int')).toBe(true);
  });

  test('Case: qq-q', () => {
    expect(func('qq-q')).toBe(false);
  });

  test('Case: 2w2', () => {
    expect(func('2w2')).toBe(false);
  });

  test('Case: [empty string]', () => {
    expect(func('')).toBe(false);
  });
})