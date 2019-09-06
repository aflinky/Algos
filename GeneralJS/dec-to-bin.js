/* You are given a string that represents a decimal number
 *
 * Write a function that converts the decimal number to a binary string
 *
 * Example:
* 	decToBin(0)   -> '0000'
* 	decToBin(1)   -> '0001'
* 	decToBin(5)   -> '0101'
 * 	decToBin(11)  -> '1011'
 * 	decToBin(100) -> '01100100'
 *
 */

function decToBin(dec) {
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

console.log(decToBin(0))  
console.log(decToBin(1))  
console.log(decToBin(5))  
console.log(decToBin(11)) 
console.log(decToBin(100))