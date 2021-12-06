// Arcade > Intro > 31
// Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a.
// In other words, find the element x in a, which minimizes the following sum:
// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
// (where abs denotes the absolute value)

// If there are several possible answers, output the smallest one.

// Ex a = [2, 4, 7] => 4
//     for x = 2, the value will be abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7.
//     for x = 4, the value will be abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5.
//     for x = 7, the value will be abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8.
//     The lowest possible value is when x = 4, so the answer is 4.

// Ex a = [2, 3] => 2
// Because there is a tie, the smallest x between x = 2 and x = 3 is the answer

function absoluteValuesSumMinimization(a: number[]) {
  const diffs = [];
    for (let x of a) {
        let sum = 0
        for (let i=0; i<a.length; i++) {
            sum += Math.abs(a[i]-x)
        }
        diffs.push(sum)
    }
    return a[diffs.indexOf(Math.min.apply(Math, diffs))]
}

module.exports = absoluteValuesSumMinimization;