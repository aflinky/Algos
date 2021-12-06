// Factorial function
// 1! = 1 = 1
// !5 = 5 * 4 * 3 * 2 * 1 = 120
// 0! = 1 = 1
// "the factorial of a number is a shorthand way to write a multiplication expression wherein the number is multiplied by each number less than it but greater than zero"
// https://www.thoughtco.com/why-does-zero-factorial-equal-one-3126598

const memo = {};

function factorial(num: number) {
  if (num <= 1) return 1;

  // Proof the memo cache is being used
  // console.log(`looking for ${num} in memo`)

  if (!memo[num]) {
    memo[num] = num * factorial(num - 1);
  }

  return memo[num];
};

module.exports = factorial;