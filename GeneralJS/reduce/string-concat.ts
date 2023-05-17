/**
 * Use reduce to take an array of characters and return a single string of all letters
 * You may assume the array will have at least one element
 */
function stringConcat(arr: string[]): string {
    const constructedString = arr.reduce((word, curr) => word + curr, '');
    return constructedString;
}

module.exports = stringConcat;