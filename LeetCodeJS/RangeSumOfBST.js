/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
// https://leetcode.com/problems/range-sum-of-bst/
// Best test results:
// Best speed: 87.4% 160ms 
// Best memory: 39.7% 67.2 MB

var rangeSumBST = function(root, L, R) {
  if (root == null) return 0;
  if (root.val < L) { //if node.val < L, we don't need to add it OR check its left
      return rangeSumBST(root.right, L, R)
  }
  else if (root.val > R) { //if node.val > R, we don't need to add it OR check its right
      return rangeSumBST(root.left, L, R)
  }
  else { //if the root.val is in range, keep and check left and right
      return root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R)
  }
};