/**
 * Use reduce to take an array of numbers and return their collective sum
 * You may assume the array will have at least one element
 */
function sum(arr: number[]): number {
    const sum = arr.reduce((acc, curr) => acc + curr);
    return sum;
}

module.exports = sum;