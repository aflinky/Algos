export function LLNode(val) {
  this.value = val;
  this.next = null;
}

export function makeLL(arrOfValues) {
  if (!arrOfValues.length) return null;
  const linkedList = new LLNode(arrOfValues[0]);
  let curr = linkedList;
  let i = 1;
  while (!isNaN(arrOfValues[i])) {
    curr.next = new LLNode(arrOfValues[i]);
    curr = curr.next;
    i++;
  }
  return linkedList;
}