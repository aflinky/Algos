// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// chunkItUp(["a", "b", "c", "d"], 2) -> [["a", "b"], ["c", "d"]].
// chunkItUp([0, 1, 2, 3, 4, 5], 3) -> [[0, 1, 2], [3, 4, 5]].
// chunkItUp([0, 1, 2, 3, 4, 5], 2) -> [[0, 1], [2, 3], [4, 5]].
// chunkItUp([0, 1, 2, 3, 4, 5], 4) -> [[0, 1, 2, 3], [4, 5]].
// chunkItUp([0, 1, 2, 3, 4, 5, 6], 3) -> [[0, 1, 2], [3, 4, 5], [6]].
// chunkItUp([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) -> [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// chunkItUp([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) -> [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

function chunkItUp(array, size) {
  if (size >= array.length) return [array];
  const chunks = [];
  if (size === 0) return chunks;
  for (let i=0; i<array.length; i+=size) {
    chunks.push(array.slice(i, i+size));
  }
  return chunks;
}

console.log(chunkItUp(["a", "b", "c", "d"], 2) )
console.log(chunkItUp([0, 1, 2, 3, 4, 5], 3) )
console.log(chunkItUp([0, 1, 2, 3, 4, 5], 2) )
console.log(chunkItUp([0, 1, 2, 3, 4, 5], 4) )
console.log(chunkItUp([0, 1, 2, 3, 4, 5, 6], 3) )
console.log(chunkItUp([0, 1, 2, 3, 4, 5, 6, 7, 8], 4))
console.log(chunkItUp([0, 1, 2, 3, 4, 5, 6, 7, 8], 2))