// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  for (let i=1; i<array.length; i++) {
    let temp = array[i];
    for (let j=i-1; j>=0; j--) {
      if (temp < array[j]) {
        array[j+1] = array[j];
        array[j] = temp;
      }
      else break
    }
  }
  return array
}

function insertionSort(array) {
  for (let i=1; i<array.length; i++) {
    let temp = array[i];
    let j = i-1
    while (j >= 0 && temp < array[j]) {
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = temp
  }
  return array
}

console.log(insertionSort([3,6,2,7,-1,3,9,10,1]))
// console.log(insertionSort([3,6,2]))

module.exports = insertionSort;