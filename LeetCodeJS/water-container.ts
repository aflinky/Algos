/**
 * Container with Most Water
 * https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} heights
 * @return {number}
 * Runtime: 52 ms, faster than 95.84% of JavaScript online submissions for Container With Most Water.
 * Memory Usage: 35.5 MB, less than 78.79% of JavaScript online submissions for Container With Most Water.
 * 
 * Sliding Window front/back
 * https://medium.com/outco/how-to-solve-sliding-window-problems-28d67601a66
 * 
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container.
 * 
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
 * In this case, the max area of water (blue section) the container can contain is 49.
 * 
 * Input: height = [1,1]
 * Output: 1
 * 
 * n == height.length
 * 2 <= n <= 105
 * 0 <= height[i] <= 104
*/

// Solution 1
// function maxWater(heights: number[]): number {
//   // Front and back pointers
//   let left = 0;
//   let right = heights.length - 1;

//   let max = 0;

//   while (left !== right) {
//     // Find shorter of two heights
//     const minHeight = Math.min(heights[left], heights[right]);
//     // Compare curr max to current water
//     max = Math.max(max, minHeight * (right - left));

//     // Move lower pointer inwards
//     if (minHeight === heights[left]) left++;
//     else right--;
//   }

//   return max;
// }

// Solution 2
function maxWater(heights: number[]): number {
  // Front and back pointers
  let left = 0;
  let right = heights.length - 1;

  let max = 0;

  while (left !== right) {
    // Find shorter of two heights
    const minHeight = Math.min(heights[left], heights[right]);
    // Compare curr max to current water
    max = Math.max(max, minHeight * (right - left));

    /** HERE IS WHERE THINGS GET A LITTLE QUICKER **/
    // All heights lower than what we currently have will result in a lower water volume
    // because width is decreasing
    // Move left pointer inwards until it finds taller height (or hits right pointer)
    while (left < right && heights[left] <= minHeight) left++;
    // Move right pointer inwards until it finds taller height (or hits left pointer)
    while (left < right && heights[right] <= minHeight) right--;
  }

  return max;
}

module.exports = maxWater;
