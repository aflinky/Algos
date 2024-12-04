// Arcade > Intro > 16
// Two arrays are called similar if one can be obtained from another by
// swapping at most one pair of elements in one of the arrays

// Given two arrays a and b, check whether they are similar

// Ex input: a = [1, 2, 3] and b = [1, 3, 2] => true
// Ex input: a = [1, 2, 3] and b = [3, 1, 2] => false

function areSimilar(a: any[], b: any[]): boolean {
  let swapCount = 0;

  for (let i = 0; i < a.length; i++) {
    // check equality of each element 
    if (a[i] !== b[i]) {
      // check for swap
      if (a[i] === b[i + 1]) {
        swapCount++;
        i++; // skip "swapped" element to avoid false negatives
      } else { 
        return false; // no swap, get outta here 
      }
    }
  }

  return swapCount <= 1;
}

module.exports = areSimilar;
