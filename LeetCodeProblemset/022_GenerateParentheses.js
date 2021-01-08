// const generateParenthesis = function(n) {
//     var list = []
//     var  count = 1, result  = '(', index = 1;
//     place(list,result,count,index,n)
//     return list
// };

// const place = function (list,result,count,i,n){
//     if (i===2*n){
//         list.push(result)
//     }else if (count===0) {
//         place(list,result+'(',count+1,i+1,n)
//     }else if (count===n) {
//         place(list,result+')',count-1,i+1,n)
//     } else {
//         place(list,result+')',count-1,i+1,n)
//         place(list,result+'(',count+1,i+1,n)
//     }
// }

// Depth-first search
const generateParenthesis = function(n) {
    var list = []
    const generate = function(L,R,result){
        if (L===n && R===n)
            list.push(result)
        if (L<n) generate(L+1,R,result+'(')
        if (R<L) generate(L,R+1,result+')')
    }
    generate(0,0,'')
    return list
};

console.log(generateParenthesis(2))