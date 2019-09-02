// Write a function that sorts an array using the bubble sort algorithm
// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) { //sorts ascending
  let swap; //declare swap
  for (let i=1; i<array.length; i++) { //inner for loop: iterate though array starting from 2nd element
    swap = array[i];
    for (let j=i-1; j>=0; j--) { //iterate through array backwards from element behind i until sorted
      if (swap < array[j]) { //swap curr elem (array[i]) with previous so long as it's smaller
        array[j+1] = array[j];
        array[j] = swap;
      }
      else break; //breaks out of inner for loop when >= prev
    }
  }
  return array
}