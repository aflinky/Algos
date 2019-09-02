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
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  binary = binary.split("").reverse() //reverse binary digits
  //convert to dec (0101 = 0*(2**3) + 1*(2**2) + 0*(2**1) + 1*(2**0)) 
  binary = binary.reduce((dec, curr, i) => { //dec = accumulator which starts at 0, curr = curr element, i = index
    return dec += curr * (2 ** i)
  }, 0)
  return binary
}

// console.log(binToDec('0'))  
// console.log(binToDec('11')) 
// console.log(binToDec('100'))
// console.log(binToDec('101'))
// console.log(binToDec('0101'))