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
  const result = [];
  for (let i = 1001; i < 10000; i++) {
    // Grab the left side and multiple to fill the 0000 places
    let num = i * 10000;
    // Get the thousandth and convert to single
    num += Math.floor(i / 1000);
    // Get the hundredth and convert to tenth
    num += Math.floor((i % 1000) / 100) * 10;
    // Get the tenth and convert to hundredth
    num += Math.floor((i % 100) / 10) * 100;
    // Get the single and convert to thousandth
    // num += Math.floor((i % 10) / 1) * 1000;
    num += (i % 10) * 1000;
    result.push(num);
  }
  console.log(result.join('\n'));
  return result;
}

// ***Assuming n = even and n >= 2
function evenDigitPalindromes(n) {
  const half = n / 2;
  let lowerBoundary = 1;
  for (let i = 1; i < half; i++) {
    lowerBoundary *= 10;
  }
  let upperBoundary = (lowerBoundary * 10) - 1;
  
  // Get the unit of the numbers we want to calculate (ex for 2 digits we want 10, for 4 digits we want 1000)
  let unit = 1;
  for (let i = 1; i <= half; i++) {
    unit *= 10;
  }

  const result = [];

  for (let i = lowerBoundary; i <= upperBoundary; i++) {
    // Grab the left side and multiple to fill the 0000 places
    let num = i * unit;
    
    // While loop for the rest of the digits
    // Keep a number for the place of the digit at hand
    let digit = unit;
    // Keep a number for the place of the opposite digit in the palindrome
    let opposite = 1;
    let places = n;
    while (places > half) {
      num += Math.floor((i % digit) / (digit / 10)) * opposite;
      digit /= 10;
      opposite *= 10;
      places--;
    }
    
    result.push(num);
  }
  console.log(result.join('\n'));
  return result;
}

// TODO n where n = odd
// TODO n where n >= 1

module.exports = { eightDigitPalindromes, evenDigitPalindromes };