/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (!Array.isArray(array)) return 0;
    if (array.length < 3) return 0
    if (array.length > 3) {array = array.sort((a,b) => {return b-a})}

    if (array[1]*array[2] < array[array.length-1]*array[array.length-2]) {
        array[1] = array[array.length-1];
        array[2] = array[array.length-2];
    }

    array = array.slice(0, 3)

    return array.reduce((prod, curr) => {
        return prod*curr
    })
}

// console.log(highestProduct([-12, -3, 1,2,3,3,3]))

module.exports = highestProduct;
