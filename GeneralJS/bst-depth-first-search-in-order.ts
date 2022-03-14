/**
 * BST Depth First Search (In-order)
 * left, top, right
 * https://dev.to/mattdclarke/implement-depth-first-search-in-a-binary-search-tree-with-javascript-1p96
 */

import { BST } from "../utils/binarySearchTree";

// Solution 1
// Concat non mutative so more aux mem
// function depthFirstInOrder(tree: BST): number[] {
//   let result = [];
  
//   if (tree.left) {
//     result = result.concat(depthFirstInOrder(tree.left));
//   }

//   result = result.concat(tree.value);

//   if (tree.right) {
//     result = result.concat(depthFirstInOrder(tree.right));
//   }
  
//   return result;
// }

// Solution 2
// push mutative
// function depthFirstInOrder(tree: BST): number[] {
//   let result = [];
  
//   if (tree.left) {
//     result.push(...depthFirstInOrder(tree.left));
//   }
  
//   result.push(tree.value);
  
//   if (tree.right) {
//     result.push(...depthFirstInOrder(tree.right));
//   }

//   return result;
// }

// Solution 3
// Pass along result variable
function depthFirstInOrder(tree: BST, result = []): number[] {  
  if (tree.left) {
    result = depthFirstInOrder(tree.left, result);
  }
  
  if (tree.value) result.push(tree.value);
  
  if (tree.right) {
    result = depthFirstInOrder(tree.right, result);
  }

  return result;
}

module.exports = depthFirstInOrder;
