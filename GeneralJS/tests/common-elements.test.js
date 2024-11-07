const func = require("../common-elements");

const array1 = [1, 4, 6, 7, "ferret", 12, 12, 99, 2000, "dog", "dog", 99, 1000];
const array2 = [15, 9, 9, "ferret", 9, 26, 12, 12, "dog"];
const array3 = [23, 12, 12, 77, "ferret", 9, 88, 100, "dog"];
const array4 = ["ferret", 12, 12, 45, 9, 66, 77, 78, 2000];

describe("Common Elements", () => {
  test("Case 1", () => {
    expect(func(array1, array2)).toEqual(
      expect.arrayContaining([12, "ferret"])
    );
  });
  
  test("Case 2", () => {
    expect(func(array1, array2, array3)).toEqual(
      expect.arrayContaining([12, "ferret"])
    );
  });
  
  test("Case 3", () => {
    expect(func(array1, array2, array3, array4)).toEqual(
      expect.arrayContaining([12, "ferret"])
    );
  });
  
  test("Case 4", () => {
    expect(func(array1, [])).toEqual(
      expect.arrayContaining([])
    );
  });
  
  test("Case 5", () => {
    expect(func([], [])).toEqual(
      expect.arrayContaining([])
    );
  });
  
  test("Case 6", () => {
    expect(func(array1, array2, [1, 2, 3])).toEqual(
      expect.arrayContaining([])
    );
  });
});
