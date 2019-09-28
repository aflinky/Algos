/**
 * https://leetcode.com/problems/coin-change-2/
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 * Runtime: 76 ms, faster than 54.75% of JavaScript online submissions for Coin Change 2.
 * Memory Usage: 63.6 MB, less than 100.00% of JavaScript online submissions for Coin Change 2.
 */

var change = function (amount, coins) {
  if (amount === 0) return 1;
  const table = [];
  for (let i = 0; i <= coins.length; i++) {
    table.push(new Array(amount + 1).fill(0))
  }
  for (let i = 1; i <= coins.length; i++) {
    for (let j = 1; j <= amount; j++) {
      // if j < curr coin value, take # combos from row above
      if (j < coins[i - 1]) table[i][j] = table[i - 1][j]
      // if curr coin value === j, take # combos from row above + 1
      else if (j === coins[i - 1]) table[i][j] = table[i - 1][j] + 1
      // else
      else table[i][j] = table[i-1][j] + table[i][j-coins[i-1]]
    }
  }
  return table[coins.length][amount];
};

console.log(change(5, [1, 2, 5])) //4
console.log(change(10, [1, 2, 5])) //10
console.log(change(500, [1, 2, 5])) //12701
console.log(change(3, [2])) //0
console.log(change(10, [10])) //1
console.log(change(10, [5])) //1
console.log(change(10, [])) //0
console.log(change(0, [10])) //1
console.log(change(100, [99,1])) //2