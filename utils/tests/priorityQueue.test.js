const { PQueue, PQueueElement } = require("../priorityQueue");

describe('PQueue', () => {
  test('Initializing', () => {
    // Arrange/Act
    const q = new PQueue();

    // Assert
    expect(q.items).toStrictEqual([]);
  });
  
  test('Enqueue one', () => {
    // Arrange
    const q = new PQueue();

    // Act
    const values = [[1, 4], [2, 5], [3, 6]];
    for (let item of values) {
      q.enqueue(item[0], item[1]);
    }
    
    // Assert
    const expectedResults = [[1, 4], [2, 5], [3, 6]];
    for (let i = 0; i < q.items.length; i++) {
      expect(q.items[i] instanceof PQueueElement).toBe(true);
      expect(q.items[i].element).toBe(expectedResults[i][0]);
      expect(q.items[i].priority).toBe(expectedResults[i][1]);
    }
  });
  
  test('Enqueue two', () => {
    // Arrange
    const q = new PQueue();

    // Act
    const values = [[2, 5], [3, 6], [1, 4]];
    for (let item of values) {
      q.enqueue(item[0], item[1]);
    }
    
    // Assert
    const expectedResults = [[1, 4], [2, 5], [3, 6]];
    for (let i = 0; i < q.items.length; i++) {
      expect(q.items[i] instanceof PQueueElement).toBe(true);
      expect(q.items[i].element).toBe(expectedResults[i][0]);
      expect(q.items[i].priority).toBe(expectedResults[i][1]);
    }
  });
  
  test('Enqueue three', () => {
    // Arrange
    const q = new PQueue();

    // Act
    const values = [[3, 6], [2, 5], [1, 4]];
    for (let item of values) {
      q.enqueue(item[0], item[1]);
    }
    
    // Assert
    const expectedResults = [[1, 4], [2, 5], [3, 6]];
    for (let i = 0; i < q.items.length; i++) {
      expect(q.items[i] instanceof PQueueElement).toBe(true);
      expect(q.items[i].element).toBe(expectedResults[i][0]);
      expect(q.items[i].priority).toBe(expectedResults[i][1]);
    }
  });
  
  test('Enqueue four (matching priorities one)', () => {
    // Arrange
    const q = new PQueue();

    // Act
    const values = [[1, 3], [2, 3]];
    for (let item of values) {
      q.enqueue(item[0], item[1]);
    }
    
    // Assert
    const expectedResults = [[1, 3], [2, 3]];
    for (let i = 0; i < q.items.length; i++) {
      expect(q.items[i] instanceof PQueueElement).toBe(true);
      expect(q.items[i].element).toBe(expectedResults[i][0]);
      expect(q.items[i].priority).toBe(expectedResults[i][1]);
    }
  });
  
  test('Enqueue four (matching priorities two)', () => {
    // Arrange
    const q = new PQueue();

    // Act
    const values = [[2, 3], [1, 3], [7, 0]];
    for (let item of values) {
      q.enqueue(item[0], item[1]);
    }
    
    // Assert
    const expectedResults = [[7, 0], [2, 3], [1, 3]];
    for (let i = 0; i < q.items.length; i++) {
      expect(q.items[i] instanceof PQueueElement).toBe(true);
      expect(q.items[i].element).toBe(expectedResults[i][0]);
      expect(q.items[i].priority).toBe(expectedResults[i][1]);
    }
  });
  
  test('Dequeue', () => {
    // Arrange
    const q = new PQueue();

    // Act
    const values = [[2, 3], [1, 3], [7, 0]];
    for (let item of values) {
      q.enqueue(item[0], item[1]);
    }
    
    // Assert
    const expectedResults = [[7, 0], [2, 3], [1, 3]];
    for (let i = 0; i < expectedResults.length; i++) {
      const removed = q.dequeue();
      expect(removed instanceof PQueueElement).toBe(true);
      expect(removed.element).toBe(expectedResults[i][0]);
      expect(removed.priority).toBe(expectedResults[i][1]);
    }
    expect(q.dequeue()).toBeUndefined();
  });

  test('Front', () => {
    // Arrange
    const q = new PQueue();
    const front = [1, 1];
    const middle = [2, 2];
    const rear = [3, 3];
    q.enqueue(front[0], front[1]);
    q.enqueue(middle[0], middle[1]);
    q.enqueue(rear[0], rear[1]);

    // Act/Assert
    expect(q.front() instanceof PQueueElement).toBe(true);
    expect(q.front().element).toBe(front[0]);
    expect(q.front().priority).toBe(front[1]);
  });
  
  test('Front when empty', () => {
    // Arrange
    const q = new PQueue();

    // Act/Assert
    expect(q.front()).toBeUndefined();
  });

  test('Rear', () => {
    // Arrange
    const q = new PQueue();
    const front = [1, 1];
    const middle = [2, 2];
    const rear = [3, 3];
    q.enqueue(front[0], front[1]);
    q.enqueue(middle[0], middle[1]);
    q.enqueue(rear[0], rear[1]);

    // Act/Assert
    expect(q.rear() instanceof PQueueElement).toBe(true);
    expect(q.rear().element).toBe(rear[0]);
    expect(q.rear().priority).toBe(rear[1]);
  });
  
  test('Rear when empty', () => {
    // Arrange
    const q = new PQueue();

    // Act/Assert
    expect(q.rear()).toBeUndefined();
  });

  test('Is Empty true one', () => {
    // Arrange
    const q = new PQueue();

    // Act/Assert
    expect(q.isEmpty()).toBe(true);
  });

  test('Is Empty true two', () => {
    // Arrange
    const q = new PQueue();
    q.enqueue(1, 2);
    q.dequeue();

    // Act/Assert
    expect(q.isEmpty()).toBe(true);
  });

  test('Is Empty false', () => {
    // Arrange
    const q = new PQueue();
    q.enqueue(1, 2);

    // Act/Assert
    expect(q.isEmpty()).toBe(false);
  });

  // test('Print', () => {
  // });
});