/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
    if (typeof n==="number") {
        if (0<n && n<=100) {
            let stars = 1;
            let str = "" ;
            while (stars<=n) {
                str += (" ").repeat(n-stars) + ("*").repeat(stars) ;
                if (stars !== n) {str += '\n'}
                stars++ ; 
            } 
            console.log(str) ;
        }
    }
}

// drawStairs(6)

module.exports = drawStairs;
