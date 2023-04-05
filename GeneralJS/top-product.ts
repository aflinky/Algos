/* 
 * Given a state, return the product info of the top product sold in that state
 * (Assume all inputs and data are well-formed and there is a top product, no ties)
 * Very good to do after two-sum
 */

const states = [
  {
    stateId: 1,
    state: 'New York',
    stateCode: 'NY',
  },
  {
    stateId: 2,
    state: 'Massachusetts',
    stateCode: 'MA',
  },
  {
    stateId: 3,
    state: 'Colorado',
    stateCode: 'CO',
  },
];

export const suigei = {
  productId: 1,
  productType: 'sake',
  productName: 'Suigei Drunken Whale',
};
export const sancerre = {
  productId: 2,
  productType: 'wine',
  productName: 'Sancerre',
};
export const gin = {
  productId: 3,
  productType: 'gin',
  productName: 'Empress',
};

const products = [ suigei, sancerre, gin ];

const orders = [
  {
    orderId: 1,
    stateCode: 'MA',
    productId: 2,
  },
  {
    orderId: 2,
    stateCode: 'NY',
    productId: 1,
  },
  {
    orderId: 3,
    stateCode: 'CO',
    productId: 3,
  },
  {
    orderId: 4,
    stateCode: 'NY',
    productId: 1,
  },
  {
    orderId: 5,
    stateCode: 'NY',
    productId: 2,
  },
  {
    orderId: 6,
    stateCode: 'MA',
    productId: 2,
  },
  {
    orderId: 7,
    stateCode: 'MA',
    productId: 3,
  },
  {
    orderId: 8,
    stateCode: 'CO',
    productId: 1,
  },
  {
    orderId: 9,
    stateCode: 'CO',
    productId: 3,
  },
];

function topProduct(state: string) {
  // match state to state code
  const stateCode = states.find(stateObject => stateObject.state == state)?.stateCode;

  // all products for passed state
  const stateProducts = orders.filter(order => order.stateCode == stateCode);

  // pull each product
  // this will get gross and annoying the MINUTE more products are added...
  const sake = stateProducts.filter(product => product.productId == 1);
  const wine = stateProducts.filter(product => product.productId == 2);
  const gin = stateProducts.filter(product => product.productId == 3);

  // determine product appearing most in list of products
  // there's gotta be a smoother way to do this but I'm not gonna look it up yet
  let topProduct = 0;
  if(sake.length > wine.length) {
    topProduct = 1;
  } else if (wine.length > sake.length) {
    topProduct = 2;
  }
  if(gin.length > topProduct) topProduct = 3;

  const topProductDetails = products.find(product => product.productId == topProduct)

  return topProductDetails;
}

module.exports = { topProduct, suigei, sancerre, gin };