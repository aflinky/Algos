/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {
    if (stock_prices_yesterday.length <= 1) return 0; //if there is only one or less prices given, no profit can be made
    let maxProfit = 0; //initialize maxProfit at 0
    let min = stock_prices_yesterday[0]; //start min at index 0
    let max = stock_prices_yesterday[0]; //start max at index 0
    for (let i=1; i<stock_prices_yesterday.length; i++) { //start for loop at index 1
        //compare curr value to min
        if (stock_prices_yesterday[i]<min) { //if we have a new min
            if (max-min>maxProfit) {maxProfit = max-min} //maxProfit needs to be reevalutated 
            // and both min and max must be reassigned
            min = stock_prices_yesterday[i];
            max = stock_prices_yesterday[i];
        }
        else if (stock_prices_yesterday[i]>max) { //if our curr is not less than min, chek max
            //if the curr is > max, need to reassign max
            max = stock_prices_yesterday[i];
        }
    }
    //at the end of our for loop, need to do one last maxProfit check
    if (max-min>maxProfit) {maxProfit = max-min}
    return maxProfit;
}

// const prices = [10, 3, 6, 8, 20, 40, 30, 50, 2, 100]
// console.log(bestProfit(prices))