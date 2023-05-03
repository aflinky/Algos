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

// original solution
// function topProduct(state: string) {
//   // match state to state code
//   const stateCode = states.find(stateObject => stateObject.state == state)?.stateCode;

//   // all products for passed state
//   const stateOrders = orders.filter(order => order.stateCode == stateCode);

//   // dict to hold productId : number of products
//   const sortedProducts: any = {};

//   // iterate through state orders to add orders to sorted products
//   for(let i = 0; i < stateOrders.length; i++) {
//     let currentProductId = stateOrders[i].productId;
//     // if the product is already present in dictionary add to number of products with that id
//     if(currentProductId in sortedProducts) {
//       sortedProducts[currentProductId] = sortedProducts[currentProductId] + 1;
//     } else {
//       sortedProducts[currentProductId] = 1;
//     }
//   }

//   /*
//     Sorted Products
//     {
//       '1': 2, 
//       '2': 1 
//     }
//   */

//   // find the product id with the highest number of products
//   // full transparency I cobbled this together from a couple of stack overflow comments also I'm still iterating twice (embarrassing)
//   const topProductId = Number(Object.keys(sortedProducts).reduce((a, b) => sortedProducts[a] > sortedProducts[b] ? a : b)); // NOTE : I should be able to do this step in side of my for loop
  
//   // match product id to product details
//   const topProductDetails = products.find(product => product.productId == topProductId);

//   // return full product info
//   return topProductDetails;
// }

// updated solution -> simplified and streamlined
function topProduct(state: string) {
  // orders for passed state
  const stateOrders = orders.filter(order => order.stateCode == states.find(stateObject => stateObject.state == state)?.stateCode);

  // dict to hold productId : number of products
  /*
    Sorted Products
    {
      '1': 2, 
      '2': 1 
    }
  */
  const sortedProducts: any = {};
  let topProductId;

  // iterate through state orders to add orders to sorted products
  for(let i = 0; i < stateOrders.length; i++) {
    let currentProductId = stateOrders[i].productId;
    // if the product is already present in dictionary add to number of products with that id
    if(currentProductId in sortedProducts) {
      sortedProducts[currentProductId] = sortedProducts[currentProductId] + 1;
      topProductId = sortedProducts[currentProductId] > sortedProducts[currentProductId - 1] || sortedProducts[currentProductId - 1] == undefined ? currentProductId : currentProductId - 1;
    } else {
      sortedProducts[currentProductId] = 1;
    }
  }
  
  // match product id to product details
  const topProductDetails = products.find(product => product.productId == topProductId);

  // return full product info
  return topProductDetails;
}

module.exports = { topProduct, suigei, sancerre, gin };