/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

// *****************************
// Brute Force
//
// Time Complexity: O(2^n) - Exponential 
// Space Complexity: O(n) - Linear (depth of tree)
// *****************************

const solveKnapsack = (items, weightAvailable, index = 0, accValue = 0) => {
  // Base case, if we have run out of items or space, return accumulated value
  if (!items[index] || !weightAvailable) return accValue;

  // Grab weight and value of current item
  const { weight, value } = items[index];

  // If the weight of the current item is greater than the weight available, move onto the next item
  if (weightAvailable < weight) return solveKnapsack(items, weightAvailable, index + 1, accValue);

  // Finally, return the max of 
  return Math.max(
    // The path where we take the item
    solveKnapsack(items, weightAvailable - weight, index + 1, accValue + value), 
    // The path where we leave the item
    solveKnapsack(items, weightAvailable, index + 1, accValue)
  );
};

/**
 * Walkthrough with example
 * items: [
 *    { weight: 1, value: 3 },
 *    { weight: 2, value: 4 },
 *    { weight: 3, value: 5 }
 * ]
 * weightAvailable: 3
 * answer: 7
 * 
 * A) solveKnapsack(items, 3, 0, 0) (max = 7)
 *    items[0] exists, weightAvail 3 > 0 => continue
 *    weight: 1, value: 3
 *    weightAvail 3 < weight 3 = false => continue
 *    >> return max between (B=7 vs C=5)
 *    B = TAKE items[0]
 *    B) solveKnapsack(items, 3-1, 0+1, 0+3) (max B = 7)
 *        => solveKnapsack(items, 2, 1, 3)
 *           items[1] exists, weightAvail 2 > 0 => continue
 *           weight: 2, value: 4
 *           weightAvail 2 < weight 2 = false => continue
 *           >> return max between (B i=7 vs B ii=3)
 * 
 *           B i = TAKE items[1]
 *           B i) solveKnapsack(items, 2-2, 1+1, 3+4) (=== 7)
 *              => solveKnapsack(items, 0, 2, 7)
 *                 items[1] exists, but weightAvail === 0 =>
 *                 CANNOT TAKE items[2] with items[0, 1]
 *                 >> return accValue 7 (end of path, items taken [0,1])
 *           B ii = LEAVE items[1]
 *           B ii) solveKnapsack(items, 2, 1+1, 3) (=== 3)
 *              => solveKnapsack(items, 2, 2, 3)
 *                 items[2] exists, weightAvail 2 > 0 => continue
 *                 weight: 3, value: 5
 *                 weightAvail 2 < weight 3 = true (adding this item will exceed weight limit so we leave it)
 *                 CANNOT TAKE items[2] with items[0]
 *                 >> return solveKnapsack(items, 2, 2+1, 3)
 *                    => solveKnapsack(items, 2, 3, 3)
 *                       items[3] DOES NOT EXIST
 *                       >> return accValue 3 (end of path, items taken [0])
 * 
 *    C = LEAVE items[0]
 *    C) solveKnapsack(items, 3, 0+1, 0) (max C = 5)
 *        => solveKnapsack(items, 3, 1, 0) (basically starting problem as if the first item didn't exist)
 *           items[1] exists, weightAvail 3 > 0 => continue
 *           weight: 2, value: 4
 *           weightAvail 3 < weight 2 = false => continue
 *           >> return max between (C i=4 vs C ii=5)
 * 
 *           C i = TAKE items[1]
 *           C i) solveKnapsack(items, 3-2, 1+1, 0+4) (=== 4)
 *              => solveKnapsack(items, 1, 2, 4)
 *                 items[2] exists, weightAvail 1 > 0 => continue
 *                 weight: 3, value: 5
 *                 weightAvail 1 < weight 3 = true (adding this item will exceed weight limit so we leave it)
 *                 CANNOT TAKE items[2]
 *                 >> return solveKnapsack(items, 1, 2+1, 4) (=== 4)
 *                    => solveKnapsack(items, 1, 3, 4)
 *                       items[3] DOES NOT EXIST
 *                       >> return accValue 4 (end of path, items taken [1])
 *           C ii = LEAVE items[1]
 *           C ii) solveKnapsack(items, 3, 1+1, 0) (=== 5)
 *              => solveKnapsack(items, 3, 2, 0) (basically starting problem as if the first two items didn't exist)
 *                 items[2] exists, weightAvail 3 > 0 => continue
 *                 weight: 3, value: 5
 *                 weightAvail 3 < weight 3 = false => continue
 *                 >> return max between (C ii a=5 vs C ii b=0)
 * 
 *                 C ii a = TAKE items[2]
 *                 C ii a) solveKnapsack(items, 3-3, 2+1, 0+5) (=== 5)
 *                    => solveKnapsack(items, 1, 3, 5)
 *                       items[3] DOES NOT EXIST
 *                       >> return accValue 5 (end of path, items taken [2])
 *                 C ii b = LEAVE items[2]
 *                 C ii b) solveKnapsack(items, 3, 2+1, 0) (=== 0)
 *                    => solveKnapsack(items, 3, 3, 0)
 *                       items[3] DOES NOT EXIST
 *                       >> return accValue 0 (end of path, items taken [NONE])
 */


// *****************************
// Dynamic Programming (Bottom Up)
//
// Time Complexity: O(n * w) where n is length of 'items' array and w is the weightAvailable
// Space Complexity: O(n * w)
// *****************************

const solveKnapsack = (items, weightAvailable) => {
  // Idea is to create an n x w matrix, where n is length of items array and w is weightAvailable
  // Call this matrix M. M[i][j] represents the max value with i items and j weightAvailable.
  // M[i][j] = max(M[i - 1][j], V[i] + M[i - 1][j - W[i]])
  const table = [];
  const n = items.length;

  // Build n x w matrix
  // Populate first row and column with zeros
  // If we have zero items, we can't pick up any items
  // If the amount of weight available in our bag is zero, then we can't pick up any items (assuming there are no valuable weightless items)
  for (let i = 0; i <= n; i += 1) {
    table.push(new Array(weightAvailable + 1).fill(0));
  }

  // Build table bottoms-up using the following formula: M[i][j] = max(M[i - 1][j], V[i] + M[i - 1][j - W[i]])
  // Idea is you have two choices as you increase the number of items: Take it / Leave it
  // M[i][j] (max value given choice of first i items, at weight j)
  // If you take it, then we add the value of the item to the max value of having i-1 options with weight capacity j - W[i]
  // If you leave it, then the max value is the max value of having i-1 options with the same weight capacity
  // value (of curr item) + M[i-1][j-weight] (max value from before when there is still room) = if you do take the item
  // M[i-1][j] (i-1 items, at weight j) = if you don't take the item
  for (let i = 1; i <= n; i += 1) {
    const { weight, value } = items[i - 1];
    for (let j = 1; j <= weightAvailable; j += 1) {
      if (weight > j) table[i][j] = table[i - 1][j];
      else table[i][j] = Math.max(table[i - 1][j], value + table[i - 1][j - weight]);
    }
  }
  // Return the last element of the matrix
  return table[n][weightAvailable];
};

module.exports = solveKnapsack;