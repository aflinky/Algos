/**
 * Balanced Parentheses
 *
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 */

function balancedParens(input): boolean {
  let balanced = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == "(") {
      balanced += 1;
    }
    if (input[i] == ")") {
      if (balanced == 0) return false;
      balanced -= 1;
    }
  }

  return balanced == 0;
}

/*
())(
 balanced = 0 

( = +1
 balanced = 1
) = -1
 balanced = 0
) = QUIT 
( = skipped
*/

module.exports = balancedParens;
