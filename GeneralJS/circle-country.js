// /**
//  *  Circle Country is a country that contains several circular-shaped districts.
//  *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
//  *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
//  *
//  *  You are given an array x, an array y, and an array r
//  *
//  *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
//  *
//  *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
//  *
//  *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
//  *
//  *
//  *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
//  *  (start_x, start_y) to (end_x, end_y)
//  *
//  *  Constraints:
//  *    - x, y and r will each contain the same number of elements
//  *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
//  *    - no circle borders intersect/touch (but they can be nested)
//  *
//  */

// // circles: r^2 = x^2 + y^2

// //method 1: if and else ifs
// function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
//   let circles = 0; //instantiate cirlce count = 0
//   for (let i = 0; i < x.length; i++) { //iterate through all circles
//     //if 
//     if ((Math.abs(x[i] - start_x)) ** 2 + (Math.abs(y[i] - start_y)) ** 2 <= Math.pow(r[i], 2) && (Math.abs(x[i] - end_x)) ** 2 + (Math.abs(y[i] - end_y)) ** 2 <= Math.pow(r[i], 2)) continue;
//     else if ((Math.abs(x[i] - start_x)) ** 2 + (Math.abs(y[i] - start_y)) ** 2 <= Math.pow(r[i], 2)) circles += 1
//     else if ((Math.abs(x[i] - end_x)) ** 2 + (Math.abs(y[i] - end_y)) ** 2 <= Math.pow(r[i], 2)) circles += 1;
//   }
//   return circles
// }

// //method 2: reduce
// function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
//   //iterate through all circles - reduce to a count of # of times a border was crossed
//   return r.reduce((accumulator, radius, index) => {
//     //distance from current circle center to the start
//     const distToStart = Math.hypot(x[index] - start_x, y[index] - start_y);
//     //distance from current circle center to the end
//     const distToEnd = Math.hypot(x[index] - end_x, y[index] - end_y);
//     // If radius is in between distToStart and distToEnd,  increase counter
//     return (distToStart > radius && radius > distToEnd) ||
//       (distToStart < radius && radius < distToEnd)
//       ? ++accumulator
//       : accumulator;
//   }, 0);
// }
// // console.log(circleCountry([1, 3, 2, 2], [8, 6, 2, 2], [1, 1, 2, 1], 0, 4, 1, 5))
// // console.log(circleCountry([1, 3, 2, 2], [8, 6, 2, 2], [1, 1, 2, 1], 2, 3, 1, 5))
// // console.log(circleCountry([1, 3, 2, 2], [8, 6, 2, 2], [1, 1, 2, 1], 3, 6, 2, 2))
// // console.log(circleCountry([1, 3, 2, 2], [8, 6, 2, 2], [1, 1, 2, 1], 2, 3, 2, 2))