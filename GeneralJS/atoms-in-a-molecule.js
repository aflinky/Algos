// For a given chemical formula, count the number of atoms of each element contained in the molecule and return an object.
//
// Notes:
//  * The count of atoms of a particular element is a positive integer following the name. It is optional, and if omitted, the count is assumed to be 1.
//  * The same element may occur more than once in the molecular formula.

// For example:
// const water = 'H2O'
// parseMolecule(water); // return {H: 2, O: 1}
// const methanol = 'CH3OH'
// parseMolecule(methanol); // return {C: 1, H: 4, O: 1}

function parseMolecule(str) {
  // regex looks for pattern that is UPPERCASE + number {0,} => []
  // iterate through the matches and splice out the number (if no number, 1)
  // throw into an obj
  const pieces = str.match(/([A-Z][a-z]*\d*)/g);
  const atomDictionary = {};
  pieces.forEach(item => {
      const atom = item.match(/([A-Z]+)/gi);
      let quantity = item.match(/(\d+)/g);
      quantity = !quantity ? 1 : parseInt(quantity[0]);
      if (atomDictionary[atom]) atomDictionary[atom] += quantity;
      else atomDictionary[atom] = quantity;
  });
  return atomDictionary;
}


// Next level:
// var salt = 'ON(SO3)2' // => { O:7, N:1, S:2 }
// add optional ( )
// [ O, N, (SO3)2 ]
// if (
// grab SO3 and parse
// -> double all values in returned dictionary
// add to curr dictionary

module.exports = parseMolecule;