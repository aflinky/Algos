/**
 * Minimum Window Substring
 * https://leetcode.com/problems/minimum-window-substring/
 * 
 * Given two strings s and t of lengths m and n respectively,
 * return the minimum window substring of s such that every character in t (including duplicates) is included in the window.
 * If there is no such substring, return the empty string "".
 * 
 * The testcases will be generated such that the answer is unique.
 * 
 * A substring is a contiguous sequence of characters within the string.
 * 
 * Example 1:
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 * 
 * Example 2:
 * Input: s = "a", t = "a"
 * Output: "a"
 * Explanation: The entire string s is the minimum window.
 * 
 * Example 3:
 * Input: s = "a", t = "aa"
 * Output: ""
 * Explanation: Both 'a's from t must be included in the window.
 * Since the largest window of s only has one 'a', return empty string.
 *  
 * Constraints:
 * m == s.length
 * n == t.length
 * 1 <= m, n <= 105
 * s and t consist of uppercase and lowercase English letters.
*/

function minWindowSubstring(str: string, pat: string): string {
  console.log('string: ', str, 'pattern', pat);
  // Check pattern not longer than string
  if (pat.length > str.length) return '';

  // Create a map based on pattern
  const patMap = {};
  for (let p = 0; p < pat.length; p++) {
    if (!patMap.hasOwnProperty(pat[p])) patMap[pat[p]] = 0;
    patMap[pat[p]]++;
  }
  // Hold number of UNIQUE CHARS in pat to see if we satisfy pattern
  let count = Object.keys(patMap).length;

  // Variable to hold the window indices (inclusive start and end)
  let indices = [-Infinity, Infinity];

  // Fast/slow pointers
  let i = 0; // Trails behind
  let j = 0; // Seeks next char -- keeps up with curr

  // Move i until it finds a char in map
  // Can stop moving when i reaches string length - pattern length + 1
  // aka when the space between the start and the end of the string
  // is less than the length of the pattern
  console.log('before first while')
  while (i < str.length - pat.length + 1) {
    // Grab curr char
    const currChar = str[i];
    console.log('inside first while', i, j, currChar, patMap.hasOwnProperty(currChar))
    // If that char is in the pattern map,
    if (patMap.hasOwnProperty(currChar)) {
      // adjust j to match (same starting point)
      j = i;
      // and break out of while loop
      break;
    }

    // increment i
    i++;
  }
  console.log('after first while', i, j)
  
  // Can stop moving when i reaches string length - pattern length + 1
  // aka when the space between the start and the end of the string
  // is less than the length of the pattern
  // && j < length of string
  console.log('before second while', i, j)
  while (i < str.length - pat.length + 1 && j < str.length) {
    console.log('in second while', `i: ${i}, j: ${j}, currChar = ${str[j]}, patMap: ${JSON.stringify(patMap, null, 2)}, count: ${count}`)
    // Grab curr char
    const currChar = str[j];
    // If that char is in the pattern map, decrement
    if (patMap.hasOwnProperty(currChar)) {
      patMap[currChar]--;
      // If char part of patt and we have satisfied that char's req
      if (patMap[currChar] === 0) {
        // aka only decrement when # of req instances of char satisfied
        // decrement count
        count--;
      }
    }

    // If count === 0 we have satisfied everything!
    if (!count) {
      console.log('we did it!', str.substring(i, j + 1), i, j)
      // Reevaluate min window
      const currMinLength = indices[1] - indices[0];
      // Infinity - (-Infinity) = Infinity
      // current length of string in window
      const currLength = j - i + 1;
      // If we have found a smaller window,
      // adjust window
      if (currLength < currMinLength) {
        indices[0] = i;
        indices[1] = j;
      }
      console.log('indices', indices)

      // Reincrement count for char we are moving i away from
      patMap[str[i]]++;
      if (patMap[str[i]] > 0) count++;
      
      // Move i forward to next char in pattern
      while (i < str.length - pat.length + 1) {
        i++;
        console.log('start inner while', i, j, str[i], count, JSON.stringify(patMap, null, 2))
        // If we find next char in patt
        if (patMap.hasOwnProperty(str[i])) {
          // and it brings that char to 0
          // break out of while loop
          if (!patMap[str[i]]) break;
          // else increment count
          else {
            patMap[str[i]]++;
          }
        }
        console.log('end of inner while loop', JSON.stringify(patMap, null, 2), i, count)
      }
    }

    // increment j if ?
    if (count) j++;
  }

  console.log('before return')

  // If no match found, indices[0] === -Infinity and we return ''
  // Else return subtring based on indices
  return indices[0] < 0 ? '' : str.substring(indices[0], indices[1] + 1);
}

module.exports = minWindowSubstring;
