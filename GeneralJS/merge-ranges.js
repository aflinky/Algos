/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

// if you used mergeSort, O(nlogn)
function mergeRanges(array) {
  array = array.sort((a, b) => a[0]-b[0]); //sort by first hour
  return array.reduce((acc, curr) => {
    if (!acc.length) acc.push(curr) //add first one in
    else {
      let last = acc[acc.length-1]; //always compare current to the last element pushed in (because already sorted)
      if (last[1]-curr[0] >= 0) { //if the last last hour is at the same time or later than the curr first hour, there is overlap
        if (curr[1] > last[1]) {
          last[1] = curr[1]
        }
        // curr = [0, 0];
      }
      else { //if no overlap
        acc.push(curr)
      }
    }
    return acc
  }, [])
}

// if we can assume that meetings do not go beyond 24h, we can make an array(24) and append trues for included things, then scan time table and grab new tuples

// console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [5, 7], [10, 12], [9, 10]]))

module.exports = mergeRanges;
