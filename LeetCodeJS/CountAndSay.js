/**
 * @param {number} n
 * @return {string}
 */
// https://leetcode.com/problems/count-and-say/
/**
 * The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

  countAndSay(1) = "1"
  countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
  To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character.
  Then for each group, say the number of characters, then say the character.
  To convert the saying into a digit string, replace the counts with a number and concatenate every saying.
 */

// Best Results of 3 tests: 
// Best speed: 100% 40ms
// Best memory 92.4% 34.9MB

var cache = {1: "1"}; //memoize for optimization
var countAndSay = function(n) {
  if (n <= 0) return ""; //no results below n = 1
  if (cache.hasOwnProperty(n)) {return cache[n]} //if n is already in cache, simply return it

  function add2cache(n) { //function def of adding elements to cache
    for (let i = 2; i <= n; i++) { //since cache already has 1, we can start at 2
      if (cache[i] === undefined) { //if the cache doesn't exist
        let groups = cache[i-1].match(/(\d)\1*/g) //groups of like digits
        let saidStr = "";
        groups.forEach((group) => {
          saidStr += `${group.length + group[0]}` //add to the newly said string the # of digit + digit
        })
        cache[i] = saidStr; //set cache
      }
      else continue; //if the cache exists, move on (must move forward since each subsequent element is dependent on the previous)
    }
  }

  add2cache(n) //invoke adding to cache
  return cache[n]
};

module.exports = countAndSay;

/**
 * Example 1:

  Input: n = 1
  Output: "1"
  Explanation: This is the base case.


  Example 2:

  Input: n = 4
  Output: "1211"
  Explanation:
  countAndSay(1) = "1"
  countAndSay(2) = say "1" = one 1 = "11"
  countAndSay(3) = say "11" = two 1's = "21"
  countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
 */