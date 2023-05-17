import { shopping, Order } from '../shopping';

const order1: Order = {
  store: 'REI',
  product: 'Climbing shoes',
  price: 100,
  has10PercentSalesTax: false,
  // totalPrice: 100,
};
const order2: Order = {
  store: 'Trader Joes',
  product: 'Salmon jerky',
  price: 5.50,
  has10PercentSalesTax: true,
  // totalPrice: 6.05,
};
const order3: Order = {
  store: 'Hong Kong Supermarket',
  product: 'Spicy Chili Crisp',
  price: 3,
  has10PercentSalesTax: true,
  // totalPrice: 3.30,
};

describe('shopping', () => {
  test('case 1', () => {
    expect(shopping([order1])).toBe(100)
  });
  
  test('case 2', () => {
    expect(shopping([order1, order2, order3])).toBe(109.35)
  });
});
