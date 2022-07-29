/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 */

function binToDec(binary: string): number {
  let digits = binary.split("").reverse() //reverse binary digits
  //convert to dec (0101 = 0*(2**3) + 1*(2**2) + 0*(2**1) + 1*(2**0)) 
  return digits.reduce((dec, curr, i) => { //dec = accumulator which starts at 0, curr = curr element, i = index
    return dec += parseInt(curr) * (2 ** i)
  }, 0)
}

module.exports = binToDec;