const { BST } = require('../../utils/binarySearchTree');
const func = require('../valid-bst');

describe('Valid BST', () => {
  test('Valid one', () => {
    // Arrange
    const bst = new BST(10);
    const goodleft = new BST(8);
    bst.left = goodleft;
    bst.right = new BST(12);
    goodleft.left = new BST(1);

    // Act/Assert
    expect(func(bst)).toBe(true);
  });
  
  test('Valid two', () => {
    // Arrange
    const bst = new BST(10);
    const goodleft = new BST(8);
    bst.left = goodleft;
    bst.right = new BST(12);
    goodleft.right = new BST(100);

    // Act/Assert
    expect(func(bst)).toBe(true);
  });
  
  test('Invalid one', () => {
    // Arrange
    const bst = new BST(10);
    bst.left = new BST(13);
    bst.right = new BST(12);

    // Act/Assert
    expect(func(bst)).toBe(false);
  });
  
  test('Invalid two', () => {
    // Arrange
    const bst = new BST(10);
    bst.left = new BST(13);
    bst.left.left = new BST(100);
    bst.right = new BST(12);

    // Act/Assert
    expect(func(bst)).toBe(false);
  });
  
  test('Invalid three', () => {
    // Arrange
    const bst = new BST(10);
    bst.left = new BST(13);
    bst.left.right = new BST(1);
    bst.right = new BST(12);

    // Act/Assert
    expect(func(bst)).toBe(false);
  });
  
  test('Invalid four', () => {
    // Arrange
    const bst = new BST(10);
    bst.left = new BST(13);
    bst.left.right = new BST(13);
    bst.right = new BST(12);

    // Act/Assert
    expect(func(bst)).toBe(false);
  });
});