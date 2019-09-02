/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  if (!this.head) this.head = this.tail = new Node(val);
  else {
    const newNode = new Node(val)
    let curr = this.head;
    while (curr.next) curr = curr.next
    curr.next = this.tail = newNode;
    newNode.prev = curr;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (!this.head) return
  if (this.head.val === val) {
    if (this.head === this.tail) this.head = this.tail = null
    else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    return;
  }
  if (this.tail.val === val) {
    this.tail = this.tail.prev;
    this.tail.next = null
    return
  }
  let curr = this.head;
  while (curr.next) {
    if (curr.next.val === val) {break}
    if (curr.next === this.tail) return
    curr = curr.next
  }
  curr.next = curr.next.next;
  curr.next.prev = curr;  
};

// const linky = new LinkedList;
// linky.add(10)
// linky.add(20)
// linky.add(30)
// linky.add(40)
// console.log(linky)
// for (let testcurr = linky.head; testcurr; testcurr=testcurr.next) {
//   console.log(testcurr.val)
//   if (testcurr.next) console.log(testcurr.val, testcurr.next.val)
//   if (testcurr.prev) console.log(testcurr.val, testcurr.prev.val)
// }
// console.log(linky.remove(40))
// for (let testcurr = linky.head; testcurr; testcurr=testcurr.next) {
//   console.log(testcurr.val)
//   if (testcurr.next) console.log(testcurr.val, testcurr.next.val)
//   if (testcurr.prev) console.log(testcurr.val, testcurr.prev.val)
// }
// console.log(linky)
module.exports = LinkedList;
