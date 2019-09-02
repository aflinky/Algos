/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  let memo = { 1: [1]};
  function memoTriangle(n) {
    if (n <= 0) return
    if (memo[n]) return memo[n];
    else {
      const newRow = new Array(n)
      const prevRow = memoTriangle(n-1)
      for (let i=0; i<Math.ceil(n/2); i++) {
        if (i===0) newRow[i] = newRow[n-1-i] = 1
        else newRow[i] = newRow[n-1-i] = prevRow[i-1]+prevRow[i]
      }
      memo[n] = newRow
    }
    return memo[n]
  }
  const result = []
  for (let i=1; i<=numRows; i++) {
    result.push(memoTriangle(i))
  }
  return result
}
// console.log(pascalTriangle(1))
// console.log(pascalTriangle(2))
// console.log(pascalTriangle(3))
// console.log(pascalTriangle(4))
// console.log(pascalTriangle(5))


module.exports = pascalTriangle;
