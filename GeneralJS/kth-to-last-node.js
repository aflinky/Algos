/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

// LL Node constructor
function Node(val) {
  this.value = val;
  this.next = null;
}

//ineffiecient
// function kthToLastNode(k, head) {
//   let links = 0;
//   let curr = head ;
//   while (curr.next !==null) {
//     curr = curr.next ;
//     links++ ;
//   }
//   links++ ;
//   if (links === 0) {return undefined}
//   if (k === links) {return head.value}
//   if (k > links) {return undefined}
//   else {
//     let count = 0;
//     curr = head ;
//     while (count<links-k) {
//       curr = curr.next ;
//       count++ ;
//     }
//     return curr.value;
//   }
// }

function kthToLastNode(k, head) {
  let linksBehind = 0; //instantiate linksBehind to 0 (will wait until it reaches value k and then begin moving)
  let result;
  let curr = head ;
  while (curr.next) {
    console.log(linksBehind, k, curr.value)
    console.log(linksBehind >= k)
    if (linksBehind >= k) result = curr.value;
    ++linksBehind;
    curr = curr.next;
    if (result) console.log(result)
  }
  return result; 
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(kthToLastNode(0,a))