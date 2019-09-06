/**
 * Subsets - Power set
 * https://leetcode.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 * Runtime: 60 ms, faster than 65.60% of JavaScript online submissions for Subsets.
 * Memory Usage: 35.1 MB, less than 23.53% of JavaScript online submissions for Subsets.
 */
var subsets = function(nums) {
  if (nums.length === 1) return [nums, []]
  let results = [];
  let subCombos = subsets(nums.slice(1));
  subCombos.forEach(x => {
    results.push([nums[0]].concat(x));
    results.push(x)
  })
  return results;
};

subsets([1, 2, 3, 4])