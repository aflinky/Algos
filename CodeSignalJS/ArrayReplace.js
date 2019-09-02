// Arcade > Intro > 25
// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

// Ex inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3
// => arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3]

function arrayReplace(i, e, s) { //input, elementToReplace, substituionElem
    return i.map(i => i == e ? s : i)
}