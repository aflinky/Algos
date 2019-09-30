/**
 * https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
*/


// var maxArea = function (height) {
//   if (height.length === 2) return Math.min(...height);
//   let left = 0;
//   let right = height.length - 1;
//   let maxWater = 0;
//   while (left !== right) {
//     maxWater = Math.max(maxWater, Math.min(height[left], height[right]) * (right - left));
//     console.log(left, right, maxWater)
//     if (height[left + 1] < height[right - 1]) right--
//     else left++;
//   }
//   return maxWater;
// };

// var maxArea = function (height) {
//   if (height.length === 2) return Math.min(...height);
//   let left = 0;
//   let right = height.length - 1;
//   let maxWater = 0;
//   while (left !== right) {
//     maxWater = Math.max(maxWater, Math.min(height[left], height[right]) * (right - left));
//     console.log(height[left], height[right], maxWater)
//     const min = Math.min(height[left], height[right]);
//     console.log(min)
//     if (height[left] < height[left + 1] && height[left + 1] > min) left++
//     else if (height[left + 1] > height[right - 1]) right--
//     else if (height[left + 1] < height[right - 1]) left++
//     else if (height[left] > height[left + 1] && height[right - 1] > height[right]) right--
//     else left=right
//   }
//   return maxWater;
// };
var maxArea = function (height) {
  if (height.length === 2) return Math.min(...height);
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;
  while (left !== right) {
    maxWater = Math.max(maxWater, Math.min(height[left], height[right]) * (right - left));
    console.log(height[left], height[right], maxWater)
    const min = Math.min(height[left], height[right]);
    console.log(min)
    if (height[left] < height [left + 1]) left++
    else left=right
  }
  return maxWater;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) //49
console.log(maxArea([5, 4])) //4
console.log(maxArea([1,3,2,5,25,24,5])) //24
console.log(maxArea([1, 2, 4, 3])) //4
console.log(maxArea([1, 8, 8, 1, 1, 1])) //8