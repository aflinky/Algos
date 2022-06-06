const { BST } = require('../../utils/binarySearchTree');
const func = require('../two-sum-bst');

describe('Two Sum - BST', () => {
  test('Test one', () => {
    // Arrange
    const bst = new BST(5);
    bst.left = new BST(3);
    bst.left.left = new BST(2);
    bst.left.right = new BST(4);
    bst.right = new BST(6);
    bst.right.right = new BST(7);

    // Act/Assert
    expect(func(bst, 9)).toBe(true);
  });
  
  test('Test two', () => {
    // Arrange
    const bst = new BST(5);
    bst.left = new BST(3);
    bst.left.left = new BST(2);
    bst.left.right = new BST(4);
    bst.right = new BST(6);
    bst.right.right = new BST(7);

    // Act/Assert
    expect(func(bst, 12)).toBe(true);
  });
  
  test('Test three', () => {
    // Arrange
    const bst = new BST(5);
    bst.left = new BST(3);
    bst.left.left = new BST(2);
    bst.left.right = new BST(4);
    bst.right = new BST(6);
    bst.right.right = new BST(7);

    // Act/Assert
    expect(func(bst, 28)).toBe(false);
  });
  
  test('Test four', () => {
    // Arrange
    const bst = new BST(5);
    bst.left = new BST(3);
    bst.left.left = new BST(2);
    bst.left.right = new BST(4);
    bst.right = new BST(6);
    bst.right.right = new BST(7);
    bst.right.right.right = new BST(7);

    // Act/Assert
    expect(func(bst, 28)).toBe(false);
  });
})
