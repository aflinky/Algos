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
 * Sliding Window
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


// Sliding window - fast/slow
// https://medium.com/outco/how-to-solve-sliding-window-problems-28d67601a66
function minWindowSubstring(str: string, pattern: string): string {
  const patternMap = {};
  const lettersSeen = {};
  let windowIndices = [-Infinity, Infinity];

  // map the pattern into a dictionary with char to count
  // and initialize letters seen to 0s across the board
  for (let i = 0; i < pattern.length; i++) {
    if (patternMap.hasOwnProperty(pattern[i])) {
      patternMap[pattern[i]] += 1;
    } else {
      patternMap[pattern[i]] = 1;
      lettersSeen[pattern[i]] = 0;
    }
  }
  let lettersMissing = pattern.length;

  let slow = 0;
  // iterate through string
  for (let fast = 0; fast < str.length; fast++) {
    const fastChar = str[fast];
    // if we hit a character in the pattern
    if (pattern.includes(fastChar)) {
      // increment count in lettersSeen
      lettersSeen[fastChar] += 1;
      // if we are under the required count or just hit the required count, decrement lettersMissing
      if (lettersSeen[fastChar] <= patternMap[fastChar]) {
        lettersMissing -= 1;
      }

      // if lettersMissing hits 0, evaluate windowIndices and increment slow pointer
      if (lettersMissing === 0) {
        // if we found a smaller window, update window and move slow pointer until lettersMissing hits 1
        if (windowIndices[1] - windowIndices[0] > fast - slow) {
          windowIndices = [slow, fast];
        }

        // increment slow pointer
        while (lettersMissing === 0) {
          const slowChar = str[slow];
          if (pattern.includes(slowChar)) {
            // adjust letter variables
            lettersSeen[slowChar] -= 1;
            // be wary of multiples when adjusting lettersMissing
            if (lettersSeen[slowChar] < patternMap[slowChar]) {
              lettersMissing += 1;
            }
          } else {
            // reevaluate if window can be smaller
            if (
              windowIndices[1] - windowIndices[0] > fast - (slow + 1)
            ) {
              windowIndices = [slow + 1, fast];
            }
          }
          slow += 1;
        }
      }
    }
  }

  return windowIndices[0] !== -Infinity
    ? str.substring(windowIndices[0], windowIndices[1] + 1)
    : "";
}

module.exports = minWindowSubstring;
