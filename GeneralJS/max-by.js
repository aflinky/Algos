// write a function "maxBy" that takes an array and a callback as arguments. "maxBy" will iterate thru the array and pass each array element to the callback as an argument. "maxBy" will determine the maximum value among all the outputted values from this callback. The array element that produced this value is returned by "maxBy".
// var nums = [-1, 1, 5, 2, -7]
// maxBy(nums, Math.abs)  -> -7 (because Math.abs(-7) produces 7 which is greater than all other outputs 5, 2, and 1)
//
// maxBy(nums, function(x) {
//   return 2 * x - 1000;
// });  -> 5

function maxBy(arr, callback) {
  let greatest = -Infinity;
  let greatestElem = null
  for (let elem of arr) {
    let thisCallback = callback(elem);
    if (thisCallback > greatest) {
      greatest = thisCallback;
      greatestElem = elem;
    }
  }
  return greatestElem
}
// no edge cases built in for if cb(x) = cb(y) because not specified, otherwise could make condition >= and also make comparisons for greatestElem vs elem

var nums = [-1, 1, 5, 2, -7]
console.log(maxBy(nums, Math.abs))
console.log(maxBy(nums, function(x) {
  return 2 * x - 1000;
}));