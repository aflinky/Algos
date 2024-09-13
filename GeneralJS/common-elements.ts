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
  const obj = {}; // create empty obj for elements and their counts
  const argumentArrays = args; // NOTE args = Array.from(arguments)
  // for each array in arguments
  argumentArrays.forEach((arr, index) => {
    // for each elem in each array
    arr.forEach((elem) => {
      // if looking at first array, add to object if not already there
      if (index === 0 && !obj[elem]) obj[elem] = 1;
      // if looking at other arrays and element in object, increase count (but only once per array)
      else if (obj[elem] === index) obj[elem] += 1;
    });
  });

  let result: (string | number)[] = Object.keys(obj).filter((elem) => {
    // filter object, keeping elements with counts === # of arguments/arrays
    return obj[elem] === argumentArrays.length;
  });

  for (let i = 0; i < result.length; i++) {
    // coerce numbers back to their primitive data type from string
    if (!isNaN(result[i] as number))
      result[i] = JSON.parse(result[i] as string);
  }
  return result.length ? result : [];
}

module.exports = commonElements;
