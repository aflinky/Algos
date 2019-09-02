'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

// function sumMultiples3Or5Below1000() {
//   let sum = 0;
//   for (let i=3; i<1000; i++) {
//     if (i%3 === 0 || i%5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  const min = Math.min(x, y);
  const max = Math.max(x, y);
  for (let i=min; i<z; i++) {
    if (i%min === 0 || i%max === 0) {
      sum += i;
    }
  }
  return sum;
}

// arithmetic series = (n(a1+ a2))/2
// (n=number of elements between the multiple (aka the starting number and the greatest multiple)
// a1=starting number, a2=the greatest multiple below our number in question)
// ex 3 under 100 => (33(3+99))/100
function ap(num, diff) {
  const a1 = diff;
  const n = Math.floor(num/diff);
  const aN = n*diff;
  return (n * (a1*aN))/2
}
function sumMultiples3Or5Below1000() {
  const sumOne = ap(z, x);
  const sumTwo = ap(z, y);
  const both = ap(z, x*y);
  return (sumOne+sumTwo)-both
}

// console.log(sumMultiples3Or5Below1000())
// console.log(sumMultiplesXOrYBelowZ(3, 5, 1000))

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
