// O(n) time
// O(2n) space
// function rob(nums: number[]): number {
//   const table: number[][] = [];
//   for (let i = 0; i < nums.length; i++) {
//     table.push([0, 0]);
//   }
//   // i = item index
//   for (let i = 0; i < nums.length; i++) {
//     if (i === 0) {
//       table[i][0] = nums[i];
//       table[i][1] = 0;
//     } else if (i === 1) {
//       table[i][0] = nums[i];
//       table[i][1] = nums[i - 1];
//     } else {
//       table[i][0] = Math.max(...table[i - 2]) + nums[i];
//       table[i][1] = Math.max(...table[i - 1]);
//     }
//   }
//   return Math.max(...table[nums.length - 1]);
// }

// O(1) space
// O(n) time
function rob(nums: number[]): number {
  let [prev, prevp] = [0, 0];
  for (const m of nums) {
    const temp = prev;
    prev = Math.max(prevp + m, prev);
    prevp = temp;
  }
  return Math.max(prev, prevp);
}

module.exports = rob;
