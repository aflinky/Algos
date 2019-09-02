// Arcade > Intro > 18
// Given a string, find out if its characters can be rearranged to form a palindrome
// Ex input = "aabb" => true
// Ex input = "abaa" => false

function palindromeRearranging(s) {
    s=s.split("") //create array of string chars
    let a = [...new Set(s)] //create set of chars
    let b = a.map(x => [x, (s.filter(y => y === x).length)%2]) //map chars to their count (0=even, 1=odd)
    let q=0
    for (let i=0; i<b.length; i++) { //iterate through map
        if (b[i][1]===1) q++ //if a char appears an odd number of times, q++
        if (q>1) return false
    }
    return true 
}