/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  s = s.trim();
  if (/\.e$/g.test(s)) return false;
  if (/[+-]\.$/g.test(s)) return false;
  if (!/[+0-9\.-]/g.test(s[0]) || s === ".") return false;
  return (/^[+-]?\d?\.?\d+(e[+-]?\d+)?$/g).test(s) ||
      (/^[+-]?\d+\.?\d*(e[+-]?\d+)?$/g).test(s) ||
      (/^[+-]?[0-9]*\.?[0-9]*$/g).test(s);
};