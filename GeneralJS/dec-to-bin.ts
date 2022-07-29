/* You are given a string that represents a decimal number
 *
 * Write a function that converts the decimal number to a binary string
 * Binary digits should be in multiples of 4
 *
 * Example:
 * 	decToBin(0)   -> '0000'
 * 	decToBin(1)   -> '0001'
 * 	decToBin(5)   -> '0101'
 * 	decToBin(11)  -> '1011'
 * 	decToBin(100) -> '01100100'
 * 	decToBin(100) -> '01100100'
 * 	decToBin(1000) -> '001111101000'
 *
 */

function decToBin(dec: number): string {
  if (dec === 0) return "0000";
  let bin = ""
  while (dec > 0) {
    bin = dec%2 + bin;
    dec = Math.floor(dec/2)
  }
  while (bin.length%4 !== 0) {
    bin = "0"+bin;
  }
  return bin;
}

module.exports = decToBin;