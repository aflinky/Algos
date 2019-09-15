// Interview questions: Print out the points of a spiral


//  7--.--.--.--6
//  |           |                  
//  .  3--.--2  .                   
//  |  |     |  |                   
//  .  .  0--1  .                      
//  |  |        |                   
//  .  4--.--.--5                           
//  |                             
//  8--.--.--.--.--9


// Write a function that takes three parameters:
//  * an initial x coordinate
//  * an initial y coordinate
//  * the number of points to print (N)
// And
//  * prints out (x,y) coordinates for the first N points (point 1, point 2, point 3, ... point N) in the spiral

// Point 1 is one unit to the right of point 0 (x+1,y).
// Point 2 is one unit above point 1 (x+1, y+1).

// Point 1 x+1, y-0

// Point 2 x+1, y+1
// Point 3 x-1, y+1
// Point 4 x-1, y-1

// Point 5 x+2, y-1

// Point 6 x+2, y+2
// Point 7 x-2, y+2
// Point 8 x-2, y-2

// Point 9 x+3, y-2



function spiral(x, y, N) {
  //edge cases N <= 0
  if (N <= 0) return;
  for (let i=1; i<=N; i++) {
      let diff = Math.ceil(i/4)
      
      if (i%4 === 1) {
          console.log(`(${x+diff}, ${y-(diff-1)})`)
      }
      else if (i%4 === 2) {
          console.log(`(${x+diff}, ${y+(diff)})`)
      }
      else if (i%4 === 3) {
          console.log(`(${x-diff}, ${y+(diff)})`)
      }
      else if (i%4 === 0) {
          console.log(`(${x-diff}, ${y-(diff)})`)
      }
  }
}

// spiral(0,0,9) 
// ^ prints out
// (1, 0)
// (1, 1)
// (-1, 1)
// (-1, -1)
// (2, -1)
// (2, 2)
// (-2, 2)
// (-2, -2)
// (3, -2)