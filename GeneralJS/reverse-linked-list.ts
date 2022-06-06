/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 */

import { LLNode } from '../utils/linkedLists';

// Solution 1 (new LL)
// function reverseLinkedList(head) {
//   if (!head) return;

//   // variable to keep track of values in LL
//   const values = [];
//   let curr = head;
//   while (curr && curr.value !== undefined) {
//     values.unshift(curr.value);
//     curr = curr.next;
//   }

//   // create new LL
//   const result = new LLNode(values[0]);
//   curr = result;
//   for (let i = 1; i < values.length; i++) {
//     curr.next = new LLNode(values[i]);
//     curr = curr.next;
//   }

//   return result;
// }

// Solution 2 (in place)
function reverseLinkedList(head) {
  // 0 nodes
  if (!head) return;

  // 1 node
  if (!head.next) return;

  // Grab first two nodes
  let save = head;
  let curr = head.next;
  // Establish original head as a new tail
  save.next = null;
  
  // 2 nodes
  if (!curr.next) {
    curr.next = save;
    return curr;
  }

  // 3+ nodes
  let future;
  while (curr.next) {
    // Assign future to next node
    future = curr.next;

    // Link curr node to saved node
    curr.next = save;
    
    // Move pointers along
    // Reassign save to current node
    save = curr;
    // Reassign current to future node
    curr = future;
  }

  return curr;
}

module.exports = reverseLinkedList;
