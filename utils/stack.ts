export interface Stack {
  storage: any[],
  index: number,
}

/**
 * First in, last out data structure
 */
export class Stack {
  constructor() {
    this.storage = [];
    this.index = 0;
  }

  /**
   * Push
   * O(1) (like Array.push)
   */
  push(val) {
    this.storage[this.index](val);
    ++this.index;
    return this.index;
  }
  
  /**
   * Pop
   * O(1) (like Array.pop)
   */
  pop(): any {
    // if index === 0
    if (!this.index) return this.index;

    // else
    --this.index;
    const removed = this.storage[this.index];
    this.storage.length = this.index;
    return removed;
  }
}