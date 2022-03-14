const { BST } = require('../../utils/binarySearchTree');
const func = require('../range-sum-of-bst');

describe('Range Sum of BST', () => {
  test('Test one', () => {
    // Arrange
    const bst = new BST(10);
    bst.left = new BST(5);
    bst.left.left = new BST(3);
    bst.left.right = new BST(7);
    bst.right = new BST(15);
    bst.right.right = new BST(18);

    // Act/Assert
    expect(func(bst, 7, 15)).toBe(32);
  });
  
  test('Test two', () => {
    // Arrange
    const bst = new BST(10);
    bst.left = new BST(5);
    bst.left.left = new BST(3);
    bst.left.left.left = new BST(1);
    bst.left.right = new BST(7);
    bst.left.right.left = new BST(6);
    bst.right = new BST(15);
    bst.right.left = new BST(13);
    bst.right.right = new BST(18);

    // Act/Assert
    expect(func(bst, 6, 10)).toBe(23);
  });
})