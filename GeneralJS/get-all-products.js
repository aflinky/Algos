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

function getAllProducts(array) {
  if (!array.length) return [0] //if empty array => [0]
  const results = []; //declare results
  let accum = 1; //set accum = 1
  results.push(accum); //add to results
  for (let i=0; i<array.length-1; i++) { //iterate through to second-to-last elem of array
    accum *= array[i]; //multiply accum and add to results array
    results.push(accum)
  }
  accum = 1; //reset accum to 1
  for (i=array.length-1; i>0; i--) { //iterate backwards from end of arry to first element
    accum *= array[i]; //multiply accum
    results[i-1] *= accum //multiply results[i-1] by accum
  }
  return results
}

// console.log(getAllProducts([1, 7, 3, 4]))
// console.log(getAllProducts([1, 7, 0, 4]))