/* 
 * Given a state, return the product info of the top product sold in that state
 * (Assume all inputs and data are well-formed and there is a top product, no ties)
 * Very good to do after two-sum
 */
type State = {
  stateId: number;
  state: string;
  stateCode: string;
}

const states: State[] = [
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

type Product = {
  productId: number;
  productType: string;
  productName: string;
}

export const suigei: Product = {
  productId: 1,
  productType: 'sake',
  productName: 'Suigei Drunken Whale',
};
export const sancerre: Product = {
  productId: 2,
  productType: 'wine',
  productName: 'Sancerre',
};
export const gin: Product = {
  productId: 3,
  productType: 'gin',
  productName: 'Empress',
};

const products: Product[] = [ suigei, sancerre, gin ];

type Order = {
  orderId: number;
  stateCode: string;
  productId: number;
}

const orders: Order[] = [
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
  const sortedProducts: any = {}; // dict to hold product id and order count
  let topProductId; // running product with highest count

  // match state to state code
  const stateCode = states.find(stateObject => stateObject.state == state)?.stateCode;

  // iterate through orders to add orders to sorted products
  for(let i = 0; i < orders.length; i++) {
    if(orders[i].stateCode != stateCode) i += 1; // if order's state does not match passed state -> skip order
    let currentProductId = orders[i].productId; // i just don't wanna type this everytime
    // if the product is already present in dictionary add to number of products with that id and update top product id
    if(currentProductId in sortedProducts) {
      sortedProducts[currentProductId] = sortedProducts[currentProductId] + 1;
      if(sortedProducts[topProductId] < sortedProducts[currentProductId]|| topProductId == undefined ) topProductId = currentProductId;
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