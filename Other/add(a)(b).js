// implement add(2)(3) in JS

function add_a(a){
    return function (b){
        return a+b
    }
}

// what about add(2)(3)(3)?

function add_b(a){
    var sum = a
    function result(b){
        console.log(sum,b) //called twice:2,3 ;  5,3
        sum = sum+b
        return result
    }
    result.sumOf = function(){
        return sum
    }
    return result
}
console.log(add_b(2)(3)(3).sumOf())

//实现函数add
//add(2,3,4).sumOf()
//add(2)(3)(4).sumOf()
//add(2,3)(4).sumOf()
// use arguments; [].slice.apply(arguments)
function add_c(){
    let args = [].slice.apply(arguments)
    console.log(arguments) // [1,3,5]
    function result(){
        args = args.concat([].slice.apply(arguments))//get args again and merge if called 
        var sum = args.reduce(function(prev,curr){return prev+curr})
        return sum
    }
    return result()
}

console.log(add_c(1,3,5))//9
