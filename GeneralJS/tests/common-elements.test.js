const func = require("../common-elements");

const array1 = [1, 4, 6, 7, "ferret", 12, 12, 99, 2000, "dog", "dog", 99, 1000];
const array2 = [15, 9, 9, "ferret", 9, 26, 12, 12, "dog"];
const array3 = [23, 12, 12, 77, "ferret", 9, 88, 100, "dog"];
const array4 = ["ferret", 12, 12, 45, 9, 66, 77, 78, 2000];

describe("Common Elements", () => {
  test("Case 1", () => {
    const result = func(array1, array2);
    const expectedResult = [12, "ferret", "dog"];
    expect(result.length).toBe(expectedResult.length);
    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });

  test("Case 2", () => {
    const result = func(array1, array2, array3);
    const expectedResult = [12, "ferret", "dog"];
    expect(result.length).toBe(expectedResult.length);
    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });

  test("Case 3", () => {
    const result = func(array1, array2, array3, array4);
    const expectedResult = [12, "ferret"];
    expect(result.length).toBe(expectedResult.length);
    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });

  test("Case 4", () => {
    const result = func(array1, []);
    const expectedResult = [];
    expect(result.length).toBe(expectedResult.length);
    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });

  test("Case 5", () => {
    const result = func([], []);
    const expectedResult = [];
    expect(result.length).toBe(expectedResult.length);
    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });

  test("Case 6", () => {
    const result = func(array1, array2, [1, 2, 3]);
    const expectedResult = [];
    expect(result.length).toBe(expectedResult.length);
    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });
});
