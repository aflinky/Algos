// Arcade > Intro > 13
// Write a function that reverses characters in (possibly nested) parentheses in the input string
// Input strings will always be well-formed with matching ()s
// Ex input = "(bar)" => "rab"
// Ex input = "foo(bar(baz))blim" => "foobazrabblim"

function reverseInParentheses(s: string) { 
    let characterArray = s.split('');

    const parenIndexes = (characterArray) : {start:number | undefined, end:number | undefined} => {
        let startParen : number | undefined = undefined;
        let endParen: number | undefined = undefined;
        for(let i = 0; i < characterArray.length ; i++){
            let el = characterArray[i]
            if(el == '('){
                startParen = i;
            } else if (el == ')') {
                endParen = i
                return {start: startParen,end: endParen}
            } 
        } 
        return {start: startParen,end: endParen}
    }

    let {start, end} = parenIndexes(characterArray)
    let solution = s;

    while(start !== undefined && end !== undefined) {
    
        const beforeParen = characterArray.slice(0,start).join('');
        const inParen = characterArray.slice(start + 1 , end).reverse().join('');
        const afterParen = characterArray.slice(end + 1, characterArray.length).join('');

        solution = beforeParen + inParen + afterParen;

        characterArray = solution.split('');
        start = parenIndexes(characterArray).start;
        end = parenIndexes(characterArray).end;
    }
    
    return (solution);
} 

module.exports = reverseInParentheses;
