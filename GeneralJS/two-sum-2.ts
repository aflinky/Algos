/**
 * Two Sum (with indices)
 * https://leetcode.com/problems/two-sum/
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *  
 * Constraints:
 * 2 <= nums.length <= 104
 * -109 <= nums[i] <= 109
 * -109 <= target <= 109
 * Only one valid answer exists.
 * 
 * (also see two-sum)
 */

function twoSum(arr: number[], n: number) {
    /*
        array =[1, 3, 3, 4, 7]
        number = 6
        solution = [1,2] -> 3 + 3 = 6
    */
   // attempt #2
   let potential = {};
   for(let i = 0; i < arr.length; i++){
        let difference = n - arr[i]; // value required per iteration to equal sum
        // check if difference is in potential dict
        if(potential[difference] != undefined){
            // if so, return current index and index of difference
            return [i, potential[difference]]
        } else {
            // if not, add current index and difference to potentials dict
            potential[arr[i]] = i
        }
   }
   /*
   n = 11
   arr = [1, 3, 3, 4, 7]
   **********************************
   i = 0 -> 1
   potential = {}
        difference = 10
        potential[10] == undefined
        potential = {1 : 0}
   i = 1 -> 3
   potential = {1 : 0}
        difference = 8
        potential[8] == undefined
        potential = {10 : 0, 8 : 1}
   i = 2 -> 3
   potential = {10 : 0, 8 : 1}
        difference = 8
        potential[8] == 1
        potential = {10 : 0, 8 : 1}
   i = 3 -> 4
   potential = {10 : 0, 8 : 1}
        difference = 7
        potential[7] == undefined
        potential = {10 : 0, 8 : 1, 7 : 3}
   i = 4 -> 7
   potential = {10 : 0, 8 : 1, 7 : 3}
        difference = 4
        potential[4] == undefined
        potential = {10 : 0, 8 : 1, 7 : 3}
    */





//     // original solution but it's gross - how do I keep from doing nested four loops
//     /*
//     feedback:
//     return index of two nums that equal sum
//     check each combo of el, don't wanna nested loop -> keep track of value of index + index
//      */
//    for(let i = 0; i <= arr.length; i++){
//        // dict { value : index } -> only one iteration? 
//        // needed for confirmation -> sum, current number, correct match
//        // subtract sum from num = matching pair, by key (value of el)
//        for(let j = i + 1; j < arr.length; j++){
//            if(arr[i] + arr[j] == n){
//                return [i,j]
//            }
//        }
//    }
}
module.exports = twoSum;