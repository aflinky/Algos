const func = require('../reverse-linked-list');
const makeLLFromArray = require('../../utils/linkedLists').makeLLFromArray;

describe('Reverse Linked List', () => {
  test('Test one', () => {
    // Arrange
    const arr = [1, 2, 3];
    const original = makeLLFromArray(arr);
    
    // Act
    const reversed = func(original);
    
    // Assert
    let curr = reversed;
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
      expect(curr.value).toBe(arr[i]);
      curr = curr.next;
    };
  });
  
  test('Test two', () => {
    // Arrange
    const arr = [1, 2];
    const original = makeLLFromArray(arr);
    
    // Act
    const reversed = func(original);
    
    // Assert
    let curr = reversed;
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
      expect(curr.value).toBe(arr[i]);
      curr = curr.next;
    };
  });
  
  test('Test three', () => {
    // Arrange
    const arr = [1];
    const original = makeLLFromArray(arr);
    
    // Act
    const reversed = func(original);
    
    // Assert
    let curr = reversed;
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
      expect(curr.value).toBe(arr[i]);
      curr = curr.next;
    };
  });
  
  test('Test four', () => {
    // Arrange
    const arr = [];
    const original = makeLLFromArray(arr);
    
    // Act
    const reversed = func(original);
    
    // Assert
    expect(reversed).toBeUndefined();
  });
  
  test('Test five', () => {
    // Arrange
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const original = makeLLFromArray(arr);
    
    // Act
    const reversed = func(original);
    
    // Assert
    let curr = reversed;
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
      expect(curr.value).toBe(arr[i]);
      curr = curr.next;
    };
  });
})
