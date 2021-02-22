/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     var map = new Map()
//     var counts = []
//     if(s.length<=1)
//         return s.length
//     for (let i = 0; i<s.length; i++){
//         let count = 0
//         for (let j = i; j<s.length;j++){
//             if(map.has(s[j]))   {
//                 break;
//             } 
//             else {
//                 map.set(s[j],true)
//                 count ++
//             }
//         }
//         counts.push(count)
//         map.clear()
//     }
//     return Math.max(...counts)
// };
var lengthOfLongestSubstring = function(s) {
    let answer = 0;
    let start = 0;
    for (let end = 0; end < s.length; end++) {
        let position = s.indexOf(s[end], start);
        if (position < end) {
            // start 和 end 之间有重复字符
            start = position + 1;
        }
        answer = Math.max((end - start + 1), answer);
    }
    return answer;
};