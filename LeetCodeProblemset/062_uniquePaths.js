/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

 //math
var uniquePaths = function(m, n) {
    var res = 1
    for (let i = n,j =1;j<m ;i++,j++){
        res = Math.floor(res*i/j)
    }
    return res
};

console.log(uniquePaths(7,3))