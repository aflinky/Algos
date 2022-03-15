/**
 * Print out all the 8 digit palindromes
 * Limitation, cannot use string manipulation
 * 
 * ex
 * 12344321 valid
 * 10000001 valid
 * 00000000 invalid -- no leading/trailing zeros
 * 00122100 invalid -- no leading/trailing zeros
 */

// Smallest = 10000001 = 1000 and 0001
// Second = 10011001 = 1001 and 1001
// Third = 10022001 = 1002 and 2001
// Fourth = 10033001 = 1003 and 3001
// Random = 12344321 = 1234 and 4321
// Largest = 99999999 = 9999 and 9999

function eightDigitPalindromes() {
  
}

// ***Assuming n = even and n >= 2
function evenDigitPalindromes(n) {
  
}

// TODO n where n = odd
// TODO n where n >= 1

module.exports = { eightDigitPalindromes, evenDigitPalindromes };