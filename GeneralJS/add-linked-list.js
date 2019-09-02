/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) { //constructor function for LL nodes
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let currNode = new Node(); //set up a new LL with value-less node
  const head = currNode; //keep reference to the first node
  let sum = 0; //instantiate sum to 0
  //account for uneven LLs and carry over on last addition
  while (l1 || l2 || sum) {
    if (l1) { //add l1 value to sum and move on
      sum += l1.value;
      l1 = l1.next;
    }
    if (l2) { //add l2 value to sum and move on
      sum += l2.value;
      l2 = l2.next;
    }
    if (sum > 9) { //if sum > 9, there is carry over
      currNode.next = new Node(sum%10); //new node takes remainder
      sum = 1; //carry over moves forward
    }
    else { //if sum < 10, no carry over || if sum = 1 && !l1 and !l2
      currNode.next = new Node(sum); //new node is total sum
      sum = 0; //no carry over
    }
    currNode = currNode.next; //move currNode forward
  }
  return head.next //return new LL (minus the value-less node)
}


// const first = new Node(2);
// first.next = new Node(1)
// first.next.next = new Node(5)

// const second = new Node(5);
// second.next = new Node(9)
// second.next.next = new Node(2)

// console.log(addLinkedList(first, second))