// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
    let queue = []; //est queue (like balanced parens)
    str = str.toLowerCase();
    let temp = "";
    for (let i=0; i<str.length; i++) { //iterate through
        if (/[a-z]/g.test(str[i])) { //put letters together
            temp += str[i];
        }
        else if (temp) { //break at nonletters to queue or pop
            if (queue[queue.length-1] != temp.split("").reverse().join("")) {
                queue.push(temp);
            }
            else {queue.pop();}
            temp = "" //reset temp
        }
        if (i === str.length-1) { //takes care of last string of letters
            if (queue[0] === temp.split("").reverse().join("")) {queue.pop()}
        }
    }
    if (queue.length) return false; //if anything in queue, false
    return true
}

module.exports = matchWord;

console.log(matchWord('__END_DNE-----'))
console.log(matchWord('__ENDDNE__'))
console.log(matchWord('IF()()fi[]'))
console.log(matchWord('for__if__rof__fi'))
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'))
console.log(matchWord(''))