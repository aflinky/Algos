/**
 * BST Breadth First Search
 * level order
 * https://www.101computing.net/breadth-first-traversal-of-a-binary-tree/
 */

import { BST } from "../utils/binarySearchTree";
import { Queue } from "../utils/queue";

function breadthFirstSearch(tree: BST): number[] {
  // Variable to hold the result
  const result = [];
  // Queue = first in, first out
  const queue = new Queue();

  // First in = first node
  queue.enqueue(tree);

  // Temp variable to hold dequeued items
  let curr;

  // So long as the queue isn't empty we'll have more nodes to record
  while (queue.items.length) {
    // First out
    curr = queue.dequeue();
    // Push value
    result.push(curr.value);
    // Enqueue left and right if applicable
    if (curr.left) queue.enqueue(curr.left);
    if (curr.right) queue.enqueue(curr.right);
  }

  return result;
}

module.exports = breadthFirstSearch;
