const func = require('../print-numeric-palindromes');

describe('Print numeric palindromes', () => {
  // test('Test eight (Must check manually)', () => {
  //   expect(func.eightDigitPalindromes()).toBeTruthy();
  // });
  
  test('Test even one', () => {
    const result = func.evenDigitPalindromes(2);
    expect(result).toBeTruthy();
    for (let i = 1; i < 10; i++) {
      expect(result[i - 1]).toBe((i * 10) + i);
    }
  });
  
  test('Test even two (Should also check prints manually)', () => {
    const result = func.evenDigitPalindromes(4);
    expect(result).toBeTruthy();
    expect(result[0]).toBe(1001);
    expect(result[1]).toBe(1111);
    expect(result[2]).toBe(1221);
    expect(result[3]).toBe(1331);
    expect(result[4]).toBe(1441);
    expect(result[5]).toBe(1551);
  });
})
