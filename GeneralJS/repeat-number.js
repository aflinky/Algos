/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

// js natvie sort method time complexity O(n^2) || O(nlogn) for large arrays
// but space complexity O(1)
// function repeatNumbers(array) {
//     let result;
//     array.sort((a, b) => {
//         if (a===b) result = a;
//         if (a <= b) return -1;
//         if (b < a) return 1;
//     })
//     return result;
// }

// time complexity of one for loop is O(n)
// but a dictionary is space complexity of O(n)
// function repeatNumbers(array) {
//     const dictionary = {};
//     for (let i=0; i<array.length; i++) {
//         if (!dictionary[array[i]]) {
//             dictionary[array[i]] = 1;
//         }
//         else return array[i]
//     }
// }

// O(1) time and space!
function repeatNumbers(array) {
  const expectedSum = ((array.length-1) * array.length) / 2
  let actualSum = 0;
  for (let i=0; i<array.length; i++) {
    actualSum += array[i];
  }
  return actualSum - expectedSum;
}

//bitwise
// function repeatNumbers(array) {
//   return array.reduce((acc, num, i) => {
//     acc = acc ^ num ^ i;
//     return acc
//   }, 0)
// }

// console.log(repeatNumbers([1,4,2,6,3,9,8,7,5,7]))

module.exports = repeatNumbers;
