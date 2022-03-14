/**
 * BST Depth First Search (Pre-order)
 * top, left, right
 * https://dev.to/mattdclarke/implement-depth-first-search-in-a-binary-search-tree-with-javascript-1p96
 */

import { BST } from "../utils/binarySearchTree";

// Solution 1
// Concat non mutative so more aux mem
// function depthFirstPreOrder(tree: BST): number[] {
//   let result = [];
  
//   result = result.concat(tree.value);
//   if (tree.left) {
//     result = result.concat(depthFirstPreOrder(tree.left));
//   }
//   if (tree.right) {
//     result = result.concat(depthFirstPreOrder(tree.right));
//   }

//   return result;
// }

// Solution 2
// push mutative
// function depthFirstPreOrder(tree: BST): number[] {
//   let result = [];
  
//   result.push(tree.value);
//   if (tree.left) {
//     result.push(...depthFirstPreOrder(tree.left));
//   }
//   if (tree.right) {
//     result.push(...depthFirstPreOrder(tree.right));
//   }

//   return result;
// }

// Solution 3
// Pass along result variable
function depthFirstPreOrder(tree: BST, result = []): number[] {  
  if (tree.value) result.push(tree.value);

  if (tree.left) {
    result = depthFirstPreOrder(tree.left, result);
  }
  if (tree.right) {
    result = depthFirstPreOrder(tree.right, result);
  }

  return result;
}

module.exports = depthFirstPreOrder;
