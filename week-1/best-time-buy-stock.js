/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    if(prices.length < 2) return 0;
    
    let buyingPrice = prices[0];
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        if(prices[i] < buyingPrice) buyingPrice = prices[i];
        else if ((prices[i] - buyingPrice) > maxProfit) maxProfit = prices[i] - buyingPrice;
    };
    return maxProfit;
};