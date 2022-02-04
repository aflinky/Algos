function quickSort(arr) {
  if(!arr.length) return [];
  if(arr.length === 1) return arr;
  let left = 0;
  let right = arr.length - 1;
  let forwards = false;
  while(left !== right) {
    if(arr[left] > arr[right]) {
      let temp = arr[right];
      arr[right] = arr[left];
      arr[left] = temp;
      forwards = !forwards;
    }
    if(forwards) {
      left++;
    } else {
      right--;
    }
  }
  return quickSort(arr.slice(0, left)).concat(arr[left]).concat(quickSort(arr.slice(right+1, arr.length)))
}

module.exports = quickSort;