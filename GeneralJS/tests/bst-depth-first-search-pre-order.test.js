const { BST } = require('../../utils/binarySearchTree');
const func = require('../bst-depth-first-search-pre-order');

describe('BST Depth First Search (Pre-Order)', () => {
  test('Test one', () => {
    // Arrange
    const bst = new BST(5);
    bst.left = new BST(3);
    bst.left.left = new BST(2);
    bst.left.right = new BST(4);
    bst.right = new BST(8);
    bst.right.left = new BST(6);
    bst.right.right = new BST(9);

    // Act/Assert
    expect(func(bst)).toStrictEqual([5, 3, 2, 4, 8, 6, 9]);
  });
});