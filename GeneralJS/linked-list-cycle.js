/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function (value) {
  this.value = value;
  this.next = null;
}

// function hasCycle(head) {
//   let nodeValues = [];
//   let curr = head;
//   let checking = false;
//   let checkingNum = 0;
//   let checkFor = 0;
//   let testBreak = 0;
//   while (curr && curr.value) {
//     if (checking) {
//       if (checkingNum > 0) {
//         if (nodeValues[nodeValues.length - checkFor] === curr.value) {
//           --checkingNum;
//         }
//         else {
//           checking = false
//         }
//         // testBreak++
//         // if (testBreak>2) break
//       }
//       else return true //if checkingNum === 0
//     }
//     else {
//       if (nodeValues.includes(curr.value)) {
//         checking = true;
//         checkingNum = nodeValues.length - nodeValues.lastIndexOf(curr.value)
//         checkFor = nodeValues.length - nodeValues.lastIndexOf(curr.value)
//       }
//     }
//     nodeValues.push(curr.value)
//     if (curr.next) curr = curr.next
//     else return false;
//   }
//   console.log(nodeValues)
//   return false
// }


// Floyd's cycle-finding algorithm
function hasCycle(head) {
  if (!head || !head.next) return false
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    if (!fast.next || !fast.next.next) return false
    slow = slow.next;
    fast = fast.next.next;
  }
  return true
}

//Brent's Cycle Detection Algo

// var node1 = new Node('1');
// var node2 = node1.next = new Node('2');
// var node3 = node2.next = new Node('3');
// var node4 = node3.next = new Node('4');
// var node5 = node4.next = new Node('5');
// console.log(hasCycle(node1)); // => false
// node5.next = node2;
// console.log(hasCycle(node1)); // => true

module.exports = { Node: Node, hasCycle: hasCycle }
