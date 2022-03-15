/**
 * Create a queue using two stacks
 */

const { Stack } = require("../utils/stack");

/**
* Queue Class
*/
function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();

  this.enqueue = function (val) {
    this.stack1.push(val);
  }
  
  this.dequeue = function () {
    if (this.stack1.index === 0) return;
    while (this.stack1.index > 0) {
      this.stack2.push(this.stack1.pop())
    }
    const temp = this.stack2.pop();
    while (this.stack2.index > 0) {
      this.stack1.push(this.stack2.pop())
    }
    console.log(temp)
    return temp;
  }
}

// const stacky = new Stack;
// for (let i=0; i<5; i++) {
//     stacky.push(i);
// }
// console.log(stacky)

// const queuey = new Queue;
// queuey.enqueue(10)
// queuey.enqueue(20)
// queuey.enqueue(30)
// console.log(queuey)
// console.log(queuey.dequeue())
// console.log(queuey)
// queuey.enqueue(40)
// queuey.enqueue(50)
// queuey.enqueue(60)
// console.log(queuey)
// console.log(queuey.dequeue())
// console.log(queuey)
// console.log(queuey.dequeue())
// console.log(queuey.dequeue())
// console.log(queuey.dequeue())
// console.log(queuey.dequeue())
// console.log(queuey.dequeue())
// console.log(queuey.dequeue())
// console.log(queuey)

// stacky.push(1)
// stacky.push(2)
// stacky.push(3)
// console.log(stacky)
// console.log(stacky.pop())
// console.log(stacky)
// console.log(stacky.pop())
// console.log(stacky.pop())
// console.log(stacky.pop())
// console.log(stacky.pop())
// console.log(stacky.pop())
// console.log(stacky)
// stacky.push(3)
// console.log(stacky)
// console.log(stacky)

module.exports = { Stack: Stack, Queue: Queue };
