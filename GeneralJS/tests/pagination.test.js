const func = require("../pagination");

describe("Pagination", () => {
  test("(carrots on both sides) currentPage: 5, totalPages: 10, pagesToShow: 3", () => {
    expect(func(5, 10, 3)).toBe("< 4 5*6 >");
  });

  test("(carrots on both sides) currentPage: 16, totalPages: 20, pagesToShow: 7", () => {
    expect(func(16, 20, 7)).toBe("< 13 14 15 16*17 18 19 >");
  });

  test("(carrots on both sides) currentPage: 5, totalPages: 10, pagesToShow: 7", () => {
    expect(func(5, 10, 7)).toBe("< 2 3 4 5*6 7 8 >");
  });

  test("(prev carrots only I) currentPage: 7, totalPages: 10, pagesToShow: 7", () => {
    expect(func(7, 10, 7)).toBe("< 4 5 6 7*8 9 10");
  });
  
  test("(prev carrots only II) currentPage: 18, totalPages: 20, pagesToShow: 5", () => {
    expect(func(18, 20, 5)).toBe("< 16 17 18*19 20");
  });
  
  test("(next carrots only I) currentPage: 4, totalPages: 10, pagesToShow: 7", () => {
    expect(func(4, 10, 7)).toBe("1 2 3 4*5 6 7 >");
  });
  
  test("(next carrots only II) currentPage: 2, totalPages: 20, pagesToShow: 5", () => {
    expect(func(2, 20, 5)).toBe("1 2*3 4 5 >");
  });

  test("(pages to show greater than total pages) currentPage: 1, totalPages: 5, pagesToShow: 7", () => {
    expect(func(1, 5, 7)).toBe("1*2 3 4 5");
  });

  test("(towards end of pages && pages to show greater than total pages) currentPage: 4, totalPages: 5, pagesToShow: 7", () => {
    expect(func(4, 5, 7)).toBe("1 2 3 4*5");
  });

  test("(towards end of pages) currentPage: 18, totalPages: 20, pagesToShow: 7", () => {
    expect(func(18, 20, 7)).toBe("< 14 15 16 17 18*19 20");
  });
});
