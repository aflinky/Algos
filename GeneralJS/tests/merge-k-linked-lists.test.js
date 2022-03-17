const func = require('../merge-k-linked-lists');
const makeLLFromArray = require('../../utils/linkedLists').makeLLFromArray;

describe('Merge k Linked Lists', () => {
  test('Test one', () => {
    const l1 = makeLLFromArray([1, 4, 5]);
    const l2 = makeLLFromArray([1, 3, 4]);
    const l3 = makeLLFromArray([2, 6]);
    const values = [1, 1, 2, 3, 4, 4, 5, 6]
    const merged = func([l1, l2, l3]);
    let curr = merged;
    for (let i = 0; i < values.length; i++) {
      expect(curr.value).toBe(values[i]);
      curr = curr.next;
    };
  });
  
  test('Test two', () => {
    const l1 = makeLLFromArray([2, 6]);
    const l2 = makeLLFromArray([1, 3, 4]);
    const l3 = makeLLFromArray([1, 4, 5]);
    const values = [1, 1, 2, 3, 4, 4, 5, 6]
    const merged = func([l1, l2, l3]);
    let curr = merged;
    for (let i = 0; i < values.length; i++) {
      expect(curr.value).toBe(values[i]);
      curr = curr.next;
    };
  });
  
  test('Test three', () => {
    const l1 = makeLLFromArray([2, 6]);
    const l2 = makeLLFromArray([-10, 1, 3, 4]);
    const l3 = makeLLFromArray([1, 4, 5]);
    const values = [-10, 1, 1, 2, 3, 4, 4, 5, 6]
    const merged = func([l1, l2, l3]);
    let curr = merged;
    for (let i = 0; i < values.length; i++) {
      expect(curr.value).toBe(values[i]);
      curr = curr.next;
    };
  });
  
  test('Test four', () => {
    const l1 = makeLLFromArray([2, 6]);
    const l2 = makeLLFromArray([-10, 0, 1, 3, 4]);
    const l3 = makeLLFromArray([1, 4, 5]);
    const values = [-10, 0, 1, 1, 2, 3, 4, 4, 5, 6]
    const merged = func([l1, l2, l3]);
    let curr = merged;
    for (let i = 0; i < values.length; i++) {
      expect(curr.value).toBe(values[i]);
      curr = curr.next;
    };
  });
})
