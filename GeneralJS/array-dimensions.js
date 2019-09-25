// write a function "arrDimensions" that takes a (nested) array and returns the number of nesting levels in that array
// arrDimensions( [2, 5, 1] );  -> 1
// arrDimensions( [2, [5], 1] );  -> 2
// arrDimensions( [2, [5], [3]] );  -> 2
// arrDimensions( [2, [5], [3, [[16]]], 1] );  -> 4

//----------------------------------------
// linear recursion
//----------------------------------------
// function arrDimensions(nestedArr) {
//   if (nestedArr.length === 0) return 0;
//   let levels = 1;
//   let deep = [];
//   for (let i=0; i<nestedArr.length; i++) {
//     if (Array.isArray(nestedArr[i])) {
//       // console.log(nestedArr[i])
//       deep = deep.concat(nestedArr[i])
//     }
//   }
//   // console.log(deep)
//   // console.log(arrDimensions(deep))
//   return levels + arrDimensions(deep);
// }


//----------------------------------------
// tail-call recursion
//----------------------------------------
function arrDimensions(nestedArr, levels=0) {
  if (nestedArr.length === 0) return levels;
  let deep = [];
  for (let i=0; i<nestedArr.length; i++) {
    if (Array.isArray(nestedArr[i])) {
      deep = deep.concat(nestedArr[i])
    }
  }
  ++levels;
  return arrDimensions(deep, levels);
}

console.log(arrDimensions( [] ));
console.log(arrDimensions( [2, 5, 1] ));
console.log(arrDimensions( [2, [5], 1] ));
console.log(arrDimensions( [2, [5], [3]] ));
console.log(arrDimensions( [2, [5], [[3]]] ));
console.log(arrDimensions( [2, [[[[[[[[[[[[[[[[[[[5]]]]]]]]]]]]]]]]]]], [3, [[[[[[16]]]]]]], 1] ));