// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

// var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
// var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(...args) {
  const obj = {}; //create empty obj for elements and their counts
  const argumentArrays = args; //NOTE args = Array.from(arguments)
  argumentArrays.forEach((arr, index) => { //for each array in arguments
    arr.forEach((elem) => { //for each elem in each array
      if (index === 0 && !obj[elem]) obj[elem] = 1; //if looking at first array, add to object if not already there
      if (obj[elem] === index) obj[elem] += 1; //if looking at other arrays and element in object, increase count (but only once per array)
    })
  });
  let result = Object.keys(obj).filter(elem => { //filter object, keeping elements with counts === # of arguments/arrays
    return obj[elem] === argumentArrays.length;
  });
  for (let i=0; i<result.length; i++) { //coerce numbers back to their primitive data type from string
    if (!isNaN(result[i])) result[i] = JSON.parse(result[i])
  }
  return (result.length) ? result : 'Nothing in Common!';
}
// const array1 = [1, 4, 6, 7, 'ferret', 12, 12, 99, 2000, 'dog', 'dog', 99, 1000];
// const array2 = [15, 9, 9, 'ferret', 9, 26, 12, 12, 'dog'];
// const array3 = [23, 12, 12, 77, 'ferret', 9, 88, 100, 'dog'];
// const array4 = ['ferret', 12, 12, 45, 9, 66, 77, 78, 2000];
// console.log(commonElements(array1, array2, array3, array4)) //[12, 'ferret']
// console.log(commonElements([1, 2, 3], [1, 5, 6], [5, 1, 7], [1, 4, 7])) //[1]
// console.log(commonElements([1, 2, 3], [1, 2, 6], [5, 1, 2], [1, 2, 7])) //[1, 2]