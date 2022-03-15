const { BST } = require('../../utils/binarySearchTree');
const func = require('../bst-breadth-first-search');

describe('BST Depth First Search (In-Order)', () => {
  test('Test one', () => {
    // Arrange
    const bst = new BST(5);
    
    bst.left = new BST(3);
    bst.right = new BST(8);

    bst.left.left = new BST(2);
    bst.left.right = new BST(4);
    bst.right.left = new BST(6);
    bst.right.right = new BST(9);

    // Act/Assert
    expect(func(bst)).toStrictEqual([5, 3, 8, 2, 4, 6, 9]);
  });
});