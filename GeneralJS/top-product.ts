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
  const stateOrders = orders.filter(order => order.stateCode == stateCode);
  const filteredProducts: any = {};
  for(let i = 0; i < stateOrders.length; i++) {
    let currentProductId = stateOrders[i].productId;
    if(currentProductId in filteredProducts){
      filteredProducts[currentProductId] = filteredProducts[currentProductId] + 1;
    } else {
      filteredProducts[currentProductId] = 1;
    }
  }
  console.log(filteredProducts) // remove log once solution is finalized -> example : {'2' : 2, '1' : 1} product 2 is the top product
  /*
  TO DO
  while building filtered products dict -> determine product key with highest value
  note : only iterate through filtered products once, make use of existing values (dict), be aware of utilizing variables in different ways
  */


  // pull each product
  // TO DO : refactor logic and remove
  const sake = stateOrders.filter(product => product.productId == 1);
  const wine = stateOrders.filter(product => product.productId == 2);
  const gin = stateOrders.filter(product => product.productId == 3);

  // determine product appearing most in list of products
  // TO DO : refactor logic and remove
  let topProduct = 0;
  if(sake.length > wine.length) {
    topProduct = 1;
  } else if (wine.length > sake.length) {
    topProduct = 2;
  }
  if(gin.length > topProduct) topProduct = 3;

  // TO DO : use this logic to match product id from filtered products to product object
  const topProductDetails = products.find(product => product.productId == topProduct)

  return topProductDetails;
}

module.exports = { topProduct, suigei, sancerre, gin };