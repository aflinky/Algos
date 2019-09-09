// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

// with inner for loop
// function insertionSort(array) {
//   for (let i=1; i<array.length; i++) {
//     let temp = array[i];
//     for (let j=i-1; j>=0; j--) {
//       if (temp < array[j]) {
//         array[j+1] = array[j];
//         array[j] = temp;
//       }
//       else break
//     }
//   }
//   return array
// }

// with inner while loop
function insertionSort(array) {
  for (let i=1; i<array.length; i++) { //iterate forwards through whole array
    let temp = array[i]; //declare temp
    let j = i-1 //declare j
    while (j >= 0 && temp < array[j]) { //iterate backwards from right behind i until unecessary
      array[j+1] = array[j]; // swap elements
      j--; //decrement j
    }
    array[j+1] = temp; //reassign temp into its rightful place
  }
  return array;
}

console.log(insertionSort([3,6,2,7,-1,3,9,10,1]))
console.log(insertionSort([3,6,2]))