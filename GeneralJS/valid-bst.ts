/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */

import { BST } from "../utils/binarySearchTree";

// Least lines of code but two variables
function validBST(tree: BST) {
  // If no branches
  if (!tree.left && !tree.right) return true;
  
  // Eval left and right sides
  else if (tree.left && tree.left.value >= tree.value) return false;
  else if (tree.right && tree.right.value <= tree.value) return false;
  
  // Eval branches recursively
  const left = tree.left ? validBST(tree.left) : true;
  const right = tree.right ? validBST(tree.right) : true;
  return left && right;
}
  

// Same but different
// function validBST(tree: BST) {
//   // If no branches
//   if (!tree.left && !tree.right) return true;

//   // If left and right, must continue in both directions
//   else if (tree.left && tree.right) {
//     if (tree.left.value >= tree.value) return false;
//     if (tree.right.value <= tree.value) return false;
//     return validBST(tree.left) && validBST(tree.right);
//   }
  
//   // If only left, eval then continue
//   else if (tree.left) {
//     if (tree.left.value >= tree.value) return false;
//     else return validBST(tree.left);
//   }
  
//   // If only right, eval then continue
//   else if (tree.right) {
//     if (tree.right.value <= tree.value) return false;
//     else return validBST(tree.right);
//   }
// }

module.exports = validBST;
