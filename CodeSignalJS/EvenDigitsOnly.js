// Arcade > Intro > 26
// Check if all digits of the given integer are even.

// Ex n = 248622 => true
// n = 642386 => false

function evenDigitsOnly(n) {
    return String(n).split("").every(x=>x%2===0)
}