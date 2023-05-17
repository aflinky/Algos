const { allTrue, someTrue } = require('../overall-true');

describe('Overall true', () => {
  describe('All true', () => {
    test('[1, 3, 3, 4, 5]', () => {
      expect(allTrue([1, 3, 3, 4, 5])).toBe(false);
    });
  
    test('[17]', () => {
      expect(allTrue([17])).toBe(false);
    });
    
    test('[-2, 2]', () => {
      expect(allTrue([-2, 2])).toBe(true);
    });
    
    test('[2, 4, 6, 8, 10]', () => {
      expect(allTrue([2, 4, 6, 8, 10])).toBe(true);
    });
  });

  describe('Some true', () => {
    test('[1, 3, 3, 4, 5]', () => {
      expect(someTrue([1, 3, 3, 4, 5])).toBe(true);
    });
  
    test('[17]', () => {
      expect(someTrue([17])).toBe(false);
    });
    
    test('[-1, 1]', () => {
      expect(someTrue([-2, 2])).toBe(true);
    });
    
    test('[-1, 20, 1]', () => {
      expect(someTrue([2, 4, 6, 8, 10])).toBe(true);
    });
  });
})
