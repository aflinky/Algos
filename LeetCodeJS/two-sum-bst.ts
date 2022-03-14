/**
 * 
 * Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.
 * 
 * Ex
 * Input: root = [5,3,6,2,4,null,7], k = 9
 * Output: true
 * 
 * Input: root = [5,3,6,2,4,null,7], k = 28
 * Output: false
 * 
 * The number of nodes in the tree is in the range [1, 104].
 * -104 <= Node.val <= 104
 * root is guaranteed to be a valid binary search tree.
 * -105 <= k <= 105
 */
// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

import { BST } from "../utils/binarySearchTree";
import depthFirstPreOrder from "../generalJS/bst-depth-first-search-pre-order";

var twoSumBST = function (root: BST, target: number): boolean {
  const values = depthFirstPreOrder(root);
  const dictionary = {};
  for (let i = 0; i < values.length; i++) {
    // Check for match
    const match = target - values[i];
    if (dictionary[match]) return true;

    // Add to dictionary
    if (!dictionary[values[i]]) dictionary[values[i]] = 1;
  }
  return false;
}

module.exports = twoSumBST;