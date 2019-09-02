/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  if (!tree.left && !tree.right) return true;

  function findHeight(t) { //helper function for finding height of tree
    let height = 0;
    let children = [];
    if (!!t.left) { children.push(t.left) }
    if (!!t.right) { children.push(t.right) }
    for (sapling of children) {
      // console.log(sapling)
      let personalCount = 1;
      personalCount += findHeight(sapling);
      if (personalCount > height) { height = personalCount }
    }
    return height;
  }

  //find the heights of left and right
  let left, right;
  if (!!tree.left) {
    left = findHeight(tree.left)
  }
  if (!!tree.right) {
    right = findHeight(tree.right)
  }
  //compare heights of right and left
  if ( (!!left && !superbalanced(left)) || (!!right && !superbalanced(right)) ) return false;

  return Math.abs(left-right) <= 1;
}

// const first = new BinaryTree(50);
// first.left = new BinaryTree(25);
// first.right = new BinaryTree(75);
// first.left.left = new BinaryTree(20);
// first.left.left.left = new BinaryTree(10);
// first.left.right = new BinaryTree(30);
// first.left.right.right = new BinaryTree(40);
// first.right.right = new BinaryTree(80);
// first.right.right.right = new BinaryTree(90);
// first.right.right.right.right = new BinaryTree(100);
// console.log(first)

// console.log(superbalanced(first))

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
