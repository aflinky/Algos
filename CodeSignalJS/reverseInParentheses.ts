// Arcade > Intro > 13
// Write a function that reverses characters in (possibly nested) parentheses in the input string
// Input strings will always be well-formed with matching ()s
// Ex input = "(bar)" => "rab"
// Ex input = "foo(bar(baz))blim" => "foobazrabblim"

function reverseInParentheses(s: string): string {
  while (true) { //to do until break statement
    let c = s.indexOf(")"); //find first index of ")" and assign to c
    if (c === -1) break //if none, break

    let o = s.substring(0, c).lastIndexOf("("); //take substring from start to c, then find last index of "(" aka the match to the first ")", assign index to o

    //split string into start middle end
    let start = s.substring(0, o); //from start until designated (
    let middle = s.substring(o + 1, c).split("").reverse().join(""); //reverse of string between ( )
    let end = s.substring(c + 1, s.length); //from designated ) to end

    s = start + middle + end; //reassign s to new string
  }
  return s;
}

module.exports = reverseInParentheses;