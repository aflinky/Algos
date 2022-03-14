const { BST } = require('../../utils/binarySearchTree');
const func = require('../bst-depth-first-search-post-order');

describe('BST Depth First Search (Post-Order)', () => {
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
    expect(func(bst)).toStrictEqual([2, 4, 3, 6, 9, 8, 5]);
  });
});