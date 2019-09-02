/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

// EUCLID
// function gcd(a, b) {
//     const smaller = Math.min(a,b);
//     const diff = Math.abs(a-b)
//     if (diff === smaller) return diff
//     return gcd(diff, smaller)
// }

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a%b)
}

// console.log(gcd(10, 8))
// console.log(gcd(147, 105))
// console.log(gcd(10, 9))

module.exports = gcd;