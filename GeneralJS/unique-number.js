/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
*/

// O(n) time
function uniqueNumber(array) {
  let dictionary = {};
  for (let num of array) {
    if (!dictionary.hasOwnProperty(num)) {
      dictionary[num] = 1;
    }
    else delete dictionary[num];
  }
  return Object.keys(dictionary)[0]
}

// O(1) space
// Binary XOR ^
function uniqueNumber(array) {
  let result = 0;
  for (let i=0; i<array.length; i++) {
    result = result ^ array[i]
  }
  return result
}

// console.log((array[i]).toString(2))
// console.log(uniqueNumber([1,2,1,3,3]))

module.exports = uniqueNumber;
