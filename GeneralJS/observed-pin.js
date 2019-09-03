/*
Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. 
We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to 
this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the 
PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually 
be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it 
could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they 
never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array 
of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs. 
But please note that all PINs, the observed one and also the results, must be strings, because of 
potentially leading '0's. Don't worry about the order of the array.

Detective, we count on you!

expectations = {
  "8": ["5", "7", "8", "9", "0"],
  "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
  "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"],
}

*/

//with given keypad (good for when keypad is not in a specific order)
function getPINs(observed, idx = 0, result = []) { //tail call recursion
  if (!observed[idx]) return result; //if finished iterating through observed input string, return result
  const keyPad = [ //declare and instantiate keypad
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [-1, 0, -1]
  ]
  const curr = parseInt(observed[idx]) //parse # of observed at index
  const currOptions = [] //declare current options (relevant to curr #)

  for (let row = 0; row < 4; row++) { //nested for loops find numbers = # and numbers adjacent to # to add to currOptions
    for (let col = 0; col < 4; col++) {
      if ((keyPad[row][col] === curr || (keyPad[row - 1] && keyPad[row - 1][col] === curr) || (keyPad[row + 1] && keyPad[row + 1][col] === curr) || (keyPad[col + 1] && keyPad[row][col + 1] === curr) || (keyPad[col - 1] && keyPad[row][col - 1] === curr)) && keyPad[row][col] >- 1) currOptions.push(`${keyPad[row][col]}`)
    }
  }

  if (!result.length) result = currOptions; //if result is empty, result = currOptions
  else {
    const temp = []
    result.forEach(x => { //nested forEachs concatenate currOptions to the options already living in result
      currOptions.forEach(y => {
        temp.push(x + y)
      })
    })
    result = temp //reassign result
  }
  return getPINs(observed, idx + 1, result) //invoke getPINs for every # in observed string
}

//with adjacency map
function getPINs(observed, idx = 0, result = []) {
  if (!observed[idx]) return result;
  const adjMap = {
    "0": ["0", "8"],
    "1": ["1", "2", "4"],
    "2": ["1", "2", "3", "5"],
    "3": ["2", "3", "6"],
    "4": ["1", "4", "5", "7"],
    "5": ["2", "4", "5", "6", "8"],
    "6": ["3", "5", "6", "9"],
    "7": ["4", "7", "8"],
    "8": ["5", "7", "8", "9"],
    "9": ["6", "8", "9"],
  }
  const currOptions = adjMap[observed[idx]]

  if (!result.length) result = currOptions;
  else {
    const temp = []
    result.forEach(x => {
      currOptions.forEach(y => {
        temp.push(x + y)
      })
    })
    result = temp
  }
  return getPINs(observed, idx + 1, result)
}

// console.log(getPINs("11"))
// console.log(getPINs("8"))
// console.log(getPINs("0"))
// console.log(getPINs("369"))