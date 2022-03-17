export interface LLNode {
  value: any,
  next?: LLNode,
}

export class LLNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

export function makeLLFromArray(arrOfValues: any[]) {
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