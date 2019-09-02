/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if (l1 === undefined) { return l2 }
  if (l2 === undefined) { return l1 }
  let mainCurr = l1; //keep track of l1
  let secCurr = l2; //keep track of l2
  // start with moving first element of l2 to l1
  while (secCurr) {
    if (mainCurr.next) { //if more elements in l1
      let temp = mainCurr.next; //save that next element
      mainCurr.next = secCurr; //insert the secCurr
      secCurr = secCurr.next
      mainCurr.next.next = temp; //next is the saved element
      mainCurr = mainCurr.next.next //mainCurr pointer moves to this element
    }
    else { //if no more elements in l1
      mainCurr.next = secCurr;
      break
    }
  }
  return l1
}

// let one = new Node("0")
// let two = new Node("1")

// for (let i = 2; i < 10; i++) {
//   let meow = new Node(i)
//   let curr;
//   i % 2 === 0 ? curr = one : curr = two;
//   while (curr.next !== null) {
//     curr = curr.next;
//   }
//   curr.next = meow
//   var m = curr.next
// }
// for (let i = 10; i < 15; i++) {
//   console.log(m)
//   m.next = new Node(i)
//   m = m.next
// }

// console.log(one)
// console.log(two)

// console.log(two)
// while (two.next) {
//   console.log(two.next)
//   if (two.next) { two = two.next }
// }

// let meowza = zip(one, two);
// console.log(meowza)
// while (meowza.next) {
//   console.log(meowza.next)
//   meowza = meowza.next
// }

module.exports = { Node: Node, zip: zip };
