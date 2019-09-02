/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
    const m = new Array(n)
    for (let col=0; col<n; col++) {
        let temp = [];
        for (let row=0; row<n; row++) {
            temp.unshift(grid[row][col])
            if (temp.length===n) {
                m[col] = temp
            }
        }
    }
    return m
}

// function rotateGrid2(grid, n) {
//     // for (let col=0; col<n; col++) {
//     //     let saved = grid[col]
//     //     console.log(saved)
//     //     for (let row=n-1; row>=0; row--) {
//     //         // console.log(grid[row])
//     //         console.log([row, col])
//     //         console.log(grid[row][col])
//     //     }
//     // }
//     console.log(rotateGrid(grid, n))
//     grid = rotateGrid(grid, n)
//     console.log(rotateGrid(grid, n))
//     grid = rotateGrid(grid, n)
//     console.log(rotateGrid(grid, n))
//     grid = rotateGrid(grid, n)
//     console.log(rotateGrid(grid, n))
// }

// const sampleGrid = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]  ]

//  console.log(rotateGrid(sampleGrid, 3))
//  console.log(rotateGrid2(sampleGrid, 3))


module.exports = rotateGrid;
