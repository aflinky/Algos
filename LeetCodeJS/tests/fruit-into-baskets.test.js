const { BST } = require('../../utils/binarySearchTree');
const func = require('../fruit-into-baskets');

describe('Fruit into Baskets', () => {
  test('[1,2,1]', () => {
    expect(func([1,2,1])).toBe(3);
  });
  
  test('[0,1,2,2]', () => {
    expect(func([0,1,2,2])).toBe(3);
  });
  
  test('[1,2,3,2,2]', () => {
    expect(func([1,2,3,2,2])).toBe(4);
  });
})