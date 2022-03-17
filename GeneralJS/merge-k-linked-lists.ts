/*
 * You're given an array of k linked lists and each linked list is sorted in ascending order. Merge all the linked lists into one sorted linked list
 * Assume there is always at least two linked lists and they are formed correctly
 */

import { LLNode } from '../utils/linkedLists';
import { PQueue } from '../utils/priorityQueue';

// New LL + Brute force
// Time complexity: O(k^2 * n) (I think???)
// function mergeKLinkedLists(kLists: any[]) {
//   // Find lowest value of lists
//   let lowest = { index: 0, value: Infinity };
//   kLists.forEach((list, i) => {
//     if (list.value < lowest.value) lowest = { index: i, value: list.value };
//   });

//   const result = new LLNode(lowest.value);
//   let curr = result;
//   // Move node to next
//   kLists[lowest.index] = kLists[lowest.index].next;

//   // Iterate while current nodes in each list have a value
//   while (kLists.some(list => !!list)) {
//     // Reinstantiate lowest
//     lowest = { index: 0, value: Infinity }
//     // Repeat logic to find lowest value of lists
//     kLists.forEach((list, i) => {
//       if (list?.value < lowest.value) lowest = { index: i, value: list.value };
//     });

//     // Append lowest value
//     curr.next = new LLNode(lowest.value);

//     // Move nodes to next
//     curr = curr.next;
//     kLists[lowest.index] = kLists[lowest.index].next;
//   }

//   return result;
// }

// Priority Queue
function mergeKLinkedLists(kLists: any[]) {
  // Create a priority queue
  const pqueue = new PQueue();

  // Create a variable to hold new LL
  let result;
  // Create a variable to hold curr node in LL
  let curr;

  // Iterate through the lists (one element from each list at a time)
  // During each iteration through k, enqueue elements
  // After each iteration through k, dequeue element into new LL
  while (kLists.some(x => x && !isNaN(x.value))) {
    for (let i = 0; i < kLists.length; i++) {
      if (kLists[i]) {
        pqueue.enqueue(kLists[i].value, kLists[i].value);
        kLists[i] = kLists[i].next;
      }
    }

    // First pass through while loop instantiates result and curr
    if (!result) {
      result = new LLNode(pqueue.dequeue().element);
      curr = result;
    } else {
      curr.next = new LLNode(pqueue.dequeue().element);
      curr = curr.next;
    }
  }

  // Add in whatever is left in the queue
  while (!pqueue.isEmpty()) {
    curr.next = new LLNode(pqueue.dequeue().element);
    curr = curr.next;
  }

  return result;
}

module.exports = mergeKLinkedLists;
