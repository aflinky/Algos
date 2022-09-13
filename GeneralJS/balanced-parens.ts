/**
 * Balanced Parentheses, Curly Braces, and Brackets
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

/*
notes coming into this:
- starting character must be open paren
- closing parens are breaking characters
- array methods come in handy
- no need to check for even length > present pairs are more important
- regex could help
*/

function balancedParens(input): boolean {
    // let openParens = [];
    // let closedParens = [];
    // let balanced = false;
    // for(let i = 0; i < input.length; i++){
    //     if(input[i] == '('){
    //         openParens.push(input[i])
    //     }

    //     if(input[i] == ')'){
    //         closedParens.push(input[i])
    //     }

    //     if(openParens.length == closedParens.length) balanced = true;
    // }
    // return balanced

    // attempt #2 : simplify
    let balanced = 0
    for(let i = 0; i < input.length; i++) {
        if(input[i] == '('){
            balanced += 1;
        }
        if(input[i] == ')'){
            if(balanced == 0) return false;
            balanced -= 1;
        }
    }

    return balanced == 0

    /*
    ())(
    0
    ( = 1
    ) = 0
    ) = -1
    ( = 0
    0 = balanced
    balanced > 0
    ) : breaking point > put it in the most optimal place
    */
}

module.exports = balancedParens;