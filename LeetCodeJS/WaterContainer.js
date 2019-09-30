/**
 * https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 * Runtime: 52 ms, faster than 95.84% of JavaScript online submissions for Container With Most Water.
 * Memory Usage: 35.5 MB, less than 78.79% of JavaScript online submissions for Container With Most Water.
*/

var maxArea = function (height) {
  if (height.length === 2) return Math.min(...height);
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;
  while (left !== right) {
    const minHeight = Math.min(height[left], height[right]);
    maxWater = Math.max(maxWater, minHeight * (right - left));
    while (left < right && height[left] <= minHeight) left++;
    while (left < right && height[right] <= minHeight) right--;
  }
  return maxWater;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) //49
console.log(maxArea([5, 4])) //4
console.log(maxArea([1, 3, 2, 5, 25, 24, 5])) //24
console.log(maxArea([1, 2, 4, 3])) //4
console.log(maxArea([1, 8, 8, 1, 1, 1])) //8
console.log(maxArea([1, 1, 1, 1, 1, 1])) //5