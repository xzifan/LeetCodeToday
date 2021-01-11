/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let s = x.toString()
    for (let i = 0; i < Math.floor(s.length/2); i++) {
        if (s[i] !== s[s.length-1-i])   return false
    }
    return true
};

console.log(isPalindrome(121))
console.log(isPalindrome(12121))
console.log(isPalindrome(12321))