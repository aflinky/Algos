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
    let binString = ''

    if(dec == 0) return '0000'

    // build binary from decimal
    while(dec >= 1){
        binString = ((dec % 2).toString()) + binString;
        dec = Math.floor((dec / 2));
    }
    
    // set binary length as a multiple of 4
    if(binString.length % 4 != 0){
        let appendZeros = 4 - (binString.length % 4)
        for(let i = appendZeros; i > 0; i--){
            binString = '0' + binString
        }
    }

    return binString
}

module.exports = decToBin;