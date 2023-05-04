import { voting, Human } from '../voting';

const human1: Human = {
  name: 'Leslie',
  voted: true,
};
const human2: Human = {
  name: 'Gary',
  voted: false,
};
const human3: Human = {
  name: 'Ben',
  voted: true,
};

describe('voting', () => {
  test('case 1', () => {
    expect(voting([human1])).toBe(1)
  });
  
  test('case 2', () => {
    expect(voting([human1, human2, human3])).toBe(2)
  });
});
