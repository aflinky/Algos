/**
 * Fruit Into Baskets
 * https://leetcode.com/problems/fruit-into-baskets/
 * @param {number[]} tree
 * @return {number}
 * Runtime: 316 ms, faster than 19.65% of JavaScript online submissions for Fruit Into Baskets.
 * Memory Usage: 51.3 MB, less than 100.00% of JavaScript online submissions for Fruit Into Baskets.
*/

var totalFruit = function (tree) {
  const baskets = {};
  let maxFruits = 0;
  for (let i = 0; i < tree.length; i++) {
    //if fruit IS in basket
    if (baskets.hasOwnProperty(tree[i])) {
      baskets[tree[i]].push(i)
    }
    //if baskets length is 2 and fruit NOT in basket
    else if (Object.keys(baskets).length === 2 & !baskets.hasOwnProperty(tree[i])) {
      const entries = Object.entries(baskets);
      //make fruit tuples of [key, value]
      const fruitOne = [entries[0][0], entries[0][1]];
      const fruitTwo = [entries[1][0], entries[1][1]];

      //calculate # of fruits
      maxFruits = fruitOne[1].length + fruitTwo[1].length < maxFruits ? maxFruits : fruitOne[1].length + fruitTwo[1].length;

      //empty one fruit basket
      //find bad Fruit and Index (fruit to delete and the last index of it)
      const badFI = (fruitOne[1][fruitOne[1].length - 1] < fruitTwo[1][fruitTwo[1].length - 1]) ? [fruitOne[0], fruitOne[1][fruitOne[1].length - 1]] : [fruitTwo[0], fruitTwo[1][fruitTwo[1].length - 1]];

      //sift through good fruit and take out irrelevant fruit
      if (fruitOne[0] === badFI[0]) {
        while (fruitTwo[1].length && fruitTwo[1][0] <= badFI[1]) { fruitTwo[1].shift(); }
      }
      else {
        while (fruitOne[1].length && fruitOne[1][0] <= badFI[1]) { fruitOne[1].shift(); }
      }
      //delete bad Fruit from baskets  
      delete baskets[badFI[0]];
    }

    //if baskets length < 2 and fruit NOT in basket (will also automatically be called after else if)
    if (Object.keys(baskets).length < 2 & !baskets.hasOwnProperty(tree[i])) {
      baskets[tree[i]] = [i]
    }
  }
  //last check
  const currFruits = Object.values(baskets).reduce((acc, curr) => {
    return acc.concat(curr)
  }, []).length;
  return maxFruits > currFruits ? maxFruits : currFruits
};