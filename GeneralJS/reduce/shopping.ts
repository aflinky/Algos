/**
 * Use reduce to take an array of shopping orders to determine how much money was spent
 * Each order will provide relevant data about the order
 * You may assume there is at least one element in the array
 */

export type Order = {
  store: string;
  product: string;
  price: number;
  has10PercentSalesTax: boolean; // adds 10% onto total price of item
};

export function shopping(arr: Order[]): number {}

