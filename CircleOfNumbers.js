// Arcade > Intro > 30
// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.
// Ex n = 10 and firstNumber = 2 => 7


// Exactly around the circle moves n/2 numbers over, %n accounts for cycle
function circleOfNumbers(n, f) {
    return (f+(Math.floor(n/2)))%n
   }