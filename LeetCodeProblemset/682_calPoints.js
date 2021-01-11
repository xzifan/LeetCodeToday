/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let points = []
    for(let item of ops){
        if (item==="C"){
            points.pop()
        }else if(item==="D"){

            points.push(points[points.length-1]*2)
        }else if(item==="+"){
            points.push(points[points.length-1]*1+points[points.length-2]*1)
        }else{
            points.push(item*1)
        }
    }
    let result = 0
    for(let point of points)    result+=point
    return result
};

console.log(calPoints(["5","2","C","D","+"]))