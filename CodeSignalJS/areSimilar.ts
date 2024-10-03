// Arcade > Intro > 16
// Two arrays are called similar if one can be obtained from another by
// swapping at most one pair of elements in one of the arrays

// Given two arrays a and b, check whether they are similar

// Ex input: a = [1, 2, 3] and b = [1, 3, 2] => true
// Ex input: a = [1, 2, 3] and b = [3, 1, 2] => false

function areSimilar(a: any[], b: any[]) {
    // create array of differences between a and b
    // NOTE THE IMPORTANCE OF !== VS !=
    let ab = a.filter((v, i) => v !== b[i]);
    if (ab.length > 2) return false;
    // create array of differences between b and a
    let ba = b.filter((v, i) => v !== a[i]);
    //base case || swaps
    return (
      ab.length === 0 ||
      (ab.length === 2 && ab.join("") === ba.reverse().join(""))
    );
  }
  
  module.exports = areSimilar;
  