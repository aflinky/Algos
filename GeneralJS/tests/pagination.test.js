const func = require("../pagination");

describe("GCD", () => {
  test("currentPage: 5, totalPages: 10, pagesToShow: 7", () => {
    expect(func(5, 10, 7)).toBe("< 2 3 4 5*6 7 8 >");
  });
});
