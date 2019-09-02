/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

// linear recursion good for negative powers
function negPow(base, power) {
    if (power === 0) return 1 ; 
    if (power === 1) return base ;
    else {
        return base * pow(base, power-1)
    }
}

// iterative recursion (tail call recursion) good for 0 and positive powers
function pow(base, power, curr) {
    curr = curr || base ;
    if (power < 0) {
        return 1/negPow(base, power*-1) ;
    }
    if (power === 0) return 1 ;
    if (power === 1) return curr ;
    else {
        return pow(base, power-1, curr*base)
    }
}

module.exports = pow;

// console.log(pow(2,-4))
// console.log(1/16)