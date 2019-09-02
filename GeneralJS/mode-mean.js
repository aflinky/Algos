/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
    const mean = Math.floor(array.reduce((sum, curr) => {return sum+=curr}, 0)/array.length)
    const count = {} ;
    for (elem of array) {
        if (!count[elem]) {count[elem] = 1}
        else {count[elem]++}
    }
    // console.log(count)
    const keys = Object.keys(count)
    let mode = [null, 0] ;
    for (let i=0; i<keys.length; i++) {
        if (count[keys[i]] >= mode[1]) {
            mode[0] = keys[i] ;
            mode[1] = count[keys[i]]
        }
    }
    return mode[0] == mean ;
}

module.exports = modemean;
// console.log(modemean(array))

//LUIS' SINGLE PASS SOLUTION
// function singlePassModeMean(array) {
//     const cache = {
//       mode: { value: null, length: 1 },
//       mean: { value: 0, sum: 0 },
//     };
//     for (let value of array) {
//       const { mode, mean } = cache;
//       // cache[value] is the amount of times the number has appeared
//       mean.sum += value;
//       if (value in cache) {
//         cache[value] += 1;
//         if (
//           cache[value] > mode.length ||
//           (cache[value] === mode.length && value >= mode.value)
//         ) {
//           mode.value = value;
//           mode.length = cache[value];
//         }
//       } else {
//         cache[value] = 1;
//         if (value > mode.value && mode.length === 1) {
//           mode.value = value;
//         }
//       }
//     }
//     cache.mean.value = cache.mean.sum / array.length;
//     return cache.mode.value === Math.floor(cache.mean.value);
//   }