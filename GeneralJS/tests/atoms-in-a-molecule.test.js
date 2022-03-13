const func = require('../atoms-in-a-molecule');

const water = 'H2O'
const methanol = 'CH3OH'
const meow = 'H12LiO'

describe('Atoms in a molecule', () => {
  test('water', () => {
    expect(func(water)).toStrictEqual({
      H: 2,
      O: 1,
    });
  });

  test('methanol', () => {
    expect(func(methanol)).toStrictEqual({
      C: 1,
      H: 4,
      O: 1,
    });
  });

  test('meow', () => {
    expect(func(meow)).toStrictEqual({
      H: 12,
      Li: 1,
      O: 1,
    });
  });

})
