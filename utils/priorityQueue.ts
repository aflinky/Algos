export interface PQueueElement {
  element: any,
  priority: any,
}

export interface PQueue {
  items: PQueueElement[],
}

export class PQueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

/**
 * Data Structure to hold and arrange values in order of priority
 */
export class PQueue {
  constructor() {
    this.items = [];
  }

  /**
   * Add an item to the priority queue
   * Priority ascending
   * When priority matches, add afterwards
   */
  enqueue(item, priority) {
    const element = new PQueueElement(item, priority);
    if (this.isEmpty()) return this.items.push(element);

    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority >  element.priority) {
        this.items.splice(i, 0, element);
        added = true;
        break;
      }
    }
    // If we have reached the end of the queue, add to end
    if (!added) this.items.push(element);
  }

  /**
   * Remove and return the first element in the queue
   */
  dequeue() {
    if (this.isEmpty()) return undefined;
    return this.items.shift();
  }

  /**
   * Returns the most important element (aka the element with the lowest value for priority)
   */
  front() {
    if (this.isEmpty()) return undefined;
    return this.items[0];
  }

  /**
   * Returns the least important element (aka the element with the highest value for priority)
   */
  rear() {
    if (this.isEmpty()) return undefined;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return !this.items.length;
  }

  print() {
    let str = '';
    for (let i = 0; i < this.items.length; i++) {
      str += `\n${this.items[i].element}`;
    }
    console.log(str);
  }
}