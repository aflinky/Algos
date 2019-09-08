// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"
/** 
 * 8 - - - - - - - -
 * 7 - - - - - - - -
 * 6 - - - - - - - -
 * 5 - K - - - - - -
 * 4 - - - - - - - -
 * 3 - - - - - - - -
 * 2 - - - - - - - -
 * 1 - - - - - - - -
 * x 1 2 3 4 5 6 7 8
 * 
 * MOVES
 * 8 - - - - - - - -
 * 7 - - - - - - - -
 * 6 - - 0 - 1 - - -
 * 5 - 2 - - - 3 - -
 * 4 - - - X - - - -
 * 3 - 4 - - - 5 - -
 * 2 - - 6 - 7 - - -
 * 1 - - - - - - - -
 * x 1 2 3 4 5 6 7 8
*/

function knightjumps(str) {
  const knight = [parseInt(str[1]), parseInt(str[3])] //get number values for knight's position
  //create a nested array of possible moves ([x, y])
  const moves = [
    [-1, 2], [1, 2],
    [-2, 1], [2, 1],
    [-2, -1], [2, -1],
    [-1, -2], [1, -2]
  ]
  //reduce moves, checking if they are valid given the knight's position
  const result = (moves.reduce((totalMoves, currMove) => {
    if (knight[0]+currMove[0] > 0 && knight[0]+currMove[0] <= 8 && knight[1]+currMove[1] > 0 && knight[1]+currMove[1] <= 8) ++totalMoves
    return totalMoves
  }, 0))
  //return the number of possible moves
  return result
}

// console.log(knightjumps('(4 5)'))
// console.log(knightjumps('(2 5)'))
// console.log(knightjumps('(1 1)'))