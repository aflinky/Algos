export interface HashTable {
  size: number,
  storage: any[],
  items: 0,
}

export interface HashTableLL {
  head?: HashTableLLNode,
  tail?: HashTableLLNode,
  length: number,
}

export interface HashTableLLNode {
  key: any,
  value: any,
  next?: HashTableLLNode,
}

export class HashTable {
  constructor(size = 16) {
    this.size = size;
    this.storage = new Array(size);
    this.items = 0;
  }

  /**
   * Get the value for a specific key
   */
  get(k): any {

  }

  /**
   * Stores a value in the storage array
   * Uses hash function to determine which bucket to store in
   */
  set(k, val) {
    // Determine which bucket to use
    const bucket = hashCode(k, this.size);
    
    // If bucket is currently empty, create LL
    if (!this.storage[bucket]) this.storage[bucket] = new HashTableLL();

    // Keep track of current LL length
    const originalLength = this.storage[bucket].length;
    
    // Add key/value pair to LL
    this.storage[bucket].push(k, val);

    // Compare new length to original to decide if hash table added a new item
    if (this.storage[bucket].length !== originalLength) this.items++;

    // Optional
    // If items hits 75% capacity, increase storage
    if (this.items / this.size >= 0.75) {
      // Double capacity
      this.size *= 2;
      // Move around items into new buckets
      this.storage = this.rehash(this.size);
    }
  }

  /**
   * Removes item with key k and returns it's value
   */
  remove(k): any {
    // TODO

    // Optional
    // If items hits 25% capacity, decrease storage
    if (this.items / this.size <= 0.25) {
      // Double capacity
      this.size /= 2;
      // Move around items into new buckets
      this.storage = this.rehash(this.size);
    }
  }

  /**
   * Recreates hashtable in a new storage size
   */
  rehash(newSize: number): any[] {

  }
}

export class HashTableLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Adds key/value pair to a HashTable LL/bucket
   * If the key already exists, must overwrite value
   */
  push(k, val) {
    // If no head yet, first node
    if (!this.head) {
      this.head = this.tail = new HashTableLLNode(k, val);
      this.length++;
      return;
    }
    
    // Check tail to see if we need to overwrite (optional but good for constant lookup time)
    if (this.tail.key === k) {
      this.tail.value = val;
      return;
    }

    // Else must go through the rest of the nodes
    let curr = this.head;
    while (curr !== this.tail) {
      // If key the same, overwrite
      if (curr.key === k) {
        curr.value = val;
        return;
      }
      // Else move on
      else curr = curr.next;
    }

    // If key doesn't exist, we add to LL
    this.tail.next = new HashTableLLNode(k, val);
    this.tail = this.tail.next;
    // If we add to LL, must increment length of LL
    this.length++;
  }
}

export class HashTableLLNode {
  constructor(k, val) {
    this.key = k;
    this.value = val;
    this.next = null;
  }
}

/**
 * Fake hash function to determine which bucket a key should go in
 * Returns a value between 0 and the size of the hash table
 * Same key returns same bucket every time
 */
function hashCode(str: string, size: number) {
  var hash = 0;
  if (!str.length) return hash
  for (let i = 0; i < str.length; i++) {
    var letter = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + letter;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash) % size ;
}