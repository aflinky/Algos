/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const groups = {};

  function isAnagram(w1, w2) {
    if (w1.length !== w2.length) return false;
    const obj1 = {};
    const obj2 = {};
    let i = 0;
    while (i < w1.length || i < w2.length) {
      if (w1[i]) obj1[w1[i]] = obj1.hasOwnProperty(w1[i]) ? obj1[w1[i]] + 1 : 1;
      if (w2[i]) obj2[w2[i]] = obj2.hasOwnProperty(w2[i]) ? obj2[w2[i]] + 1 : 1;
      i++
    }
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    for (let char in obj1) {
      if (!obj2.hasOwnProperty(char) || obj2[char] !== obj1[char]) return false
    }
    return true
  }

  groups[strs[0]] = [strs[0]]
  for (let i = 1; i < strs.length; i++) {
    if (!strs[i].length) {
          groups[""] = (!groups.hasOwnProperty("")) ? [""] : groups[""].concat("")
          continue
    }
    let bool = false;
    for (let elem in groups) {
      if (isAnagram(strs[i], elem)) {
        groups[elem].push(strs[i]);
        bool = true;
        break;
      }
    }
    if (!bool) groups[strs[i]] = [strs[i]];
  }
  return Object.values(groups)
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])