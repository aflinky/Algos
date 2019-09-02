'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
    for (let i=0; i<Math.floor(array.length/2); i++) {
        let swap = array[i];
        array[i] = array[array.length-1-i];
        array[array.length-1-i] = swap;
    }
    return array;
}

module.exports = reverseInPlace;

// let stingray = ['a','b','c','d','e']
// console.log(reverseInPlace(stingray));