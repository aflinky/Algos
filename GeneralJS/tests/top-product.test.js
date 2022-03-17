const func = require('../top-product');

describe('Top Product', () => {
  test('NY', () => {
    expect(func.topProduct('New York')).toStrictEqual(func.suigei);
  });
  
  test('MA', () => {
    expect(func.topProduct('Massachusetts')).toStrictEqual(func.sancerre);
  });
  
  test('CO', () => {
    expect(func.topProduct('Colorado')).toStrictEqual(func.gin);
  });
})
