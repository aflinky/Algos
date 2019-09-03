/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {}; //stores values in order in which they are pushed
  this.maxArr = [] //stores values in descending order
  this.max = -Infinity; //max value
  this.index = 0 //number of items in storage & index at which items should be pushed
}

Stack.prototype.push = function (value) {
  this.storage[this.index] = value //add to storage
  if (this.maxArr.length === 0) { this.maxArr.unshift(value) } //if nothing in maxArr, unshift
  for (let i = 0; i < this.maxArr.length; i++) { //else iterate through and insert
    if (value > this.maxArr[i]) {
      this.maxArr.splice(i, 0, value) //splice values into maxArr
      break;
    }
  }
  this.max = this.maxArr[0];
  this.index++; //increment # of items/index at end
  return this.index; //return # of items
}

Stack.prototype.pop = function () {
  if (this.index === 0) return undefined //if there's nothing there
  if (this.index === 1) this.max = -Infinity //if we're popping the last thing, resent max to -Infinity
  let result = this.storage[this.index - 1];
  delete this.storage[this.index - 1]
  for (let i = 0; i < this.maxArr.length; i++) { //iterate through maxArr and splice out value
    if (this.maxArr[i] === result) {
      this.maxArr.splice(i, 1)
      break;
    }
  }
  this.index--; //decrement index at end
  this.max = this.maxArr[0];
  return result
}

Stack.prototype.getMax = function () {
  return this.max > -Infinity ? this.max : undefined;
}

let stacky = new Stack;
for (let i = 0; i < 6; i++) {
  console.log(stacky.push(i))
}
console.log(stacky.push(3))
console.log(stacky)
console.log(stacky.pop())
console.log(stacky.pop())
console.log(stacky)
console.log(stacky.pop())
console.log(stacky.getMax())
console.log(stacky.push(10))
console.log(stacky.push(10))
console.log(stacky)
console.log(stacky.pop())
console.log(stacky.getMax())
console.log(stacky)
stacky.push(9)
console.log(stacky)
console.log(stacky.pop())
console.log(stacky.pop())
console.log(stacky)
console.log(stacky.pop())
console.log(stacky.pop())
console.log(stacky.pop())
console.log(stacky.pop())
console.log(stacky)
console.log(stacky.getMax())