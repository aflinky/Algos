/*
 * Given a state, return the product info of the top product sold in that state
 * (Assume all inputs and data are well-formed and there is a top product, no ties)
 * Very good to do after two-sum
 */
type State = {
  stateId: number;
  state: string;
  stateCode: string;
};

const states: State[] = [
  {
    stateId: 1,
    state: "New York",
    stateCode: "NY",
  },
  {
    stateId: 2,
    state: "Massachusetts",
    stateCode: "MA",
  },
  {
    stateId: 3,
    state: "Colorado",
    stateCode: "CO",
  },
];

type Product = {
  productId: number;
  productType: string;
  productName: string;
};

export const suigei: Product = {
  productId: 1,
  productType: "sake",
  productName: "Suigei Drunken Whale",
};
export const sancerre: Product = {
  productId: 2,
  productType: "wine",
  productName: "Sancerre",
};
export const gin: Product = {
  productId: 3,
  productType: "gin",
  productName: "Empress",
};

const products: Product[] = [suigei, sancerre, gin];

type Order = {
  orderId: number;
  stateCode: string;
  productId: number;
};

const orders: Order[] = [
  {
    orderId: 1,
    stateCode: "MA",
    productId: 2,
  },
  {
    orderId: 2,
    stateCode: "NY",
    productId: 1,
  },
  {
    orderId: 3,
    stateCode: "CO",
    productId: 3,
  },
  {
    orderId: 4,
    stateCode: "NY",
    productId: 1,
  },
  {
    orderId: 5,
    stateCode: "NY",
    productId: 2,
  },
  {
    orderId: 6,
    stateCode: "MA",
    productId: 2,
  },
  {
    orderId: 7,
    stateCode: "MA",
    productId: 3,
  },
  {
    orderId: 8,
    stateCode: "CO",
    productId: 1,
  },
  {
    orderId: 9,
    stateCode: "CO",
    productId: 3,
  },
];

function topProduct(state: string): Product {
  // Grab state code
  const stateObj: State = states.find((s) => s.state === state) as State;
  const stateCode = stateObj.stateCode;

  // Grab orders for given state code
  // and track top product
  const orderCountsInState = {};
  let [topProductId, topProductOrderCount] = [Infinity, 0];
  orders.forEach((o) => {
    if (o.stateCode === stateCode) {
      // Either increment or add to orderCountsInState obj
      if (orderCountsInState.hasOwnProperty(o.productId))
        orderCountsInState[o.productId]++;
      else orderCountsInState[o.productId] = 1;
      
      // Update top product details if necessary
      if (orderCountsInState[o.productId] > topProductOrderCount) {
        topProductOrderCount = orderCountsInState[o.productId];
        topProductId = o.productId;
      }
    }
  });

  // Use top prodcut id to grab product
  return products.find((p) => p.productId === topProductId) as Product;
}

module.exports = { topProduct, suigei, sancerre, gin };
