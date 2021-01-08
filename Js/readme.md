# A list of notes of JavaScript questions
### 1.  The add(a)(b) question
    
- Goal:   
    Implement a function for following usage:
        
    ```js    
    add(2,3,4).sumOf()
    add(2)(3)(4).sumOf()
    add(2,3)(4).sumOf()
    ```    

-  use arguments
    ```js
    [].slice.apply(arguments)
    ```
    According to [MDN web doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) :  
    The `arguments` object is not an `Array`. It is similar, but lacks all `Array` properties except length. For example, it does not have the `pop()` method.  
    注意，`arguments`对象不是数组类型。类似于数组但是缺少很多数组的属性，仅保留length。  
    However, it can be converted to a real Array:  
    ```js
    var args = Array.prototype.slice.call(arguments);
    // Using an array literal is shorter than above but allocates an empty array
    var args = [].slice.call(arguments);
    ```