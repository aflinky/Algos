/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

*/

//Binary Search O(logn)
function findInOrderedSet(arr, target, left=0, right=arr.length) {
  let middle = Math.floor((right+left)/2)
  //base case
  if (arr[middle] === target) return true
  //base case (finished searching)
  if (left === right) return false
  if (arr[middle-1] && arr[middle+1] &&arr[middle-1]<target && arr[middle+1]>target) return false
  //search left inclusive, middle exclusive
  if (target < arr[middle]) {
    return findInOrderedSet(arr, target, left, middle-1)
  }
  //search right inclusive, middle exclusive
  else return findInOrderedSet(arr, target, middle+1, right)
}

var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 8));
// console.log(findInOrderedSet(nums, 45));


module.exports = findInOrderedSet;
