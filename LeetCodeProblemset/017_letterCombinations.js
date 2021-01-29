/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const letters = [
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz"
    ]
    var res = []
    if (digits.length==0) return res
    function getDigit(i,str){
        if (i===digits.length)    res.push(str)
        else {
            let digit = digits[i]
            for (let index=0;index<letters[digit-2].length;index++){
                getDigit(i+1,str+letters[digit-2][index])
            }
        }
    }
    getDigit(0,"")
    return res
};

letterCombinations("234")