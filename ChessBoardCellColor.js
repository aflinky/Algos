// Arcade > Intro > 29
// Given two cells on the standard chess board, determine whether they have the same color or not.

// Ex For cell1 = "A1" and cell2 = "C3" => true
// Ex For cell1 = "A1" and cell2 = "H3" => false


// The difference between the cell letters and the cell #s must add up to a num divisible by 2
function chessBoardCellColor(cell1, cell2) {
    return ((Math.abs(cell1[0].charCodeAt() - cell2[0].charCodeAt())) + (Math.abs(cell1[1] - cell2[1]))) %2 ===0
}