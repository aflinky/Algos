// Factorial function
// 1! = 1 = 1
// !5 = 5 * 4 * 3 * 2 * 1 = 120
// 0! = 1 = 1
// "the factorial of a number is a shorthand way to write a multiplication expression wherein the number is multiplied by each number less than it but greater than zero"
// https://www.thoughtco.com/why-does-zero-factorial-equal-one-3126598

let dict = {};

function factorial(num: number) {
    // test num = 4 -> return 4 * 3 * 2 * 1

    // // // attempt #1
    // let base = 1; // any number will start (and potentially end with itself)
    // for(let i = 1; i <= num; i++){ // for each value 1 -> parameter
    //     // update the value of base to previous value of base * current value of iterator
    //     base = base * i;
    // }
    // return base;

    // // memoizing attempt 1 - instead of looping I can call the function in itself and pass in the last number (num -1) -> recursion!
    // if(num <= 1) return 1;
    // return num * factorial(num - 1);

    // num = 4
    /*
    4 !<= 1 -> 4 * (3 * 2 * 1) = 24 
    BUT not caching any values -> memoizing not achieved :(
    */

    // // memoizing attempt 2 - still no looping but hold onto the values that have already been calculated (I don't think I ever meet the condition !dict[num] = false)
    // if (num <= 1) return 1;
    
    // if (!dict[num]) {
    //     dict[num] = num * factorial(num - 1, dict);
    // }

    // return dict[num];

    /*
    num = 4
    4 !<= 1
    !dict[4]
    dict[4] = 4 * (3 * 2 * 1) = 24
    */

    // final solution : move cache out of function (scope is the key!)
    // a function approach : https://www.digitalocean.com/community/tutorials/understanding-memoization-in-javascript#a-functional-approach
    if (num <= 1) return 1; // zero and one are 1
    
    if (!dict[num]) { // check cache for value (higher scope than function)
        dict[num] = num * factorial(num - 1);
    }

    return dict[num];


};

module.exports = factorial;