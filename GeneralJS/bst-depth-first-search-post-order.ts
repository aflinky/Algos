/**
 * BST Depth First Search (Pre-order)
 * top, left, right
 * https://dev.to/mattdclarke/implement-depth-first-search-in-a-binary-search-tree-with-javascript-1p96
 */

import { BST } from "../utils/binarySearchTree";

// Solution 1
// Concat non mutative so more aux mem
function depthFirstPostOrder(tree: BST): number[] {
  let result = [];
  
  if (tree.left) {
    result = result.concat(depthFirstPostOrder(tree.left));
  }
  
  if (tree.right) {
    result = result.concat(depthFirstPostOrder(tree.right));
  }
  
  result = result.concat(tree.value);
  
  return result;
}

// Solution 2
// push mutative
// function depthFirstPostOrder(tree: BST): number[] {
//   let result = [];
  
//   if (tree.left) {
//     result.push(...depthFirstPostOrder(tree.left));
//   }
  
//   if (tree.right) {
//     result.push(...depthFirstPostOrder(tree.right));
//   }
  
//   result.push(tree.value);

//   return result;
// }

// Solution 3
// Pass along result variable
// function depthFirstPostOrder(tree: BST, result = []): number[] {  
//   if (tree.left) {
//     result = depthFirstPostOrder(tree.left, result);
//   }
  
//   if (tree.right) {
//     result = depthFirstPostOrder(tree.right, result);
//   }
  
//   if (tree.value) result.push(tree.value);

//   return result;
// }

module.exports = depthFirstPostOrder;
