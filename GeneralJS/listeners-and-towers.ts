/**
 * You are the technical director of a radio serving listeners nationwide. For simplicity's sake we can consider each listener to live along a horizontal line stretching from 0 (west) to 100 (east)
 * Given a list of N listeners and a list of M radio towers, each placed at various locations along this line, determine waht the minimum broadcast range would have to be in order for each listener's home to be covered
 * 
 * Ex
 * N = [1, 11, 5, 20]
 * M = [4, 8, 15]
 * => 5
 */

// Time: O(N*M) (I think?)
// Space: O(N + M) (I think?)
function radioRange(listeners: number[], towers: number[]): number {
  // Sort the arrays
  listeners = listeners.sort((a, b) => a - b);
  towers = towers.sort((a, b) => a - b);


  let maxRange = 0;
  // Let l = index of listeners
  let l = 0;
  for (let t = 0; t < towers.length; t++) {
    // Find the first l with a coordinate bigger (or the end of the listeners)
    while (listeners[l] < towers[t] && l < listeners.length) {
      // Must check if next element exists, if not, break
      if (!isNaN(listeners[l + 1])) l++;
      else break;
    }

    let currRange;
    // If first or last listener, nothing to compare
    if (l === 0 || l === listeners.length - 1) currRange = Math.abs(listeners[l] - towers[t]);
    // Else must compare first biggest and first smallest
    // & take smaller value
    else currRange = Math.min(Math.abs(listeners[l] - towers[t]), Math.abs(listeners[l - 1] - towers[t]));
    
    // Compare to current maxRange
    // & take larger value
    maxRange = Math.max(maxRange, currRange);
  }

  return maxRange;
}

module.exports = radioRange;