/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    if (arr.length<2 || n===0) return false
    for (let i=0; i<arr.length; i++) {
        let diff = n-arr[i];
        for (let j=arr.length-1; j>i; j--) {
            if (arr[j]===diff && j!==i) return true;
        }
    }
    return false;
}


// console.log(twoSum([1,3,3,4,7], 6))
// console.log(twoSum([1,3,4,7], 6))
// console.log(twoSum([1,3,4,7], 0))
// console.log(twoSum([7], 10))
// console.log(twoSum([1,3,4,7], 10))
// console.log(twoSum([1,3,4,7], 16))