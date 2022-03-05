const func = require('../zip-linked-lists');
const makeLL = require('../../utils/linkedLists').makeLL;

/**
 * Helper function to take an array and split into two arrays
 */
function unzip(arrOfValues) {
  const l1 = [];
  const l2 = [];
  for (let i = 0; i < arrOfValues.length; i++) {
    if (i % 2 === 0) l1.push(arrOfValues[i]);
    else l2.push(arrOfValues[i]);
  }
  return { l1, l2 }
}

describe('Zip Linked Lists', () => {
  test('Test one', () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const { l1, l2 } = unzip(values);
    const list1 = makeLL(l1);
    const list2 = makeLL(l2);
    const zipped = func(list1, list2);
    let curr = zipped;
    for (let i = 0; i < values.length; i++) {
      expect(curr.value).toBe(values[i]);
      curr = curr.next;
    };
  });
  
  test('Test two', () => {
    const values = [5, 4, 7, 8, 2];
    const { l1, l2 } = unzip(values);
    const list1 = makeLL(l1);
    const list2 = makeLL(l2);
    const zipped = func(list1, list2);
    let curr = zipped;
    for (let i = 0; i < values.length; i++) {
      expect(curr.value).toBe(values[i]);
      curr = curr.next;
    };
  });
})
