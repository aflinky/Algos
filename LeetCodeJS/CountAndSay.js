/**
 * @param {number} n
 * @return {string}
 */
//https://leetcode.com/problems/count-and-say/submissions/
// Best Results of 3 tests: 
// Best speed: 100% 40ms
// Best memory 92.4% 34.9MB
// Thanks to Will for regex inspo!

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

// console.log(countAndSay(2))
// console.log(countAndSay(5))
// console.log(countAndSay(10))