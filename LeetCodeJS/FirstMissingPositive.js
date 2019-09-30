/**
 * https://leetcode.com/problems/first-missing-positive/submissions/
 * @param {number[]} nums
 * @return {number}
*/

// O(3n) time O(n) space
// Runtime: 56 ms, faster than 73.18% of JavaScript online submissions for First Missing Positive.
// Memory Usage: 41.7 MB
// var firstMissingPositive = function (nums) {
//   const maxNumber = Math.max(...nums);
//   if (maxNumber < 1) return 1;
//   const indices = new Array(maxNumber);
//   for (let number of nums) {
//     if (number > 0) indices[number - 1] = number;
//   }
//   for (let i = 0; i < maxNumber; i++) {
//     if (!indices[i]) return i+1
//   }
//   return maxNumber+1
// };


// O(n) time, O(1) space
// Runtime: 56 ms, faster than 73.18% of JavaScript online submissions for First Missing Positive.
// Memory Usage: 35.3 MB, less than 16.67% of JavaScript online submissions for First Missing Positive.
var firstMissingPositive = function (nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
    else i++;
  }
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1
  }
  return i + 1;
};

console.log(firstMissingPositive([1, 2, 0])) //3
console.log(firstMissingPositive([3, 4, -1, 1])) //2
console.log(firstMissingPositive([-1])) //1
console.log(firstMissingPositive([7, 8, 9, 11, 12])) //1
console.log(firstMissingPositive([7, 8, 9, 11, 12, 1, 5, 3, 6, 8])) //2