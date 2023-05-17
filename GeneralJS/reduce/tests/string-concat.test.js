const func = require('../string-concat');

describe('String Concat', () => {
  test("['a', 'b', 'c']", () => {
    expect(func(['a', 'b', 'c'])).toBe('abc');
  });
})
