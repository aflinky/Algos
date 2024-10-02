/**
 * Use reduce to take an array of numbers and return
 * if all the numbers are divisible by 2
 * You may assume the array will have at least one element
 */
function allTrue(arr: number[]): boolean {
    const allDivisible = arr.reduce((isTrue, currentNumber) => {
        const isDivisible = currentNumber % 2 == 0;
        return isDivisible && isTrue
    }, true);
    return allDivisible;
}

/**
 * Use reduce to take an array of numbers and return
 * if any (at least one) of the numbers are divisible by 2
 * You may assume the array will have at least one element
 */
function someTrue(arr: number[]): boolean {
    const someDivisible = arr.reduce((isTrue, currentNumber) => {
        const isDivisible = currentNumber % 2 == 0;
        return isDivisible || isTrue
    }, false);
    return someDivisible;
}

module.exports = { allTrue, someTrue };