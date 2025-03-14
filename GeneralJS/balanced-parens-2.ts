/**
 * Balanced Parentheses
 * 
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 * make your solution work for all types of brackets
 *
 *  Example:
 *  balancedParens2('[](){}'); // true
 *  balancedParens2('[({})]');   // true
 *  balancedParens2('[(]{)}'); // false
 *
 * ignore non-bracket characters
 * balancedParens2(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens2(' var hubble = function() { telescopes.awesome();'); // false
 *
 */

function balancedParens2(input): boolean {
    const brackets: string[] = [];
    const bracketTypes = {
        "(": ")",
        "{": "}",
        "[": "]"
    };
    for (let i = 0; i < input.length; i++) {
        if(bracketTypes[input[i]]) {
            brackets.push(input[i]);
        } else if (Object.values(bracketTypes).includes(input[i])) {
            if (bracketTypes[brackets[brackets.length - 1]] === input[i]) {
                brackets.pop();
            } else {
                return false;
            }
        }
    }
    return brackets.length === 0;
}

module.exports = balancedParens2;
