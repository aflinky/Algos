// Determine the nth number in the fibonnacci series

function nthFib(num: number, dict = {}) {
  if (num <= 2) return 1;
  
  if (!dict[num]) {
    dict[num] = nthFib(num - 1, dict) + nthFib(num - 2, dict);
  }

  return dict[num];
}

module.exports = nthFib;