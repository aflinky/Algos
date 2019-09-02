/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
  const result = [];
  while (arr1.length || arr2.length) {
    if (!arr1.length) {result.push(arr2.shift()); continue}
    if (!arr2.length) {result.push(arr1.shift()); continue}
    if (arr1[0] < arr2[0]) result.push(arr1.shift())
    else result.push(arr2.shift())
  }
  return result;
}
// const my_array = [3,4,6,10,11,15,21];
// const another_array = [1,5,8,12,14,19];
// console.log(mergeArrays(my_array, another_array))
// console.log(mergeArrays([1,3,5], [2,4,6, 7, 8]))

module.exports = mergeArrays;
