// Arcade > Intro > 24
// In the popular Minesweeper game you have a board with some mines and
// the cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells.
// Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// Ex
//              matrix = [[true, false, false],
//                        [false, true, false],
//                        [false, false, false]]
// (in other notation) = [[X,  ,  ],
//                        [ , X,  ],
//                        [ ,  ,  ]] 
// =>
// minesweeper(matrix) = [[1, 2, 1],
//                        [2, 1, 1],
//                        [1, 1, 1]]


const directions = [
    [ 1,-1], [ 1, 0], [ 1, 1], //checks bottom left, middle, and right
    [ 0,-1],          [ 0, 1], //checks left and right
    [-1,-1], [-1, 0], [-1, 1]  //checks top left, middle, and right
];

minesweeper = matrix => matrix.map((row, y) => row.map((col, x) => directions.reduce((count, i)
=> count += !!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]]), 0)));
/**
 * matrix is mapped starting with the first row (y=0), which is passed through another map for the element (column, x=0), which is passed through the reduction of directions which checks for the truthyness of(!!) (the existence of the row in question && the value of existence/value of the element in question)
 * 
 * in the first iteration,
 * matrix = matrix
 * row = y = 0 
 * col = x = 0 
 * count = 0 
 * i = directions[0] = [1,-1] (which checks the bottom left, finds nothing, count+=0 = 0)
 * i = directions[1] = [1,0] (which checks the bottom middle, finds false, count+=0 = 0)
 * i = directions[2] = [1,1] (which checks the bottom right, finds true, count +=1 = 1)
 * for the rest of i in directions, either the value does not exist or is false so count = 1 
 * 
 * 
 * in the second iteration,
 * matrix = matrix 
 * row = y = 0 
 * col = x = 1
 * count = 0 
 * i = directions[0] = [1,-1] (which checks the bottom left, finds false, count+=0 = 0)
 * i = directions[1] = [1,0] (which checks the bottom middle, finds true, count+=0 = 1)
 * i = directions[2] = [1,1] (which checks the bottom right, finds false, count +=1 = 1)
 * i = directions[3] = [1,0] (which checks the left, finds true, count+=1 = 2)
 * for the rest of i in directions, either the value does not exist or is false so count = 2
 */