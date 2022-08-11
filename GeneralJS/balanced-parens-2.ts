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

// solve parens 1 first lol

function balancedParens2(input) {
    /*
        ((())[]{}) = true
        var hubble = function() { telescopes.awesome();) = false
    */
   
    // breaking case : closed symbol is proceeded by a none matching open symbol

    // define regex
    const parsingRegex = /[\[\]\{\}\(\)]/g;
    const openRegex = /[\[\{\(]/g
    const closedRegex = /[\]\}\)]/g
    // parens only
    const parsedInput = input.match(parsingRegex)
    // keep up with pairs 
    let parenStack = []; 

    // if there are no parens
    if(parsedInput == null) return true
    // if we start with an open paren
    if(parsedInput[0].match(openRegex) == null) return false;

    // iterate over parens
    for(let i = 0; i < parsedInput.length; i++) {
        // no one wants to type this every time
        let curr = parsedInput[i]
        let prev = parsedInput[i - 1]

        // check order to remedy failing test : [(]{)}
        if(curr.match(closedRegex)){
            if(curr == ')' && (prev == '{' || prev == '[')) return false
            if(curr == ']' && (prev == '{' || prev == '(')) return false
            if(curr == '}' && (prev == '(' || prev == '[')) return false
        }

        // equal matches
        if(curr.match(openRegex)){
            parenStack.push(curr)
        }
        if(curr.match(closedRegex)){
            parenStack.pop();
        }
    }
    // sanity
    console.log(parenStack)
    return parenStack.length == 0

//    // overcomplicated old solution
//    // every closed symbol must be proceeded by a non-symbol char, a matching open symbol, or a non-matching closed symbol 
//    let characterArray = input.split('');
//     let approvedSymbols = ['(', ')', '{', '}', '[', ']']; // match vs "approved" -> categories of pairs
//     let symbolsPresent = [];
//     // array methods!
//     // closing brace is breaking point
//     // hold onto matching pairs 
//     for(let i = 0; i <= characterArray.length; i++){
//         // think about time complexity -> how may times do you NEED to traverse array
//         if(approvedSymbols.includes(characterArray[i])){
//             symbolsPresent.push(characterArray[i]);
//         }
//     }

//     // present pairs over even number (think regex)
//     let evenSymbols = symbolsPresent.length %2 == 0 || symbolsPresent.length == 0
//     let correctOrder = true

//     if(symbolsPresent[0] == (')'|| '}' || ']')){
//         // check if input starts with closing bracket
//         correctOrder = false;
//     }
//     for(let i = 0; i <= symbolsPresent.length; i++){
//         // check that the following symbol is in the correct order
//         if((symbolsPresent[i] == '(') && (symbolsPresent[i + 1] == ('}'||']'))){
//             correctOrder = false;
//         }
//         if((symbolsPresent[i] == '{') && (symbolsPresent[i + 1] == (')'||']'))){
//             correctOrder = false;
//         }
//         if((symbolsPresent[i] == '[') && (symbolsPresent[i + 1] == (')'||'}'))){
//             correctOrder = false;
//         }
//     }
//     return (evenSymbols && correctOrder);
}

module.exports = balancedParens2;
