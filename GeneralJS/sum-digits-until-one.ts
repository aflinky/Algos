/**
 * We're provided a positive integer num. Can you write a method to repeatedly add all of its digits until the result has only one digit?
 * 
 * Here's an example: if the input was 49, we'd go through the following steps:
 * 49
 * -> 4 + 9 = 13
 * -> 1 + 3 = 4
 * => 4
 * 
 * Input will be in the range between 0 and 1000000000
 */

 function sumDigits(num: number): number {
  let numArr = num.toString().split('');
  const sum = numArr.reduce((acc, curr) => acc + parseInt(curr), 0);
  if (sum <= 9) return sum;
  else return sumDigits(sum);
}

module.exports = sumDigits;