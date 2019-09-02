/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * => 8
 * 
 * Example n === 2
 * 1 + 1
 * 2
 * => 2
 * 
 * Example n === 3
 * 1 + 1 + 1
 * 1 + 2
 * 2 + 1
 * => 3
 * 
 * Example n === 4
 * 1 + 1 + 1 + 1
 * 1 + 1 + 2
 * 1 + 2 + 1
 * 2 + 1 + 1
 * 2 + 2
 * => 5
 */

function factorial(n, result = 1) {
  if (n <= 1) return result
  result *= n
  return factorial(n - 1, result)
}

function countStairs1(n) {
  let ways = 0;

  function takeSteps(n) {
    if (n === 0) return ways++;
    if (n < 0) return;

    takeSteps(n - 1);
    takeSteps(n - 2);
  }

  takeSteps(n);

  return ways;
}

// Brute force
function countStairs2(n) {
  if (n === 0) return 1;
  if (n < 0) return 0;
  return countStairs2(n - 1) + countStairs2(n - 2);
}

// Memoized
function countStairs3(n) {
  const cache = {
    0: 1,
    1: 1,
  };

  function counter(n) {
    if (n === 0) return 1
    if (n < 0) return 0;

    let n1 = cache[n - 1];
    if (!n1) cache[n - 1] = n1 = counter(n - 1);

    let n2 = cache[n - 2];
    if (!n2) cache[n - 2] = n2 = counter(n - 2);

    return n1 + n2;
  }

  return counter(n)
}