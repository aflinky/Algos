/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

// function solveKnapsack(items, weightAvailable) {

// };

const items = [{ weight: 1, value: 3 }, { weight: 2, value: 4 }, { weight: 3, value: 5 }];

// Brute force
// n = length of items array
// Time Complexity: O(2^n) - Exponential 
// Space Complexity: O(n) - Linear (depth of tree)
// const solveKnapsack = (items, weightAvailable, index = 0, accValue = 0) => {
//   if (!items[index] || !weightAvailable) return accValue;
//   const { weight, value } = items[index];
//   if (weightAvailable < weight) return solveKnapsack(items, weightAvailable, index + 1, accValue);
//   return Math.max(
//     solveKnapsack(items, weightAvailable - weight, index + 1, accValue + value), 
//     solveKnapsack(items, weightAvailable, index + 1, accValue)
//   );
// };

// console.log(solveKnapsack(items, 3)); // returns 7 (from items[0] and items[1])
// console.log(solveKnapsack(items, 5)); // returns 9 (from items[1] and items[2])

// Dynamic Programming
// Time Complexity: O(n * w) where n is length of 'items' array and w is the weightAvailable
// Space Complexity: O(n * w)
// const solveKnapsackDP = (items, weightAvailable) => {
//   // Idea is to create an n x w matrix, where n is length of items array and w is weightAvailable
//   // Call this matrix M. M[i][j] represents the max value with i items and j weightAvailable.
//   // M[i][j] = max(M[i - 1][j], V[i] + M[i - 1][j - W[i]])
//   const maxValue = [];
//   const n = items.length;

//   // Build n x w matrix
//   // Populate first row and column with zeros
//   // If we have zero items, we can't pick up any items
//   // If the amount of weight available in our bag is zero, then we can't pick up any items (assuming there are no valuable weightless items)
//   for (let i = 0; i <= n; i += 1) {
//     const row = new Array(weightAvailable + 1).fill(0);
//     maxValue.push(row);
//   }

//   // Build table bottoms-up using the following formula: M[i][j] = max(M[i - 1][j], V[i] + M[i - 1][j - W[i]])
//   // Idea is you have two choices as you increase the number of items: Take it / Leave it
//   // If you take it, then we add the value of the item to the max value of having i-1 options with weight capacity j - W[i]
//   // If you leave it, then the max value is the max value of having i-1 options with the same weight capacity
//   for (let i = 1; i <= n; i += 1) {
//     for (let j = 1; j <= weightAvailable; j += 1) {
//       const { weight, value } = items[i - 1];
//       if (weight > j) maxValue[i][j] = maxValue[i - 1][j];
//       else maxValue[i][j] = Math.max(maxValue[i - 1][j], value + maxValue[i - 1][j - weight]);
//     }
//   }
//   // Return the last element of the matrix
//   return maxValue[n][weightAvailable];
// };


// Time Complexity: O(n * w) where n is length of 'items' array and w is the weightAvailable
// Space Complexity: O(n * w)
const solveKnapsackDP = (items, weightAvailable) => {
  // Dynamic Programming - Bottom Up
  // Build items.length x weightAvailable matrix filled with 0s
  const table = [];
  for (let i = 0; i <= items.length; i++) {
    table.push(new Array(weightAvailable + 1).fill(0))
  }
  for (let i = 1; i <= items.length; i++) { //from 1-items.length (ex 1,2,3)
    const { weight, value } = items[i - 1]; //deconstruct weight and value out of each item
    for (let j = 1; j <= weightAvailable; j++) { //from 1-weightAvailable (ex 1,2,3,4,5)
      //if the item doesn't fit, max value is the max value from before
      if (weight > j) table[i][j] = table[i - 1][j]

      //else
      //table[i][j] (max value given i items, at weight j)
      //table[i-1][j] (i-1 items, at weight j) = if you don't take the item
      //value (of curr item) + table[i-1][j-weight] (max value from before when there is still room) = if you do take the item
      else table[i][j] = Math.max(table[i - 1][j], value + table[i - 1][j - weight])
    }
  }
  //return the last element of the matrix
  return table[items.length][weightAvailable]
}


// console.log(solveKnapsackDP(items, 3)); //7
console.log(solveKnapsackDP(items, 5)); //9