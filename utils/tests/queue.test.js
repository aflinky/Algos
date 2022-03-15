const { Queue } = require("../queue");

describe('Queue', () => {
  test('Initializing', () => {
    // Arrange/Act
    const q = new Queue();

    // Assert
    expect(q.items).toStrictEqual([]);
  });
  
  test('Enqueue', () => {
    // Arrange
    const q = new Queue();

    // Act
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);

    // Assert
    expect(q.items).toStrictEqual([1, 2, 3]);
  });
  
  test('Dequeue', () => {
    // Arrange
    const q = new Queue();

    // Act
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);

    // Assert
    expect(q.dequeue()).toBe(1);
    expect(q.dequeue()).toBe(2);
    expect(q.dequeue()).toBe(3);
    expect(q.dequeue()).toBeUndefined();
  });
});