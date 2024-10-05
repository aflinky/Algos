/**
 * Maximum Sum Subarray of Size K
 * 
 * Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
 * 
 * Sliding Window fast/catch up
 * https://medium.com/outco/how-to-solve-sliding-window-problems-28d67601a66
 * 
 * Input: [2, 3, 4, 1, 5], k=2 
 * Output: 7
 * Explanation: Subarray with maximum sum is [3, 4].
 * 
 * Input: [2, 1, 5, 1, 3, 2], k=3 
 * Output: 9
 * Explanation: Subarray with maximum sum is [5, 1, 3].
 */

// Brute force O(n*k)
// function maxSumSubarray(arr: number[], k: number) {
//   let maxSum = -Infinity;
//   for (let i = 0; i < arr.length - k + 1; i++) {
//     let currSum = 0;
//     for (let j = 0; j < k; j++) {
//       currSum += arr[i + j];
//     }
//     maxSum = Math.max(maxSum, currSum);
//   }

//   return maxSum;
// }

// Better O(n)
function maxSumSubarray(arr: number[], k: number) {
  let maxSum = -Infinity;
  let currSum = 0;
  // Calculate first curr sum
  for (let i = 0; i < k; i++) {
    currSum += arr[i];
  }
  // Calculate max sum
  maxSum = Math.max(currSum, maxSum);
  
  // Iterate through, constantly keeping track of sum
  for (let i = k; i < arr.length; i++) {
    currSum -= arr[i - k];
    currSum += arr[i];
    maxSum = Math.max(currSum, maxSum);
  }

  return maxSum
}

module.exports = maxSumSubarray;