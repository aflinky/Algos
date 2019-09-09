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
  if (k <= 0) return; //if k is invalid, return undefined
  let linksBehind = 1; //instantiate linksBehind to 1 (will wait until it reaches value k and then begin moving)
  let curr = head; //set curr and result to current head
  let result = head;
  while (curr.next) {
    curr = curr.next; //move curr pointer along
    if (linksBehind >= k) result = result.next; //if linksBehind has caught up, move result along
    linksBehind++; //increment linksBehind
  }
  if (linksBehind < k) return; //if k > # of links in LL, return undefined
  return result.value; 
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
console.log(kthToLastNode(0,a)) //undef
console.log(kthToLastNode(1,a)) //E
console.log(kthToLastNode(2,a)) //D
console.log(kthToLastNode(3,a)) //C
console.log(kthToLastNode(4,a)) //B
console.log(kthToLastNode(5,a)) //A
console.log(kthToLastNode(6,a)) //undef