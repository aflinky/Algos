/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.
  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

/*
Top Down
*/

// const solveKnapsack = (items, weightAvailable, index = 0, totalValue = 0) => {

//     // base case : no items left or no weight available
//     if(index >= items.length || weightAvailable <= 0){
//       return totalValue;
//     }

//     // base value for include in case item doesn't fit
//     let include = totalValue;

//     // take item
//     if(items[index].weight <= weightAvailable){
//       include = solveKnapsack(items, weightAvailable - items[index].weight, index + 1, totalValue + items[index].value);
//     }

//     // leave item
//     let exclude = solveKnapsack(items, weightAvailable, index + 1, totalValue);

//     //compare values and return greater
//     return include > exclude ? include : exclude;

//     // // original base case : if there is no more capacity or items return the current total value
//     // if(weightAvailable <= 0 || index >= items.length){
//     //   return totalValue;
//     // }
//     // // original solution : does not give highest value
//     // // if the current item can fit, add it to the knapsack
//     // if(items[index].weight <= weightAvailable){
//     //   return solveKnapsack(items, weightAvailable - items[index].weight, index + 1, totalValue += items[index].value);
//     // } else {
//     //   // if the current item cannot fit, do not add it to the knapsack and return the previous total value
//     //   return totalValue;
//     // }

//     // // base case : if there is no more capacity or items return the current total value
//     // if(weightAvailable < 0 || index >= items.length - 1){
//     //   return totalValue;
//     // }

//     // // compare value of taking or leaving items
//     // let takeItemValue = totalValue;

//     // if(items[index].weight < weightAvailable){ // if the item fits
//     //   takeItemValue = solveKnapsack(items, weightAvailable - items[index].weight, index + 1, totalValue += items[index].value);
//     // }

//     // let leaveItemValue = solveKnapsack(items, weightAvailable, index + 1, totalValue);

//     // return takeItemValue > leaveItemValue ? takeItemValue : leaveItemValue

//     /*
//       Solution Feedback
//       I only care about two values -> each iteration we need to choose the greater value between take and leave
//       Explore the full tree -> we need to go through all take and leave cases to ensure max value
//     */

//     // // establish take and leave values
//     // let takeItemValue = totalValue;

//     // // base case : no more space or no more items
//     // if(weightAvailable < 0 || index >= items.length - 1){
//     //   return total;
//     // }

//     // // if the item fits take it
//     // if(items[index].weight < weightAvailable){
//     //   takeItemValue = solveKnapsack(items, weightAvailable - items[index].weight, index + 1, totalValue += items[index].value);
//     // }
//     // // otherwise leave it
//     // leaveItemValue = solveKnapsack(items, weightAvailable, index + 1, totalValue);

//     // // return the greater value between taking and leaving the item
//     // return takeItemValue > leaveItemValue ? takeItemValue : leaveItemValue
// };

/*
Bottom Up!
You have a knapsack with a weight limit.
You are presented with an array of objects, each with its own weight and value.
Find the maximum value you can fit into your knapsack, given the weight constraint.
e.g.
items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

/*
Build a matrix : weight available by number of items accounting for 0 with max value populating the cells
WA by # of items   | 0 | 1 | 2 | 3 |
```````````````````|```|```|```|```|
eval 0 items       | 0 | 0 | 0 | 0 |
```````````````````|```|```|```|```|
eval item[0]       | 0 | 3 | 3 | 3 |
weight: 1 value : 3|   |   |   |   |
```````````````````|```|```|```|```|
eval item[1]       | 0 | 3 | 4 | 7 |
weight: 2 value : 4|   |   |   |   |
```````````````````|```|```|```|```|
eval item[2]       | 0 | 3 | 4 | 7 |
weight: 3 value : 5|   |   |   |   |
* 7 is the max weight value combo since it is the last value in the matrix *
*/

const solveKnapsack = (items, weightAvailable) => {
  /* assume items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}]; and weight available = 3 in all comments for simplicity */

  // empty matrix to populate with max values for taking or leaving items on available weights
  let ksMatrix = [];

  // populate matrix with 0s > the value will remain 0 for the first row and first column (no items + no weight available)
  /*
  iteration visualization
  starting point : []
  array length set by weight available + 1 (to account for 0)
  iteration 1 : 0 items
  [
      [0,0,0,0]
  ]
  iteration 2 : 1 item
  [
      [0,0,0,0],
      [0,0,0,0]
  ]
  iteration 3 : 2 items
  [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
  ]
  iteration 4 : 3 items
  [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
  ]
  */
  for(let i = 0; i <= items.length; i++) {
      ksMatrix.push(new Array(weightAvailable + 1).fill(0));
  }

  // iterate over items to build matrix
  /*
  current matrix before iteration
  [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
  ]
  */
 // for outer loop iterate over items [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}] BUT start with 1 to start with 1 item instead of 0 items
  for(let i = 1; i <= items.length; i++) {
      /*
      for each iteration set weight and value object by item weight and value
      example : iteration 1 > items[0] = {weight: 1, value : 3}
      */
      const weight = items[i - 1].weight;
      const value = items[i - 1].value;
      // for inner loop build from 1 (to start with 1 weight avail instead of 0 weight avail) to max weight available
      for (let j = 1; j <= weightAvailable; j++){
          // if weight of current item is greater than current weight available (building up to max weight available) pull value from cell above (i-1)
          /*
          iteration visualization
          i = 2 | j = 1
          item[2-1] =  {weight: 2, value : 4} & weight available = 1 > weight of item is greater than current weight available
          [0,0,0,0],
          [0,3,3,3],
          [0,*3*,...,...]
          */
          if(weight > j) ksMatrix[i][j] = ksMatrix[i -1][j];

          // if weight of current item can fit determine if adding item gets higher value than previously checked item + weight combos 
          else {
              let previousValue = ksMatrix[i - 1][j] // one cell above (taking previous highest value -> leave item)
              let newValue = ksMatrix[i - 1][j - weight] + value // one row above weight appropriate addition of previous value to current item at current weight 
              /*
              iteration visualization
              i = 2 | j = 2
              item[2-1] = {weight: 2, value : 4}
              [0,0,0,0],
              [0,3,3,3],
              [0,3,*4*,...]
              */
              ksMatrix[i][j] = Math.max(previousValue, newValue); // set cell value to greater of two values
          }
      }
  }
  // return last item of the matrix -> max weight + max value
  return ksMatrix[items.length][weightAvailable]
}

module.exports = solveKnapsack;