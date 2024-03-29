// Time Complexity: O(nlogn)
// Space Complexity: O(n)

function mergeSort(arr) {
  if (arr.length < 2) { //base case - if array length = 1 or 0 => arr
    return arr;
  }

  const mid = Math.floor(arr.length / 2); //find middle
  const subLeft = mergeSort(arr.slice(0, mid)); //left half = recursive call of mergeSort
  const subRight = mergeSort(arr.slice(mid)); //right half = recursive call of mergeSort

  return merge(subLeft, subRight); //merge split halves
}

function merge(arr1, arr2) { //helper merge function
  const result = []; //declare result
  while (arr1.length > 0 && arr2.length > 0) {
    result.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift()); //sort two arrays together
  }
  return result.concat(arr1.length ? arr1 : arr2); //concat leftovers
}

module.exports = mergeSort;