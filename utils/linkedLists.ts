function LLNode(val) {
  this.value = val;
  this.next = null;
}

function makeLL(arrOfValues) {
  if (!arrOfValues.length) return null;
  const linkedList = new LLNode(arrOfValues[0]);
  let curr = linkedList;
  let i = 1;
  while (!isNaN(arrOfValues[i])) {
    curr.next = new LLNode(arrOfValues[i]);
    curr = curr.next;
    i++;
  }

  // console.log('now looking');
  // let meow = linkedList;
  // console.log(`${meow.value}`);
  // while (meow.next) {
  //   meow = meow.next;
  //   console.log(`-> ${meow.value}`);
  // }
  return linkedList;
}

module.exports = { LLNode, makeLL };