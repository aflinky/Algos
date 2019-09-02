/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
    if (!array.length) return false //if empty array return false
    if (array.includes(target)) {return true} //if target in array, return true
    // console.log(array)
    array = array.sort((a, b) => b-a)
    // console.log(array)
    const totalSum = array.reduce((sum, curr) => sum += curr)
    // console.log(totalSum)
    if (totalSum === target) return true //if totalSum = target return true
    if (array[array.length-1] > target) {return false} // if smallest number > target return false
    if (array[array.length-1] >= 0 && totalSum < target) {return false} // if total sum is less than target and all numbers are positve, return false
    for (let i=0; i<array.length; i++) { //iterate through array
        // recurison on parts of array?
        let smallerArr = array.slice()
        smallerArr.splice(i, 1)
        if (subsetSum(smallerArr, target)) return true;
        // console.log(smallerArr)
    }
    return false;

}

// console.log(subsetSum([3, 7, 4, 2], 7))
// console.log(subsetSum([3, 7, 4, 2], 5))
// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32))
// console.log(subsetSum([8, 2, 4, 12], 13))
// console.log(subsetSum([8, -2, 1, -3], 6))

module.exports = subsetSum;
