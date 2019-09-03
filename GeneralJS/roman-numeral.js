/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
  const numerals = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]
  const ns = [1000, 500, 100, 50, 10, 5, 1]
  let rom = "";
  if (n > 1000) { //if n> 1000, count the thousands, subtract and continue
    let thousands = Math.floor(n / 1000);
    rom += ("M".repeat(thousands))
    n = n - 1000 * thousands;
  }
  if (n === 0) return rom; //if n === 0, return rom (not empty because it may have been thousands)
  for (var i = 0; i < numerals.length; i++) { //iterate through the numerals, starting with the largest
    if (n >= numerals[i][0]) { //if n is one of the simple numerals, just add that and return
      rom += numerals[i][1]
      n -= numerals[i][0]
      i -= 1
    }
  }
  return rom
}


console.log(romanNumeral(1))
console.log(romanNumeral(2))
console.log(romanNumeral(3))
console.log(romanNumeral(4))
console.log(romanNumeral(5))
console.log(romanNumeral(6))
console.log(romanNumeral(7))
console.log(romanNumeral(8))
console.log(romanNumeral(9))
console.log(romanNumeral(10))
console.log(romanNumeral(14))
console.log(romanNumeral(16))
console.log(romanNumeral(20))
console.log(romanNumeral(27))
console.log(romanNumeral(34))
console.log(romanNumeral(40))
console.log(romanNumeral(44))
console.log(romanNumeral(50))
console.log(romanNumeral(54))
console.log(romanNumeral(90))
console.log(romanNumeral(91))
console.log(romanNumeral(100))
console.log(romanNumeral(149))
console.log(romanNumeral(200))
console.log(romanNumeral(400))
console.log(romanNumeral(492))
console.log(romanNumeral(500))
console.log(romanNumeral(900))
console.log(romanNumeral(960))
console.log(romanNumeral(999))
console.log(romanNumeral(1000))
console.log(romanNumeral(1290))
console.log(romanNumeral(2000))
console.log(romanNumeral(4000))
console.log(romanNumeral(4400))
console.log(romanNumeral(4590))
console.log(romanNumeral(4492))
console.log(romanNumeral(4500))
console.log(romanNumeral(4600))