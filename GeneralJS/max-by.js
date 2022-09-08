/*
  Write a function "maxBy" that takes an array and a callback as arguments.
  maxBy will iterate thru the array and pass each array element to the callback as an argument
  maxBy will determine the maximum value among all the outputted values from this callback
  maxBy will return the array element that produced this max value

  You may assume there is exactly one answer
 */

// const nums = [-1, 1, 5, 2, -7]
// maxBy(nums, Math.abs)  -> -7 (because Math.abs(-7) produces 7 which is greater than all other outputs 5, 2, and 1)
//
// maxBy(nums, function(x) {
//   return 2 * x - 1000;
// });  -> 5

function maxBy(arr, callback) {}

module.exports = maxBy;