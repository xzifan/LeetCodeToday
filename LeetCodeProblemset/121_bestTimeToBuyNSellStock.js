/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     var maxs = []
//     for (let i=0;i<prices.length;i++){
//         var profits = []
//         for (let j=i;j<prices.length;j++){
//             profits.push(prices[j]-prices[i])
//         }
//         let max = Math.max(...profits)
//         if (max>0)  maxs.push(max)
//     }
//     // console.log(maxs)
//     if (maxs.length==0) return 0
//     else return Math.max(...maxs)
// };

var maxProfit = function(prices){
    var max = 0;
    var min = Number.MAX_SAFE_INTEGER

    for (let i = 0;i<prices.length;i++){
        min = Math.min(min,prices[i])
        max = Math.max(max,prices[i]-min)
    }
    return max
}

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([1,2]))