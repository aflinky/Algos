// Arcade > Intro > 16
// Two arrays are called similar if one can be obtained from another by
// swapping at most one pair of elements in one of the arrays

// Given two arrays a and b, check whether they are similar

// Ex input: a = [1, 2, 3] and b = [1, 3, 2] => true
// Ex input: a = [1, 2, 3] and b = [3, 1, 2] => false

// Original Solution - Fails Test Case 6
// function areSimilar(a: any[], b: any[]): boolean {
//   let swapCount = 0;

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i]) {
//       if (a[i] === b[i + 1]) {
//         swapCount++;
//         i++; 
//       } else {
//         return false; 
//       }
//     }
//   }

//   return swapCount <= 1;
// }

// Updated Solution - Passes Test Case 6
// input: a = [1, 2, 3, 4] and b = [4, 2, 3, 1] => true
function areSimilar(a: any[], b: any[]): boolean {
  const diff : number[] = [];

  for(let i = 0; i < a.length; i++) {
    if(a[i] !== b[i]) {
      diff.push(i)
    }
  }

  if(diff.length === 0) return true;

  if(diff.length !== 2) return false;

  return a[diff[0]] === b[diff[1]];
}


module.exports = areSimilar;
