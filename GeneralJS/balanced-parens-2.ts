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
   // overcomplicated?
   // every closed symbol must be proceeded by a non-symbol char, a matching open symbol, or a non-matching closed symbol 
   let characterArray = input.split('');
    let approvedSymbols = ['(', ')', '{', '}', '[', ']'];
    let symbolsPresent = [];
    for(let i = 0; i <= characterArray.length; i++){
        if(approvedSymbols.includes(characterArray[i])){
            symbolsPresent.push(characterArray[i]);
        }
    }
    let evenSymbols = symbolsPresent.length %2 == 0 || symbolsPresent.length == 0
    let correctOrder = true

    if(symbolsPresent[0] == (')'|| '}' || ']')){
        // check if input starts with closing bracket
        correctOrder = false;
    }
    for(let i = 0; i <= symbolsPresent.length; i++){
        // check that the following symbol is in the correct order
        if((symbolsPresent[i] == '(') && (symbolsPresent[i + 1] == ('}'||']'))){
            correctOrder = false;
        }
        if((symbolsPresent[i] == '{') && (symbolsPresent[i + 1] == (')'||']'))){
            correctOrder = false;
        }
        if((symbolsPresent[i] == '[') && (symbolsPresent[i + 1] == (')'||'}'))){
            correctOrder = false;
        }
    }
    return (evenSymbols && correctOrder);
}

module.exports = balancedParens2;
