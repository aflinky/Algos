/**
 * Given two strings s1 and s2, return true if s2 contains a 
permutation
 of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

A permutation is a rearrangement of all the characters of a string.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 

Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
 */

// sliding window, fast/slow
function checkInclusion(s1: string, s2: string): boolean {
  const s1Map: Record<string, number> = {};
  for (let i = 0; i < s1.length; i++) {
    if (!s1Map.hasOwnProperty(s1[i])) s1Map[s1[i]] = 0;
    s1Map[s1[i]]++;
  }

  let s2MapOfMissingChars: Record<string, number> = JSON.parse(
    JSON.stringify(s1Map)
  );

  let slow = 0;
  for (let i = 0; i < s2.length; i++) {
    const char = s2[i];
    // if the char is not what we're looking for, reset object of missing chars
    if (!s1Map.hasOwnProperty(char)) {
      s2MapOfMissingChars = JSON.parse(JSON.stringify(s1Map));
      // set slow to the earliest character that it can be to be part of substring
      slow = i + 1;
    }
    // if we find a char we want
    else {
      // check it's still within the bounds of permutations
      // if we've already seen the max number of this char, count will be 0
      if (s2MapOfMissingChars[char] !== 0) {
        // if we've satified a missing char, adjust map
        s2MapOfMissingChars[char]--;
        // check if we're done
        if (Object.values(s2MapOfMissingChars).every((x) => x === 0)) {
          return true;
        }
      } else {
        // CASE: char is in s1Map
        // is one too many of given char, s2MapOfMissingChars[char] === 0
        // s2[slow] !== char

        // must move slow until it finds the same character for balance
        while (s2[slow] !== char) {
          s2MapOfMissingChars[s2[slow]]++;
          slow++;
        }
        slow++;
      }
    }
  }

  return !Object.values(s2MapOfMissingChars).some((x) => x > 0);
}

module.exports = checkInclusion;
