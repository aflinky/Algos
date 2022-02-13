/**
 * You are given a feature to display the median price of a given beverage type. Given an n
  sized unsorted array of integer prices, write a function findMedian([]) to return the
  median price. You can assume that the array will contain at least one element.
  Tests:
    findMedian([1,6,3,5,8,9,4,10,2]) => 5
    findMedian([1,6,3,5,8,9,4,10,2,7]) => 5.5
 */

    function median(unsortedList: number[]): number {
      // Since we know the array will always contain at least 1 element (according to the problem)
      // >> no need to to check for empty array
      // If we did want to check, we'd add the following line and adjust the return type of the function
      // if (!unsortedList.length) return; // return type: number => number | void
    
      // If the list has only one item
      // >> return that item
      if (unsortedList.length === 1) return unsortedList[0];
    
      // Potentially overkill but if list only has two items
      // >> take average
      if (unsortedList.length === 2) return (unsortedList[0] + unsortedList[1]) / 2;
    
      // Else
      // >> sort list
      // Obviously there are a lot of ways to sort and the best method can be dependent on space limitations
      // Assuming the unsorted list itself is not abnormally long where time would also be a factor
      
      // If we use the native JS sort method we can define a simple sort order of a to b (ascending)
      // According to MDN, JS's sort method sorts in place so it will use some auxillary space to execute but because it mutates the original array we don't another variable
      // unsortedList.sort((a, b) => a - b);
    
      // If we want to preserve the original list (for ex if the list were tied to chronological drink orders and we needed it for something else/if we are grabbing the median simply for analytics purposes)
      // We would want to use a non-mutating sort
      // For the sake of easy reading/separation and since sorting is likely a useful function in multiple contexts we can break that out into a helper function
      const sortedList = mergeSort(unsortedList);
    
      // If the length of the array is odd, we take the middle item
      if (sortedList.length % 2 !== 0) {
        return sortedList[(sortedList.length - 1) / 2];
      } else {
        // If the length is even, we take the average of the two middle items
        const leftMiddleItem = sortedList[(sortedList.length / 2) - 1];
        const rightMiddleItem = sortedList[(sortedList.length / 2)];
        return (leftMiddleItem + rightMiddleItem) / 2;
      }
    };
    
    // Choosing merge sort because it has the best time complexity
    // (if we wanted more space-conscious sorts we could do bubble or insertion)
    function mergeSort(arr: number[]): number[] {
      // Base case: array length < 2 return same array (no need to sort 1 or less items)
      if (arr.length < 2) return arr;
    
      // Find middle (doesn't have to be its own variable but it is used twice and this is more readable)
      const mid = Math.floor(arr.length / 2);
      // (Native JS slice is nonmutative)
      const leftMerge = mergeSort(arr.slice(0, mid));
      const rightMerge = mergeSort(arr.slice(mid));
    
      return merge(leftMerge, rightMerge);
    };
    
    // Helper function that zips back up the sublists (we know these sublists will always be sorted)
    function merge(listA: number[], listB: number[]): number[] {
      const result = [];
    
      // Move items from sorted lists into result
      while (listA.length && listB.length) {
        result.push(listA[0] < listB[0] ? listA.shift() : listB.shift());
      }
    
      // Return the result + the rest of whichever list still has items in it
      return result.concat(listA.length ? listA : listB);
    };
    
    module.exports = median;