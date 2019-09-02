/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

// function getAllProducts(array) {
//   if (!array.length) return [0]
//   const results = [];
//   let loops = 0;
//   let sum;
//   while (loops < array.length) {
//     sum = 1;
//     for (let i = 0; i < array.length - 1; i++) {
//       sum *= array[i]
//     }
//     results.push(sum)
//     array.push(array.shift())
//     loops++;
//   }
//   return results
// }

function getAllProducts(array) {
  if (!array.length) return [0]
  const results = [];
  let accum = 1;
  results.push(accum);
  for (let i=0; i<array.length-1; i++) {
    accum *= array[i];
    results.push(accum)
    // console.log(results)
  }
  accum = 1;
  for (i=array.length-1; i>0; i--) {
    accum *= array[i];
    results[i-1] *= accum
    // console.log(results)
  }
  return results
}

// console.log(getAllProducts([1, 7, 3, 4]))
// console.log(getAllProducts([1, 7, 0, 4]))

module.exports = getAllProducts;
