const func = require("../house-robber");

describe("House Robber", () => {
  test("Case 1", () => {
    expect(func([1, 2, 3, 1])).toBe(4);
  });

  test("Case 2", () => {
    expect(func([2, 7, 9, 3, 1])).toBe(12);
  });

  test("Case 3", () => {
    expect(func([1, 3, 1, 1, 2])).toBe(5);
  });
});
