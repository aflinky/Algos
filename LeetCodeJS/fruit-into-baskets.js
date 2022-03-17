/**
 * Fruit Into Baskets
 * https://leetcode.com/problems/fruit-into-baskets/
 * @param {number[]} tree
 * @return {number}
 * Runtime: 316 ms, faster than 19.65% of JavaScript online submissions for Fruit Into Baskets.
 * Memory Usage: 51.3 MB, less than 100.00% of JavaScript online submissions for Fruit Into Baskets.
 * 
 * You are visiting a farm that has a single row of fruit trees arranged from left to right.
 * The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.
 * 
 * You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:
 *  You only have two baskets, and each basket can only hold a single type of fruit
 *  There is no limit on the amount of fruit each basket can hold.
 * 
 * Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right.
 * The picked fruits must fit in one of your baskets.
 * Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
 * Given the integer array fruits, return the maximum number of fruits you can pick.
 * 
 * Example 1:
 * Input: fruits = [1,2,1]
 * Output: 3
 * Explanation: We can pick from all 3 trees.
 * 
 * Example 2:
 * Input: fruits = [0,1,2,2]
 * Output: 3
 * Explanation: We can pick from trees [1,2,2].
 * If we had started at the first tree, we would only pick from trees [0,1].
 * 
 * Example 3:
 * Input: fruits = [1,2,3,2,2]
 * Output: 4
 * Explanation: We can pick from trees [2,3,2,2].
 * If we had started at the first tree, we would only pick from trees [1,2].
 * 
 * Constraints:
 * 1 <= fruits.length <= 105
 * 0 <= fruits[i] < fruits.length
*/

function totalFruit(trees) {
  // variables for baskets
  // while we iterate through trees, basket1 should always contain type of trees[i]
  // init basket 1 with trees[0] type
  const basket1 = {
    type: trees[0],
    count: 1,
  };
  const basket2 = {
    type: undefined,
    count: 0,
  };

  // variable to keep track of consecutive type1 fruits
  // init to 1 because we are starting with first fruit
  let type1Streak = 1;
  
  // variable to keep track of max
  let maxFruits = 0;

  // variable to keep track of a current max
  // init to 1 because we are starting with first fruit
  let currMax = 1;

  for (let i = 1; i < trees.length; i++) {
    // If the fruit is of the same type as last fruit we looked at
    if (trees[i] === basket1.type) {
      // increment all appropriate values
      basket1.count++;
      type1Streak++;
      currMax++;
    }
    // Else if no second fruit yet
    else if (basket2.type == undefined) {
      // basket1 becomes basket2
      basket2.type = basket1.type;
      basket2.count = basket1.count;

      // current type takes over basket1
      basket1.type = trees[i];
      basket1.count = 1;
      type1Streak = 1;

      // increment current max
      currMax++;
    }
    // Else if second type of fruit
    else if (trees[i] === basket2.type) {
      // temp basket for swap
      let swap = {
        type: basket2.type,
        count: ++basket2.count, // update count
      };

      // basket2 becomes basket1
      basket2.type = basket1.type;
      basket2.count = basket1.count;

      // basket1 becomes basket2
      basket1.type = swap.type;
      basket1.count = swap.count;
      type1Streak = 1;

      // increment appropriate values
      currMax++;
    }
    // Else if third type of fruit
    else {
      // Calculate new max
      maxFruits = Math.max(currMax, maxFruits);

      // Use type1Streak to create new curr
      currMax = type1Streak + 1;

      // Abandon second to last fruit type
      // basket1 becomes basket2
      basket2.type = basket1.type;
      basket2.count = basket1.count;

      // current type takes over basket1
      basket1.type = trees[i];
      basket1.count = 1;
      type1Streak = 1;
    }
  }

  return Math.max(currMax, maxFruits);
}

module.exports = totalFruit;