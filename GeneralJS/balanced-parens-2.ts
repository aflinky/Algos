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

function balancedParens2(input) {
    /*
        ((())[]{}) = true
        var hubble = function() { telescopes.awesome();) = false
    */
   
    // breaking case : closed symbol is proceeded by a none matching open symbol

    // define regex
    const openRegex = /[\[\{\(]/g
    const closedRegex = /[\]\}\)]/g
    // keep up with pairs 
    let parenStack : string[] = []; 

    // iterate over parens
    for(let i = 0; i < input.length; i++) {
        // if open symbol, add to stack
        if(input[i].match(openRegex)){
            parenStack.push(input[i])
        } else if(input[i].match(closedRegex)) { // if closed symbol, evaluate for break
            if(parenStack.length == 0) return false; // not preceded by an open symbol, immediately no
            // not proceeded by a matching symbol
            if(input[i] == ')' && (parenStack[parenStack.length - 1] == '{' || parenStack[parenStack.length - 1] == '[')) return false
            if(input[i] == ']' && (parenStack[parenStack.length - 1] == '{' || parenStack[parenStack.length - 1] == '(')) return false
            if(input[i] == '}' && (parenStack[parenStack.length - 1] == '(' || parenStack[parenStack.length - 1] == '[')) return false
            // proceeded by a matching symbol
            parenStack.pop();
        }
    }
    
    return parenStack.length == 0
}

module.exports = balancedParens2;