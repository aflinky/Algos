/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

//linear time, linear space
function deleteDups(head) {
  let values = {};
  let prev;
  for (let curr = head; curr; curr = curr.next) {
    if (curr.value in values) {
      prev.next = curr.next;
    }
    else {
      values[curr.value] = true;
      prev = curr;
    }
  }
}

//quadratic time, constant space
function deleteDups(head) {
  let inner;
  for (let outer = head; outer.next; outer = outer.next) {
    inner = outer;
    while (inner.next) {
      if (outer.value === inner.next.value) {
        inner.next = inner.next.next;
      }
      else {
        inner = inner.next
      }
    }
  }
}