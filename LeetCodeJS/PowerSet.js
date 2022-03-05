/**
 * Subsets - Power set
 * https://leetcode.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
  The solution set must not contain duplicate subsets. Return the solution in any order.

 * Runtime: 60 ms, faster than 65.60% of JavaScript online submissions for Subsets.
 * Memory Usage: 35.1 MB, less than 23.53% of JavaScript online submissions for Subsets.
 * 
 * Input: nums = [1,2,3]
  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

  Input: nums = [0]
  Output: [[],[0]]
 */
  var subsets = function(nums) {
    if (nums.length === 1) return [nums, []];
    let results = [];
    let subCombos = subsets(nums.slice(1));
    subCombos.forEach(x => {
      results.push([nums[0]].concat(x));
      results.push(x);
      console.log('results', results)
    })
    return results;
  };
  
  /**
   * subsets([1, 2, 3])
   * results = []
   * subCombos = subsets([2, 3])
   *  results = []
   *  subCombos = subsets([3]) => [[3], []]
   *    return [[3], []]
   *  ([[3], []]).forEach
   *    first pushes = [[2, 3], [3]]
   *    second pushes = [[2], []]
   *    results = [[2, 3], [3], [2], []]
   * [[2, 3], [3], [2], []].forEach
   *    first pushes = [[1, 2, 3], [2, 3]]
   *    second pushes = [[1, 3], [3]]
   *    third pushes = [[1, 2], [2]]
   * return [[1, 2, 3], [2, 3], [1, 3], [3], [1, 2], [2], [1], []]
   */
  
  module.exports = subsets;