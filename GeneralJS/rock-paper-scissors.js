/**
 * returns every sequence of throws a single player could throw over an n-round game of rock-paper-scissors
 * rockPaperScissors(1); -> [['rock'],['paper'],['scissors']]
 * rockPaperScissors(2); -> 
 * [['rock','rock'],['rock','paper'],['rock','scissors'],
 * ['paper','paper'],['paper','scissors'],['paper','rock'],
 * ['scissors','scissors'],['scissors','paper'],['scissors','rock']]
 * 
 * [r, r, r] [r, r, p] [r, r, s]
 * [r, p, r] [r, p, p] [r, p, s]
 * [r, s, r] [r, s, p] [r, s, s] 
 * 
 * 
 * [r, r, r, r] [r, r, r, p] [r, r, r, s]
 * [r, r, p, r] [r, r, p, p] [r, r, p, s]
 * [r, r, s, r] [r, r, s, p] [r, r, s, s]
 * []
 */

function rockPaperScissors(num, appending) {
  const throws = [['rock'], ['paper'], ['scissors']]
  appending = appending || throws;
  if (num === 0) return [];
  if (num === 1) return appending;
  else {
    let temp = [];
    appending.forEach(function (a) {
      throws.forEach(function (t) {
        temp.push(a.concat(t))
      })
    })
    appending = temp;
    return rockPaperScissors(num - 1, appending);
  }
}
// console.log(rockPaperScissors(1))
// console.log(rockPaperScissors(2))
// console.log(rockPaperScissors(3))
// console.log(rockPaperScissors(3).length)
// console.log(rockPaperScissors(4).length)