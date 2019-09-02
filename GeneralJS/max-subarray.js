/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

//brute force: 2 for loops
// const maxSubarray = arr => {
//   if (!arr.length) return 0;
//   let maxSum = -Infinity;
//   for (let i=0; i<arr.length; i++) {
//     let subSum = arr[i];
//     for (let j=i+1; j<arr.length; j++) {
//       subSum += arr[j]
//       //stuff
//     }
//   }
//   return maxSum
// }


// Kadane's Algorigthm
function maxSubarray(arr) {
  if (!arr.length) return 0
  let maxSum = -Infinity
  let subSum = 0

  for (let num of arr) {
    subSum += num;
    maxSum = Math.max(maxSum, subSum); //reset maxSum if necessary
    subSum = Math.max(subSum, 0); //reset subSum to 0 if we get below zero
    // console.log(maxSum, subSum)
  }

  return maxSum
}

// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]))
// console.log(maxSubarray([5, -1, 5, 4, -15, 1]))

module.exports = maxSubarray;
