/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

// THIS SOLUTION CHECKS NUMBER BALANCES BUT DOESN'T ACCOUNT FOR DIFF BRACKETS COMING IN
// function balancedParens(input){
//     let pcount = 0;
//     let bcount = 0;
//     let ccount = 0;
//     for (let i=0; i<input.length; i++) {
//         if (input[i] === "(") pcount+=1
//         if (input[i] === ")") pcount-=1
//         if (input[i] === "[") bcount+=1
//         if (input[i] === "]") bcount-=1
//         if (input[i] === "{") ccount+=1
//         if (input[i] === "}") ccount-=1
//         if (pcount<0 || bcount<0 || ccount<0) return false
//     }
//     if (pcount !== 0 || bcount !== 0 || ccount !== 0) return false
//     return true
// }

function balancedParens(input) {
  let opensArr = []; //create a stack to keep track of all opens
  let matches = { //dictionary of matches
    "(": ")",
    "[": "]",
    "{": "}"
  }
  for (let i = 0; i < input.length; i++) { //iterate through 
    if (/\(|\{|\[/g.test(input[i])) { //if input[i] = ( or [ or { 
      opensArr.push(input[i]) //push it into queue
    }
    else if (/\)|\}|\]/g.test(input[i])) { //if input[i] = ) or ] or }
      if (opensArr.length === 0) return false //if no opens in stack, "}" => false
      if (input[i] !== matches[opensArr.pop()]) return false; //if input[i] doesn't match last open in stack, "(]" => false
    }
  }
  if (opensArr.length) return false; //if finished with input and stack isn't empty ( => false
  return true;

}

// console.log(balancedParens('()')) //true
// console.log(balancedParens('(')) //false
// console.log(balancedParens(')')) //false
// console.log(balancedParens('}[]')) //false
// console.log(balancedParens(')kasdjflkdas')) //false
// console.log(balancedParens('[')) //false
// console.log(balancedParens('((())[]{})')) //true
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')) //false
// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')) //true
// console.log(balancedParens('[](){}')); //true
// console.log(balancedParens('[({})]')); //true
// console.log(balancedParens('[(]{)}')); //false
// console.log(balancedParens('hey'))