export interface Queue {
  items: any[],
}

/**
 * First in, first out data structure
 */
export class Queue {
  constructor() {
    this.items = [];
  }

  /**
   * Enqueue
   * O(1) (like Array.push)
   */
  enqueue(item) {
    this.items.push(item);
  }
  
  /**
   * Dequeue
   * O(n) (like Array.shift)
   */
  dequeue(): any {
    return this.items.shift();
  }
}