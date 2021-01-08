/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var a = new Map([
        ['{','}'],
        ['[',']'],
        ['(',')']
    ])
    var read = []
    if (s.length%2!=0) return false
    for (let i=0;i<s.length;i++){
        if (a.has(s[i]))
            read.push(s[i])
        else if (a.get(read[read.length-1])===s[i]){
            read.pop()
            if (read.length ===0 && i===s.length-1)
                return true
        }else return false
    }
    return false
};

console.log(isValid('(('))