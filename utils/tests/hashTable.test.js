const { HashTable } = require("../hashTable");

describe('HashTable', () => {
  test('Initializing (default)', () => {
    // Arrange/Act
    const h = new HashTable();

    // Assert
    expect(h.size).toBe(16);
    expect(h.storage.every(x => x === undefined)).toBe(true);
    expect(h.storage.length).toBe(16);
    expect(h.items).toBe(0);
  });
  
  test('Initializing (with size)', () => {
    // Arrange/Act
    const size = 24;
    const h = new HashTable(size);

    // Assert
    expect(h.size).toBe(size);
    expect(h.storage.every(x => x === undefined)).toBe(true);
    expect(h.storage.length).toBe(size);
    expect(h.items).toBe(0);
  });

  test('Get (exists, first node in LL in bucket)', () => {

  });

  test('Get (exists, random middle node in LL in bucket)', () => {

  });

  test('Get (exists, last node in LL in bucket)', () => {

  });

  test('Set (new)', () => {

  });

  test('Set (overwrite)', () => {

  });

  test('Set (at capacity -> rehash)', () => {

  });
});