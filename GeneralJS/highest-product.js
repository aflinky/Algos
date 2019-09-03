/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array)) return 0; //if array isn't array
  if (array.length < 3) return 0 //if array length < 3
  if (array.length === 3) return array.reduce((prod, curr) => prod * curr) //if exactly three elems in array, return product of all
  if (array.length > 3) { array = array.sort((a, b) => { return b - a }) } //else sort in descending order

  if (array[1] * array[2] < array[array.length - 1] * array[array.length - 2]) { //if the product of the second and third highest is lower than the product of the lowest and second lowest (implies negatives with greater abs values)
    [array[1], array[2]] = [array[array.length - 1], array[array.length - 2]] //reassign second and third numbers
  }

  array = array.slice(0, 3) //take top 3 in array

  return array.reduce((prod, curr) => { //reduce
    return prod * curr
  })
}

console.log(highestProduct([-12, -3, 1, 2, 3, 3, 3])) //108
console.log(highestProduct([-12, -3, 4])) //144