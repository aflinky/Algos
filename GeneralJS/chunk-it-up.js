// Write a function that splits an array (first argument)
// into groups the length of size (second argument) *or less in case of the last elements
// and returns them as a two-dimensional array.

// chunkItUp(["a", "b", "c", "d"], 2) -> [["a", "b"], ["c", "d"]]
// chunkItUp([0, 1, 2, 3, 4, 5], 3) -> [[0, 1, 2], [3, 4, 5]]
// chunkItUp([0, 1, 2, 3, 4, 5], 4) -> [[0, 1, 2, 3], [4, 5]]
// chunkItUp([1], 2) -> [[1]]


function chunkItUp(array, size) {
  if (size === array.length) return [array];
  const chunks = [];
  if (size === 0) return chunks;
  let chunk = [];
  for (let i = 0; i < array.length; i++) {
    chunk.push(array[i]);
    if (i % size === size - 1 || i === array.length - 1) {
      chunks.push(chunk);
      chunk = [];
    }
  }
  return chunks;
}

module.exports = chunkItUp;