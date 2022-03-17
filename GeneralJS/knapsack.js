/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

const solveKnapsack = (items, weightAvailable, index = 0, totalValue = 0) => {

  // // original base case : if there is no more capacity or items return the current total value
  // if(weightAvailable <= 0 || index >= items.length){
  //   return totalValue;
  // }
  // // original solution : does not give highest value
  // // if the current item can fit, add it to the knapsack
  // if(items[index].weight <= weightAvailable){
  //   return solveKnapsack(items, weightAvailable - items[index].weight, index + 1, totalValue += items[index].value);
  // } else {
  //   // if the current item cannot fit, do not add it to the knapsack and return the previous total value
  //   return totalValue;
  // }

  // // base case : if there is no more capacity or items return the current total value
  // if(weightAvailable < 0 || index >= items.length - 1){
  //   return totalValue;
  // }

  // // compare value of taking or leaving items
  // let takeItemValue = totalValue;

  // if(items[index].weight < weightAvailable){ // if the item fits
  //   takeItemValue = solveKnapsack(items, weightAvailable - items[index].weight, index + 1, totalValue += items[index].value);
  // }

  // let leaveItemValue = solveKnapsack(items, weightAvailable, index + 1, totalValue);
  
  // return takeItemValue > leaveItemValue ? takeItemValue : leaveItemValue

  /*
    Solution Feedback
    I only care about two values -> each iteration we need to choose the greater value between take and leave
    Explore the full tree -> we need to go through all take and leave cases to ensure max value
  */

  // establish take and leave values
  let takeItemValue = totalValue;

  // base case : no more space or no more items
  if(weightAvailable < 0 || index >= items.length - 1){
    return total;
  }

  // if the item fits take it
  if(items[index].weight < weightAvailable){
    takeItemValue = solveKnapsack(items, weightAvailable - items[index].weight, index + 1, totalValue += items[index].value);
  }
  // otherwise leave it
  leaveItemValue = solveKnapsack(items, weightAvailable, index + 1, totalValue);

  // return the greater value between taking and leaving the item
  return takeItemValue > leaveItemValue ? takeItemValue : leaveItemValue
};

/*
Pseudo Code
[{ weight: 2, value: 4 },{ weight: 3, value: 5 },{ weight: 1, value: 3 }] -> max weight : 3
solveKnapsack = (items, 3, index = 0, totalValue = 0);

ITEM 0 : weight +  item exists : YES
ITEM 0 : item weight < avil weight : YES
ITEM 0 : take
  solveKnapsack = (items, 1, index = 1, totalValue = 4);
  ITEM 1: weight + item exists :  YES
  ITEM 1: item weight < avil weight : NO
    ITEM 1: leave
    solveKnapsack = (items, 1, index = 2, totalValue = 4);
    ITEM 2: weight + item exists : YES
    ITEM 2: item weight < avil weight : YES
      ITEM 2: take
      solveKnapsack = (items, 0, index = 3, totalValue = 7);
      ITEM 3: weight + item exists : NO -> return 7
*/

module.exports = solveKnapsack;