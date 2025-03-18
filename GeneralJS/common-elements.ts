// given x arrays that may contain both numbers and strings (where x >= 2)
// return a new array with the numbers and/or strings that appear in all arrays
// all numbers are numbers (no "12", for example, only 12)
// duplicates are only counted once

// var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
// var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// example input: commonElements(array1, array2, array3, array4)
// => output would be [ 12, 'ferret']
// order of elements in result does not matter

// if there are no common numbers or strings return empty array

function commonElements(...args: (string | number)[][]): (string | number)[] {

  let inCommon = args[0].filter((el) => args[1].find((innerEl) => (innerEl === el)));

  for(let i = 2; i < args.length; i++) {
    for(let j = 0; j < inCommon.length; j++) {
      if(!args[i].includes(inCommon[j])) {
        inCommon.splice(j)
      }
    }
  }

  return inCommon;
}

module.exports = commonElements;
