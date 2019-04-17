// Arcade > Intro > 16
// Two arrays are called similar if one can be obtained from another by
// swapping at most one pair of elements in one of the arrays

// Given two arrays a and b, check whether they are similar

// Ex input: a = [1, 2, 3] and b = [1, 2, 3] => true
// Ex input: a = [1, 3, 2] and b = [1, 2, 3] => true
// Ex input: a = [1, 2, 3] and b = [1, 2, 2] => false

function areSimilar(a, b) {
    let ab = a.filter((v,i)=> v!=b[i]) //creates array of differences between a and b
    if (ab.length > 2) return false
    let ba = b.filter((v,i)=> v!=a[i]) //creates array of differences between b and a
    return ab.length === 0 || (ab.length === 2 && ab.join("") == ba.reverse().join("")) //base case || swaps
}