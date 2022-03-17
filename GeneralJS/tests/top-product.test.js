const func = require('../top-product');

describe('Top Product', () => {
  test('NY', () => {
    expect(func.topProduct('NY')).toStrictEqual(func.suigei);
  });
  
  test('MA', () => {
    expect(func.topProduct('MA')).toStrictEqual(func.sancerre);
  });
  
  test('CO', () => {
    expect(func.topProduct('CO')).toStrictEqual(func.gin);
  });
})
