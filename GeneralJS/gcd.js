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
//   const smaller = Math.min(a, b);
//   const diff = Math.abs(a - b)
//   if (diff === smaller) return diff
//   return gcd(diff, smaller)
// }
// Ex gcd(10, 8)
// smaller = b = 8
// diff = 2
// 2 !== 8
// => gcd(2, 8)
//    smaller = a = 2
//    diff = 6
//    6 !== 2
//    => gcd(6, 2)
//      smaller = 2
//      diff = 4
//      => gcd(4, 2)
//         smaller = 2
//         diff = 2
//         smaller === diff
//         return diff => return 2 

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b)
}
// Ex gcd(10, 8)
// a = 10, b = 8
// => gcd(8, 10 % 8) = gcd(8, 2)
//    a = 8, b = 2
//    => gcd(2, 8 % 2) = gcd(2, 0)
//        a = 2, b = 0
//        b === 0
//        return a = 2

// Ex gcd(8, 10)
// a = 8, b = 10
// => gcd(10, 8 % 10) = gcd(10, 8)
// ^^^ rearranges the smallest and largest

// console.log(gcd(10, 8))
// console.log(gcd(147, 105))
// console.log(gcd(10, 9))