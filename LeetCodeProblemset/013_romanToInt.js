/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var romanNum = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    let sum = 0
    for (let index = 0; index < s.length; index++) {
        if (index === s.length - 1) return  sum+romanNum[s[index]]
        else if (romanNum[s[index]]>=romanNum[s[index+1]]) sum+=romanNum[s[index]]
        else sum-=romanNum[s[index]]
    }
}

console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))