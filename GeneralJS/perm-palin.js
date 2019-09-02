/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    const counts = str.split("").reduce((dictionary, curr) => {
        if (!dictionary.hasOwnProperty(curr)) {dictionary[curr]=1}
        else {dictionary[curr]+=1}
        return dictionary
    }, {})
    const odd = Object.values(counts).filter(x => x%2!==0 ? x : undefined)
    return odd.length<=1;
}


// console.log(permPalin('abab'))
// console.log(permPalin('cbaba'))
// console.log(permPalin('a'))
// console.log(permPalin('cbac'))

module.exports = permPalin;
