/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array.

Permutations must NOT repeat any of the array elements.

No return value is necessary.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

// Heaps' algo O(n!)
const eachPermutation = (arr, callback) => {
  const heaps = index => {
    if (index === arr.length) return callback(arr)
    for (let i=index; i<arr.length; i++) {
      swap (arr, index, i);
      heaps(index+1);
      swap(arr, index, i)
    }
  }
  heaps(0)
}

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});

module.exports = eachPermutation;