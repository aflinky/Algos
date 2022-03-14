export interface BST {
  value: number,
  left?: BST,
  right?: BST,
}

export class BST {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}