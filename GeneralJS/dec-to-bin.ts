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
    let bin = [] // array to build bin 

    if(dec == 0) return '0000'

    // build binary from decimal
    while(dec >= 1){
        bin.push(dec % 2)
        dec = Math.floor((dec / 2));
    }
    
    // set binary length as a multiple of 4
    if(bin.length % 4 != 0){
        let appendZeros = 4 - (bin.length % 4)
        for(let i = 0; i < appendZeros; i++){
            bin.push(0)
        }
    }

    // reverse binary array and return as string
    let binString = ''
    bin.slice().reverse().forEach(el => binString += el)
    return binString
}

module.exports = decToBin;