const func = require('../min-window-substring');

describe('Minimum Window Substring', () => {
  test("'ADOBECODEBANC', 'ABC'", () => {
    expect(func('ADOBECODEBANC', 'ABC')).toBe('BANC');
  });

  test("'XADOBECODEBANC', 'ABC'", () => {
    expect(func('XADOBECODEBANC', 'ABC')).toBe('BANC');
  });

  test("'a', 'a'", () => {
    expect(func('a', 'a')).toBe('a');
  });

  test("'a', 'aa'", () => {
    expect(func('a', 'aa')).toBe('');
  });
  
  test("'a', 'x'", () => {
    expect(func('a', 'x')).toBe('');
  });

  test("'abb', 'bb'", () => {
    expect(func('abb', 'bb')).toBe('bb');
  });

  test("'abab', 'bb'", () => {
    expect(func('abab', 'bb')).toBe('bab');
  });
  
  test("'abba', 'bb'", () => {
    expect(func('abba', 'bb')).toBe('bb');
  });
  
  test("'CxCaaCyCbbCC', 'CC'", () => {
    expect(func('CxCaaCyCbbCC', 'CC')).toBe('CC');
  });
  
  test("'CxDaaCyDbbCD', 'CD'", () => {
    expect(func('CxDaaCyDbbCD', 'CD')).toBe('CD');
  });
  
  test("'CxDaaCyDbbY', 'Y'", () => {
    expect(func('CxDaaCyDbbY', 'Y')).toBe('Y');
  });
})